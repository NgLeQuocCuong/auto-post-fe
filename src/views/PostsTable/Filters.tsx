import { memo, FC } from 'react';
import { Form, Button, Input } from 'antd';
import Dropdown from 'views/AllPosts/Dropdown/components/Dropdown';
import './index.scss';
import { useSearchParams } from 'react-router-dom';
interface FilterProps {
    filtersList?: {
        title: string;
        name: string;
        options?: { label: string; value: string | boolean | number }[];
        type?: 'text' | 'checkbox' | 'radio' | 'dateRange' | 'tagSelect';
    }[];
}
const Filters: FC<FilterProps> = memo(({ filtersList }) => {
    const [searchParams, setSearchParams] = useSearchParams();
    return (
        <>
            {filtersList?.map(item => {
                switch (item.type) {
                    case 'text':
                        return (
                            <Form.Item
                                key={item.name}
                                name={item.name}
                                initialValue={searchParams.get(item.name) || ''}
                            >
                                <Input
                                    type="text"
                                    placeholder={item.title}
                                    allowClear
                                />
                            </Form.Item>
                        );
                    case 'checkbox':
                        return (
                            <Dropdown
                                key={item.name}
                                title={item.title}
                                name={item.name}
                                options={item.options}
                                type="checkbox"
                                defaultValue={searchParams.getAll(item.name)}
                            />
                        );
                    case 'radio':
                        return (
                            <Dropdown
                                key={item.name}
                                title={item.title}
                                name={item.name}
                                options={item.options}
                                type="radio"
                            />
                        );
                    case 'dateRange':
                        return (
                            <Dropdown
                                key={item.name}
                                title={item.title}
                                name={item.name}
                                type="dateRange"
                            />
                        );
                    case 'tagSelect':
                        return (
                            <Dropdown
                                key={item.name}
                                title={item.title}
                                name={item.name}
                                type="tagSelect"
                                handleTagSelectChange={tags => {
                                    let paramString = '';
                                    tags.forEach(tag => {
                                        //Split by comma
                                        paramString += `${tag},`;
                                    });
                                    searchParams.set(item.name, paramString);
                                }}
                            />
                        );

                    default:
                        return <></>;
                }
            })}
            <Button type="primary" htmlType="submit">
                Áp dụng
            </Button>
            <Button danger htmlType="reset" onClick={() => setSearchParams('')}>
                Bỏ chọn tất cả
            </Button>
        </>
    );
});

Filters.displayName = 'Filters';
export default Filters;

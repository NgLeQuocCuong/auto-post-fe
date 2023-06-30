import { memo, FC } from 'react';
import { Form, Button, Input } from 'antd';
import Dropdown from 'views/AllPosts/Dropdown/components/Dropdown';
import './index.scss';
interface FilterProps {
    filtersList?: {
        title: string | 'Lọc';
        name: string;
        options?: { label: string; value: string | boolean | number }[];
        type?: 'text' | 'checkbox' | 'radio' | 'dateRange';
    }[];
}
const Filters: FC<FilterProps> = memo(({ filtersList }) => {
    return (
        <>
            {filtersList?.map(item => {
                switch (item.type) {
                    case 'text':
                        return (
                            <Form.Item name={item.name}>
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
                                title={item.title}
                                name={item.name}
                                options={item.options}
                                type="checkbox"
                            />
                        );
                    case 'radio':
                        return (
                            <Dropdown
                                title={item.title}
                                name={item.name}
                                options={item.options}
                                type="radio"
                            />
                        );
                    case 'dateRange':
                        return (
                            <Dropdown
                                title={item.title}
                                name={item.name}
                                type="dateRange"
                            />
                        );
                    default:
                        return <></>;
                }
            })}
            <Button type="primary" htmlType="submit">
                Áp dụng
            </Button>
            <Button danger htmlType="reset">
                Bỏ chọn tất cả
            </Button>
        </>
    );
});

Filters.displayName = 'Filters';
export default Filters;

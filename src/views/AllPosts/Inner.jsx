import './index.scss';
import { Button, Form } from 'antd';
import { memo, useState } from 'react';
import TextInput from 'components/CommonInput/components/TextInput';
import ToggleFilterIcon from './Dropdown/icons/ToggleFilterIcon';
import Dropdown from './Dropdown/components/Dropdown';
import PostsTable from 'components/PostsTable/components/PostsTable';
const Inner = memo(({ handleAllPosts, tableData }) => {
    const [isFilterShown, setIsFilterShown] = useState(false);
    const handleFilters = () => {
        setIsFilterShown(!isFilterShown);
    };
    const handleFinish = values => {
        //Remove undefined fields
        Object.keys(values).forEach(key => {
            if (!values[key] || typeof values[key] === 'object') {
                delete values[key];
            }
        });
        //Format date time
        if (values.min_time) {
            values.min_time = values.min_time.format('YYYY-MM-DD');
        }
        if (values.min_time) {
            values.max_time = values.max_time.format('YYYY-MM-DD');
        }
        handleAllPosts(values);
    };
    return (
        <div className="all-posts-container">
            <div className="all-posts__header">
                <div className="all-posts__header__title">
                    Tất cả bài đăng
                    <span className="posts-number">
                        ({tableData?.totalRows || 0})
                    </span>
                </div>
                <Button
                    onClick={handleFilters}
                    className={`show-filters-btn ${
                        isFilterShown && 'btn-shown'
                    }`}
                >
                    <ToggleFilterIcon />
                    Bộ lọc
                </Button>
            </div>
            <Form
                className={`all-posts__filters ${
                    isFilterShown && 'show-filters'
                }`}
                onFinish={handleFinish}
                method="GET"
            >
                <Form.Item name="search">
                    <TextInput placeholder="Tìm theo nội dung" allowClear />
                </Form.Item>
                <Dropdown title="Ngày đăng" type="dateRange" />
                <Dropdown
                    title="Loại bài viết"
                    name="post_type"
                    options={[
                        { label: 'Báo chí', value: 'ARTICLE' },
                        { label: 'Quảng cáo', value: 'COMMERCIAL' },
                        { label: 'Marketing', value: 'MARKETING' },
                        { label: 'Tuyển dụng', value: 'RECRUITMENT' },
                        { label: 'Học thuật', value: 'EDUCATION' },
                    ]}
                    type="radio"
                />
                <Button type="primary" htmlType="submit">
                    Áp dụng
                </Button>
                <Button danger htmlType="reset">
                    Bỏ chọn tất cả
                </Button>
            </Form>
            <PostsTable tableData={tableData} />
        </div>
    );
});

Inner.displayName = 'Inner';

export default Inner;

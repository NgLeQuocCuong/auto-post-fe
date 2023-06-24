import './index.scss';
import { Button } from 'antd';
import { memo, useState, useCallback, useEffect } from 'react';
import routeConstants from 'route/routeConstant';
import Dropdown from 'components/CommonInput/components/Dropdown';
import TextInput from 'components/CommonInput/components/TextInput';
import ToggleFilterIcon from 'components/CommonInput/icons/ToggleFilterIcon';

const Inner = memo(() => {
    const [isFilterShown, setIsFilterShown] = useState(false);
    const handleFilters = () => {
        setIsFilterShown(!isFilterShown);
    }

    return (
        <div className="all-posts-container">
            <div className="all-posts__header">
                <div className="all-posts__header__title">
                    Tất cả bài đăng
                    <span className="posts-number">(256)</span>
                </div>
                <Button onClick={handleFilters} className={`show-filters-btn ${isFilterShown && 'btn-shown'}`}>
                    <ToggleFilterIcon />Bộ lọc
                </Button>
            </div>
            <div className={`all-posts__filters ${isFilterShown && 'show-filters'}`}>
                <TextInput placeholder='Tìm kiếm nội dung' 
                allowClear
                />
                <Dropdown
                    title="Nền tảng"
                    options={[
                        { label: 'Facebook', value: 'facebook' },
                        { label: 'Zalo', value: 'zalo' },
                    ]}
                />
                <Dropdown
                    title="Ngày đăng"
                    pickDate
                /> 
                <Dropdown
                    title="Loại bài viết"
                    options={[
                        { label: 'Quảng cáo', value: 'adsvertise' },
                        { label: 'Bán hàng', value: 'selling' },
                        { label: 'Marketing', value: 'marketing'},
                        { label: 'Học thuật', value: 'academic'},
                        { label: 'Khác', value: 'other'},
                    ]}
                    checkOnlyOne
                />

                <Button type="primary">Áp dụng</Button>
            </div>
        </div>
    )
});

Inner.displayName = 'Inner';

export default Inner;
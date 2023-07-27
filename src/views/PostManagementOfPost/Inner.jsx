import 'views/AllPosts/index.scss';
import { Button, Tag } from 'antd';
import { memo, useCallback, useState, useMemo } from 'react';
import ToggleFilterIcon from 'icons/ToggleFilterIcon';
import PostsTable from 'views/PostsTable/PostsTable';
import WebLayout from 'layouts/Web/WebLayout';
import { useSearchParams } from 'react-router-dom';
const Inner = memo(({ handleViewPostManagement, tableData }) => {
    const [isFilterShown, setIsFilterShown] = useState(false);
    const toggleFilters = useCallback(() => {
        setIsFilterShown(!isFilterShown);
    }, [isFilterShown]);
    const [searchParams, setSearchParams] = useSearchParams();
    const handleFinish = useCallback(
        values => {
            handleViewPostManagement(values);
        },
        [handleViewPostManagement]
    );
    const filtersList = useMemo(
        () => [
            {
                title: 'Ngày đăng',
                name: 'postDate',
                type: 'dateRange',
            },
            {
                title: 'Nền tảng',
                name: 'platform',
                type: 'checkbox',
                options: [
                    {
                        label: 'Facebook',
                        value: 'FACEBOOK',
                    },
                    {
                        label: 'Linkedin',
                        value: 'LINKEDIN',
                    },
                    {
                        label: 'Twitter',
                        value: 'TWITTER',
                    },
                ],
            },
            {
                title: 'Hình thức đăng',
                name: 'autoPublish',
                type: 'checkbox',
                options: [
                    {
                        label: 'Hẹn giờ',
                        value: true,
                    },
                    {
                        label: 'Đăng ngay',
                        value: false,
                    },
                ],
            },
            {
                title: 'Trạng thái',
                name: 'status',
                type: 'checkbox',
                options: [
                    {
                        label: 'Đang chờ',
                        value: 'PENDING',
                    },
                    {
                        label: 'Thành công',
                        value: 'SUCCESS',
                    },
                    {
                        label: 'Thất bại',
                        value: 'FAIL',
                    },
                ],
            },
        ],
        []
    );
    const columns = useMemo(
        () => [
            {
                title: 'Nền tảng',
                dataIndex: 'platform',
                key: 'platform',
            },
            {
                title: 'Thời gian đăng',
                dataIndex: 'timePosting',
                key: 'timePosting',
            },
            {
                title: 'Hình thức đăng',
                dataIndex: 'autoPublish',
                key: 'autoPublish',
            },
            {
                title: 'Trạng thái',
                key: 'status',
                dataIndex: 'status',
                render: status => {
                    switch (status) {
                        case 'ĐANG CHỜ':
                            return <Tag color="warning">{status}</Tag>;
                        case 'THÀNH CÔNG':
                            return <Tag color="success">{status}</Tag>;
                        case 'THẤT BẠI':
                            return <Tag color="error">{status}</Tag>;
                        default:
                            return <></>;
                    }
                },
            },
        ],
        []
    );
    return (
        <WebLayout>
            <div className="all-posts-container">
                <div className="all-posts__header">
                    <div className="all-posts__header__title">
                        Lịch sử đăng của bài viết
                        <span className="posts-number">
                            ({tableData?.totalRows ?? 0})
                        </span>
                    </div>
                    <Button
                        onClick={toggleFilters}
                        className={`show-filters-btn ${
                            isFilterShown && 'btn-shown'
                        }`}
                    >
                        <ToggleFilterIcon />
                        Bộ lọc
                    </Button>
                </div>

                <PostsTable
                    columns={columns}
                    content={tableData?.content}
                    currentPage={tableData?.currentPage}
                    pageSize={tableData?.pageSize}
                    totalRows={tableData?.totalRows}
                    totalPages={tableData?.totalPages}
                    filtersList={filtersList}
                    isFilterShown={isFilterShown}
                    onFilters={filterValues => {
                        //Remove undefined values
                        Object.keys(filterValues).forEach(key => {
                            if (
                                filterValues[key] === undefined ||
                                !filterValues[key]
                            ) {
                                delete filterValues[key];
                            } else {
                                if (key === 'minTime') {
                                    filterValues[key] = `${filterValues[
                                        key
                                    ].format('YYYY-MM-DD')}T00:00:00`;
                                }
                                if (key === 'maxTime') {
                                    filterValues[key] = `${filterValues[
                                        key
                                    ].format('YYYY-MM-DD')}T23:59:59`;
                                }
                                if (
                                    key === 'autoPublish' ||
                                    key === 'status' ||
                                    key === 'platform'
                                ) {
                                    filterValues[key] =
                                        filterValues[key].join(',');
                                }
                                searchParams.set(key, filterValues[key]);
                            }
                        });
                        //Delete empty search params
                        searchParams.forEach((value, key) => {
                            if (value === '') {
                                searchParams.delete(key);
                            }
                        });

                        setSearchParams(searchParams);
                        handleFinish(searchParams);
                    }}
                    onPaginate={(page, pageSize) => {
                        searchParams.set('page', page);
                        searchParams.set('pageSize', pageSize);
                        setSearchParams(searchParams);
                    }}
                />
            </div>
        </WebLayout>
    );
});

Inner.displayName = 'Inner';

export default Inner;

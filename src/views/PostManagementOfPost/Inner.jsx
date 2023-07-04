import 'views/AllPosts/index.scss';
import { Button, Tag, Tooltip } from 'antd';
import { EyeOutlined } from '@ant-design/icons';
import { memo, useCallback, useState } from 'react';
import routeConstants from 'route/routeConstant';
import ToggleFilterIcon from 'icons/ToggleFilterIcon';
import PostsTable from 'views/PostsTable/PostsTable';
import WebLayout from 'layouts/Web/WebLayout';
import { generatePath, useNavigate, useSearchParams } from 'react-router-dom';
const Inner = memo(({ uid, handleViewPostManagement, tableData }) => {
    const navigate = useNavigate();
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
    const filtersList = [
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
    ];
    const columns = [
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
        {
            title: 'Hành động',
            key: 'action',
            render: (text, record) => (
                <>
                    <Tooltip placement="top" title="Xem chi tiết">
                        <Button
                            type="text"
                            onClick={() => {
                                const path = generatePath(
                                    routeConstants.MANAGEMENT_DETAIL,
                                    {
                                        uid: record.uid,
                                    }
                                );
                                navigate(path);
                            }}
                        >
                            <EyeOutlined />
                        </Button>
                    </Tooltip>
                </>
            ),
        },
    ];
    return (
        <WebLayout>
            <div className="all-posts-container">
                <div className="all-posts__header">
                    <div className="all-posts__header__title">
                        Lịch sử đăng của bài viết
                        <span className="posts-number">
                            ({tableData.totalRows || 0})
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
                    uid={uid}
                    columns={columns}
                    content={tableData.content}
                    currentPage={tableData.currentPage}
                    pageSize={tableData.pageSize}
                    totalRows={tableData.totalRows}
                    totalPages={tableData.totalPages}
                    filtersList={filtersList}
                    isFilterShown={isFilterShown}
                    onFilters={filterValues => {
                        //Remove undefined values
                        Object.keys(filterValues).forEach(key => {
                            if (
                                filterValues[key] === undefined ||
                                filterValues[key] === '' ||
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
                                searchParams.set(key, filterValues[key]);
                            }
                        });
                        setSearchParams(searchParams);
                        handleFinish(searchParams);
                    }}
                    onPaginate={(page, pageSize) => {
                        searchParams.set('page', page);
                        searchParams.set('pageSize', pageSize);
                        setSearchParams(searchParams);
                        handleFinish(searchParams);
                    }}
                />
            </div>
        </WebLayout>
    );
});

Inner.displayName = 'Inner';

export default Inner;

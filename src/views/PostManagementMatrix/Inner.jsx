import 'views/AllPosts/index.scss';
import { Button, Tag, Tooltip } from 'antd';
import { EyeOutlined, CaretLeftOutlined } from '@ant-design/icons';
import { memo, useCallback, useEffect, useState } from 'react';
import routeConstants from 'route/routeConstant';
import ToggleFilterIcon from 'icons/ToggleFilterIcon';
import PostsTable from 'views/PostsTable/PostsTable';
import WebLayout from 'layouts/Web/WebLayout';
import { NavLink, generatePath, useNavigate } from 'react-router-dom';
const Inner = memo(({ handleViewPostManagement, tableData }) => {
    const navigate = useNavigate();
    const [isFilterShown, setIsFilterShown] = useState(false);
    const toggleFilters = useCallback(() => {
        setIsFilterShown(!isFilterShown);
    }, [isFilterShown]);
    const [filterParams, setFilterParams] = useState({});
    const handleFinish = useCallback(values => {
        //Format date time
        if (values.minTime) {
            values.minTime = values.minTime.format('YYYY-MM-DD') + 'T00:00:00';
        }
        if (values.maxTime) {
            values.maxTime = values.maxTime.format('YYYY-MM-DD') + 'T23:59:59';
        }
        setFilterParams(values);
    }, []);
    useEffect(() => {
        handleViewPostManagement(filterParams);
    }, [filterParams, handleViewPostManagement]);
    const filtersList = [
        {
            title: 'Ngày đăng',
            name: 'postDate',
            type: 'dateRange',
        },
        {
            title: 'Nền tảng',
            name: 'platform',
            type: 'radio',
            options: [
                {
                    label: 'Facebook',
                    value: 'FACEBOOK',
                },
                {
                    label: 'Zalo',
                    value: 'ZALO',
                },
            ],
        },
        {
            title: 'Cách đăng',
            name: 'autoPublish',
            type: 'radio',
            options: [
                {
                    label: 'Hẹn giờ',
                    value: true,
                },
                {
                    label: 'Thủ công',
                    value: false,
                },
            ],
        },
        {
            title: 'Trạng thái',
            name: 'status',
            type: 'radio',
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
            render: (text, record, index) => (
                <>
                    <Tooltip placement="top" title="Xem chi tiết">
                        <Button
                            type="text"
                            onClick={() => {
                                console.log('index', index);
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
                        <NavLink to={routeConstants.ALL_POSTS}>
                            <CaretLeftOutlined />
                        </NavLink>
                        Tất cả bài đã đăng
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
                        //Remove undefined fields
                        Object.keys(filterValues).forEach(key => {
                            if (
                                filterValues[key] === undefined ||
                                !filterValues[key]
                            ) {
                                delete filterValues[key];
                            }
                        });
                        handleFinish({
                            ...filterValues,
                        });
                    }}
                    onPaginate={(page, pageSize) =>
                        handleFinish({
                            ...filterParams,
                            page: page,
                            pageSize: pageSize,
                        })
                    }
                />
            </div>
        </WebLayout>
    );
});

Inner.displayName = 'Inner';

export default Inner;

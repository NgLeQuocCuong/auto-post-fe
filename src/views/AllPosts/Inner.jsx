import {
    DeleteOutlined,
    EditOutlined,
    EyeOutlined,
    HistoryOutlined,
    CaretRightOutlined,
} from '@ant-design/icons';
import { Button, Tag, Tooltip } from 'antd';
import ToggleFilterIcon from 'icons/ToggleFilterIcon';

import { memo, useCallback, useEffect, useState } from 'react';
import { generatePath, useNavigate } from 'react-router-dom';
import routeConstants from 'route/routeConstant';
import './index.scss';
import PostsTable from 'views/PostsTable/PostsTable';
import Popup from 'components/Popup';
import WebLayout from 'layouts/Web/WebLayout';
const Inner = memo(({ handleAllPosts, handleRemovePost, tableData }) => {
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
        handleAllPosts(filterParams);
    }, [filterParams, handleAllPosts]);
    const filtersList = [
        {
            title: 'Tìm theo nội dung',
            name: 'search',
            type: 'text',
        },
        {
            title: 'Ngày đăng',
            name: 'postDate',
            type: 'dateRange',
        },
        {
            title: 'Loại bài viết',
            name: 'postType',
            type: 'radio',
            options: [
                {
                    label: 'Quảng cáo',
                    value: 'COMMERCIAL',
                },
                {
                    label: 'Báo chí',
                    value: 'ARTICLE',
                },
                {
                    label: 'Tuyển dụng',
                    value: 'RECRUITMENT',
                },
                {
                    label: 'Học thuật',
                    value: 'EDUCATION',
                },
                {
                    label: 'Marketing',
                    value: 'MARKETING',
                },
            ],
        },
    ];
    const columns = [
        {
            title: 'Thời gian',
            dataIndex: 'createdAt',
            key: 'createdAt',
        },
        {
            title: 'Nội dung',
            dataIndex: 'content',
            key: 'content',
        },
        {
            title: 'Loại bài viết',
            key: 'postType',
            dataIndex: 'postType',
            render: postType => <Tag color="geekblue">{postType}</Tag>,
        },
        {
            title: 'Hành động',
            key: 'action',
            render: uid => (
                <>
                    <Tooltip placement="top" title="Xem chi tiết">
                        <Button type="text">
                            <EyeOutlined
                                onClick={() => {
                                    const path = generatePath(
                                        routeConstants.PAGE_DETAILS,
                                        {
                                            uid: uid.uid,
                                        }
                                    );
                                    navigate(path);
                                }}
                            />
                        </Button>
                    </Tooltip>
                    <Tooltip placement="top" title="Sửa bài viết">
                        <Button
                            type="text"
                            onClick={() => {
                                const path = generatePath(
                                    routeConstants.PAGE_DETAILS,
                                    {
                                        uid: uid.uid,
                                    }
                                );
                                navigate(path);
                            }}
                        >
                            <EditOutlined />
                        </Button>
                    </Tooltip>
                    <Tooltip placement="top" title="Xóa bài viết">
                        <Button
                            type="text"
                            // TODO: Uncomment this when popup is ready
                            onClick={() =>
                                Popup.sendConfirm(
                                    'Bạn có chắc chắn muốn xóa bài viết này?',
                                    'Thao tác này không thể hoàn tác!',
                                    {
                                        onOk: () => {
                                            handleRemovePost(uid).then(res => {
                                                if (res.isSuccess) {
                                                    window.location.reload();
                                                }
                                            });
                                        },
                                        onCancel: () => {},
                                    }
                                )
                            }
                        >
                            <DeleteOutlined />
                        </Button>
                    </Tooltip>
                    <Tooltip placement="top" title="Lịch sử đăng">
                        <Button
                            type="text"
                            onClick={() => {
                                const path = generatePath(
                                    routeConstants.POST_MANAGEMENT_OF_POST,
                                    {
                                        uid: uid.uid,
                                    }
                                );
                                navigate(path);
                            }}
                        >
                            <HistoryOutlined />
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
                        Tất cả bài viết
                        <span className="posts-number">
                            ({tableData?.totalRows ?? 0})
                        </span>
                        <NavLink to={routeConstants.POST_MANAGEMENT_ALL}>
                            <CaretRightOutlined />
                        </NavLink>
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

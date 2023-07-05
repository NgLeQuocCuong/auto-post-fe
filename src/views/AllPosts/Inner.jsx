import { DeleteOutlined, HistoryOutlined } from '@ant-design/icons';
import { Button, Tag, Tooltip } from 'antd';
import ToggleFilterIcon from 'icons/ToggleFilterIcon';
import { memo, useCallback, useState } from 'react';
import { generatePath, useNavigate, useSearchParams } from 'react-router-dom';
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
    const [searchParams, setSearchParams] = useSearchParams();
    const handleFinish = useCallback(
        values => {
            handleAllPosts(values);
        },
        [handleAllPosts]
    );
    const filtersList = [
        {
            title: 'Tìm theo tiêu đề',
            name: 'search',
            type: 'text',
        },
        {
            title: 'Sắp xếp bài đăng',
            name: 'sortType',
            type: 'radio',
            options: [
                {
                    label: 'Mới nhất',
                    value: 'desc',
                },
                {
                    label: 'Cũ nhất',
                    value: 'asc',
                },
            ],
        },
        {
            title: 'Ngày đăng',
            name: 'postDate',
            type: 'dateRange',
        },
        {
            title: 'Loại bài viết',
            name: 'postType',
            type: 'tagSelect',
        },
    ];
    const columns = [
        {
            title: 'Thời gian',
            dataIndex: 'createdAt',
            key: 'createdAt',
        },
        {
            title: 'Tiêu đề',
            dataIndex: 'title',
            key: 'title',
        },
        {
            title: 'Loại bài viết',
            key: 'postType',
            dataIndex: 'postType',
            render: postType => {
                return postType?.map((tag, index) => (
                    <Tag key={index} color="geekblue">
                        {tag.trim().toUpperCase()}
                    </Tag>
                ));
            },
        },
        {
            title: 'Hành động',
            key: 'action',
            render: uid => (
                <>
                    <Tooltip placement="top" title="Xóa bài viết">
                        <Button
                            type="text"
                            // TODO: Uncomment this when popup is ready
                            onClick={e => {
                                e.stopPropagation();
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
                                );
                            }}
                        >
                            <DeleteOutlined />
                        </Button>
                    </Tooltip>
                    <Tooltip placement="top" title="Lịch sử đăng">
                        <Button
                            type="text"
                            onClick={e => {
                                e.stopPropagation();
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
                            if (filterValues[key] === undefined) {
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
                                if (key === 'postType') {
                                    filterValues[key] =
                                        filterValues[key].join(',');
                                }
                                searchParams.set(key, filterValues[key]);
                            }
                        });
                        //Remove empty search from url but still apply in filter
                        if (searchParams.get('search') === '') {
                            searchParams.delete('search');
                        }
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

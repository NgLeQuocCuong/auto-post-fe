import { FC, memo, useMemo, useEffect, useState, useCallback } from 'react';
import { Table, Form } from 'antd';
import moment from 'moment';
import Filters from './Filters';
import routeConstants from 'route/routeConstant';
import { useNavigate, useSearchParams, generatePath } from 'react-router-dom';
import './index.scss';
interface RowData {
    uid?: string;
    //Data for All posts matrix
    createdAt?: string;
    title?: string;
    postType?: string;
    images?: string[];
    //Data for Post management matrix
    platform?: string;
    autoPublish?: boolean | string;
    status?: string;
    timePosting?: string;
}
interface TableProps {
    columns: any;
    content: RowData[];
    currentPage: number;
    totalRows: number;
    totalPages: number;
    onPaginate(page: number, pageSize: number): void;
    filtersList?: [];
    isFilterShown?: boolean;
    onFilters(filters: object): void;
}

const PostsTable: FC<TableProps> = memo(
    ({
        columns,
        content,
        currentPage,
        totalRows,
        totalPages,
        filtersList,
        isFilterShown = false,
        onPaginate,
        onFilters,
    }) => {
        const navigate = useNavigate();
        const [storedTableData, setStoredTableData] = useState<TableProps>();
        useEffect(() => {
            setStoredTableData({
                columns: columns,
                content: content,
                currentPage: currentPage,
                totalRows: totalRows,
                totalPages: totalPages,
                onPaginate: onPaginate,
                onFilters: onFilters,
            });
        }, [
            columns,
            content,
            currentPage,
            totalRows,
            totalPages,
            onPaginate,
            onFilters,
        ]);
        const translateStatus = useCallback((value: string) => {
            switch (value) {
                //Status
                case 'PENDING':
                    return 'ĐANG CHỜ';
                case 'SUCCESS':
                    return 'THÀNH CÔNG';
                case 'FAIL':
                    return 'THẤT BẠI';
                default:
                    return 'KHÁC';
            }
        }, []);
        //Declare data for table rows
        const data: RowData[] =
            useMemo(() => {
                return storedTableData?.content?.map((item, index) => {
                    return {
                        key: index.toString(),
                        uid: item.uid,
                        //All posts matrix data
                        createdAt: moment(item.createdAt).format(
                            'HH:mm - DD/MM/YYYY'
                        ),
                        title: item.title,
                        postType: item.postType,
                        //Post management matrix data
                        timePosting: moment(item.timePosting).format(
                            'HH:mm - DD/MM/YYYY'
                        ),
                        status: translateStatus(item.status || ''),
                        platform: item.platform,
                        autoPublish: item.autoPublish ? 'Hẹn giờ' : 'Thủ công',
                    };
                });
            }, [storedTableData, translateStatus]) || [];
        const [searchParams, setSearchParams] = useSearchParams();
        return (
            <div className="posts-table-container">
                <Form
                    className={`all-posts__filters ${
                        isFilterShown && 'show-filters'
                    }`}
                    onFinish={values => {
                        setSearchParams(values);
                        onFilters(values);
                    }}
                >
                    <Filters filtersList={filtersList} />
                </Form>
                <Table
                    className="posts-table"
                    columns={columns}
                    dataSource={data}
                    pagination={{
                        showSizeChanger: true,
                        pageSizeOptions: ['5', '10', '25', '50'],
                        total: Number(storedTableData?.totalRows),
                        showTotal: (total, range) =>
                            `Hiện ${range[0]}-${range[1]} trong ${total} kết quả.`,
                        onChange: (page, pageSize) => {
                            onPaginate(page || 1, pageSize || 10);
                        },
                    }}
                    onRow={record => {
                        return {
                            onClick: e => {
                                e.stopPropagation();
                                const path = generatePath(
                                    routeConstants.POST_DETAILS,
                                    {
                                        uid: record.uid,
                                    }
                                );
                                navigate(path);
                            },
                        };
                    }}
                />
            </div>
        );
    }
);

PostsTable.displayName = 'PostsTable';
export default PostsTable;

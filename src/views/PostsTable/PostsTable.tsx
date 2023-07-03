import { FC, memo, useMemo, useEffect, useState, useCallback } from 'react';
import { Table, Form } from 'antd';
import moment from 'moment';
import Filters from './Filters';
import routeConstants from 'route/routeConstant';
import { useSearchParams } from 'react-router-dom';
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
        const [searchParams, setSearchParams] = useSearchParams();
        const translateValue = useCallback((value: string) => {
            switch (value) {
                //Post type
                case 'COMMERCIAL':
                    return 'QUẢNG CÁO';
                case 'ARTICLE':
                    return 'BÁO CHÍ';
                case 'RECRUITMENT':
                    return 'TUYỂN DỤNG';
                case 'EDUCATION':
                    return 'HỌC THUẬT';
                case 'MARKETING':
                    return 'MARKETING';
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
                        postType: translateValue(item.postType || ''),
                        //Post management matrix data
                        timePosting: moment(item.timePosting).format(
                            'HH:mm - DD/MM/YYYY'
                        ),
                        status: translateValue(item.status || ''),
                        platform: item.platform,
                        autoPublish: item.autoPublish ? 'Hẹn giờ' : 'Thủ công',
                    };
                });
            }, [storedTableData, translateValue]) || [];
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
                    columns={columns}
                    dataSource={data}
                    pagination={{
                        showSizeChanger: true,
                        pageSizeOptions: ['5', '10', '25', '50'],
                        total: Number(storedTableData?.totalRows),
                        showTotal: (
                            total = Number(storedTableData?.totalPages),
                            range
                        ) =>
                            `Hiện ${range[0]}-${range[1]} trong ${total} kết quả.`,
                        onChange: (page, pageSize) => {
                            onPaginate(page || 1, pageSize || 10);
                        },
                    }}
                />
            </div>
        );
    }
);

PostsTable.displayName = 'PostsTable';
export default PostsTable;

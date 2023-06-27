import { FC, memo, useState } from 'react';
import { Space, Table, Tag } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import Eye from 'components/PostsTable/icons/Eye';
import Edit from 'components/PostsTable/icons/Edit';
import Delete from 'components/PostsTable/icons/Delete';

interface RowData {
    uid: string;
    createdAt: string;
    content: string;
    postType: string;
    images: string[];
}
interface TableProps {
    tableData?: {
        content: RowData[];
        currentPage: number;
        pageSize: number;
        totalRows: number;
        totalPages: number;
    };
}
const columns: ColumnsType<RowData> = [
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
        render: () => (
            <Space size="middle">
                <Eye />
                <Edit />
                <Delete />
            </Space>
        ),
    },
];

const PostsTable: FC<TableProps> = memo(({ tableData }) => {
    const [currPage, setCurrPage] = useState<number>(1);

    //Declare data for table (Uncomment this when API is ready)
    /*
    const [storedTableData, setStoredTableData] = useState<
        TableProps['tableData'] | undefined
    >(tableData);

    useEffect(() => {
        setStoredTableData(tableData);
    }, [tableData]);
    
    const data: RowData[] =
        storedTableData?.content?.map((item, index) => {
            return {
                key: index.toString(),
                uid: item.uid,
                createdAt: moment(item.createdAt).format('HH:mm - DD/MM/YYYY'),
                content: item.content,
                postType: item.postType,
                images: item.images,
            };
        }) || [];
    */
    //Fake data for UI testing
    const data: RowData[] = [
        {
            uid: '1',
            createdAt: '12:30 - 27/6/2023',
            content: 'Bài viết 1',
            postType: 'MARKETING',
            images: [],
        },
        {
            uid: '2',
            createdAt: '12:35 - 27/6/2023',
            content: 'Chia động từ trong tiếng anh',
            postType: 'EDUCATION',
            images: [],
        },
        //Create 10 more data with random info
        {
            uid: '3',
            createdAt: '13:41 - 27/6/2023',
            content: 'Giới thiệu sản phẩm mới',
            postType: 'MARKETING',
            images: [],
        },
        {
            uid: '4',
            createdAt: '15:30 - 27/6/2023',
            content: 'Bài viết 4',
            postType: 'ARTICLE',
            images: [],
        },
        {
            uid: '5',
            createdAt: '16:26 - 27/6/2023',
            content: 'Bài viết 5',
            postType: 'COMMERICAL',
            images: [],
        },
        {
            uid: '6',
            createdAt: '16:59 - 27/6/2023',
            content: 'Bài viết 6',
            postType: 'COMMERCIAL',
            images: [],
        },
        {
            uid: '7',
            createdAt: '17:30 - 27/6/2023',
            content: 'Bài viết 7',
            postType: 'RECRUITMENT',
            images: [],
        },
    ];

    return (
        <Table
            columns={columns}
            dataSource={data}
            pagination={{
                current: currPage,
                showSizeChanger: true,
                pageSizeOptions: ['5', '10', '25', '50'],
                total: data?.length | 0,
                showTotal: (total = data?.length | 0, range) =>
                    `Hiện ${range[0]}-${range[1]} trong ${total} kết quả.`,
                onChange: page => {
                    setCurrPage(page);
                },
            }}
        />
    );
});

PostsTable.displayName = 'PostsTable';

export default PostsTable;

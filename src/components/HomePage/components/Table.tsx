import React, { ReactNode } from 'react';
import { Space, Table, Tag } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import Eye from 'components/HomePage/icons/Eye';
import Edit from 'components/HomePage/icons/Edit';
import Delete from 'components/HomePage/icons/Delete';
import FacebookIcon from 'components/HomePage/icons/FacebookIcon';

interface DataType {
  key: string;
  social: Array<ReactNode>;
  time: string;
  address: string;
  tags: string[];
}

const columns: ColumnsType<DataType> = [
  {
    title: 'Nền tảng',
    dataIndex: 'social',
    key: 'social',
  },
  {
    title: 'Thời gian',
    dataIndex: 'time',
    key: 'time',
  },
  {
    title: 'Nội dung',
    dataIndex: 'address',
    key: 'address',
  },
  {
    title: 'Tags',
    key: 'tags',
    dataIndex: 'tags',
    render: (_, { tags }) => (
      <>
        {tags.map((tag) => {
          let color = tag.length > 5 ? 'geekblue' : 'green';
          if (tag === 'loser') {
            color = 'volcano';
          }
          return (
            <Tag color={color} key={tag}>
              {tag.toUpperCase()}
            </Tag>
          );
        })}
      </>
    ),
  },
  {
    title: 'Hành động',
    key: 'action',
    render: () => (
      <Space size="middle">
        <Eye/>
        <Edit/>
        <Delete/>
      </Space>
    ),
  },
];

const data: DataType[] = [
  {
    key: '1',
    social: [<FacebookIcon key={1}/>],
    time: '08/11/2022 11:15',
    address: 'Dạng câu hỏi ý kiến (ask for idea) và câu hỏi về trải nghiệm (ask for experience)',
    tags: ['Quảng cáo',],
  },
  {
    key: '2',
    social: [<FacebookIcon key={1}/>],
    time: '08/11/2022 11:15',
    address: 'Phân biệt các danh từ mang nét nghĩa “lời hứa, lời đảm bảo, lời cam kết”',
    tags: ['Nhãn A'],
  },
  {
    key: '3',
    social: [<FacebookIcon key={1}/>],
    time: '08/11/2022 11:15',
    address: 'Liên kết việc học kỹ năng nghe với các lĩnh vực nghề nghiệp khác',
    tags: ['Bán chạy',],
  },
  {
    key: '4',
    social: [<FacebookIcon key={1}/>],
    time: '08/11/2022 11:15',
    address: 'Dạng câu hỏi ý kiến (ask for idea) và câu hỏi về trải nghiệm (ask for experience)',
    tags: ['Quảng cáo',],
  },
  {
    key: '5',
    social: [<FacebookIcon key={1}/>],
    time: '08/11/2022 11:15',
    address: 'Phân biệt các danh từ mang nét nghĩa “lời hứa, lời đảm bảo, lời cam kết”',
    tags: ['Nhãn A'],
  },
  {
    key: '6',
    social: [<FacebookIcon key={1}/>],
    time: '08/11/2022 11:15',
    address: 'Liên kết việc học kỹ năng nghe với các lĩnh vực nghề nghiệp khác',
    tags: ['Bán chạy',],
  },
  {
    key: '7',
    social: [<FacebookIcon key={1}/>],
    time: '08/11/2022 11:15',
    address: 'Dạng câu hỏi ý kiến (ask for idea) và câu hỏi về trải nghiệm (ask for experience)',
    tags: ['Quảng cáo',],
  },
  {
    key: '8',
    social: [<FacebookIcon key={1}/>],
    time: '08/11/2022 11:15',
    address: 'Phân biệt các danh từ mang nét nghĩa “lời hứa, lời đảm bảo, lời cam kết”',
    tags: ['Nhãn A'],
  },
  {
    key: '9',
    social: [<FacebookIcon key={1}/>],
    time: '08/11/2022 11:15',
    address: 'Liên kết việc học kỹ năng nghe với các lĩnh vực nghề nghiệp khác',
    tags: ['Bán chạy',],
  },
  {
    key: '10',
    social: [<FacebookIcon key={1}/>],
    time: '08/11/2022 11:15',
    address: 'Dạng câu hỏi ý kiến (ask for idea) và câu hỏi về trải nghiệm (ask for experience)',
    tags: ['Quảng cáo',],
  },
  {
    key: '11',
    social: [<FacebookIcon key={1}/>],
    time: '08/11/2022 11:15',
    address: 'Phân biệt các danh từ mang nét nghĩa “lời hứa, lời đảm bảo, lời cam kết”',
    tags: ['Nhãn A'],
  },
  {
    key: '12',
    social: [<FacebookIcon key={1}/>],
    time: '08/11/2022 11:15',
    address: 'Liên kết việc học kỹ năng nghe với các lĩnh vực nghề nghiệp khác',
    tags: ['Bán chạy',],
  },
];

const TableComponent: React.FC = () => {
    const pageSize = 5;
    return (
        <Table 
            columns={columns} 
            dataSource={data} 
            pagination={{
                pageSize,
                showSizeChanger: true,
                pageSizeOptions: ['5', '10', '20', '50'], // Tuỳ chọn số hàng trên mỗi trang
                showTotal: (total, range) => `${range[0]}-${range[1]} of ${total} items`,
        }}/>
    )
}
        

export default TableComponent;
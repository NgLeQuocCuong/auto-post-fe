import { Button, Dropdown, Menu } from 'antd';
import usePostPageContext from 'components/PostPage/components/Context';
import { FC, memo, useState } from 'react';

const items = [
    {
        id: 1,
        value: 'ARTICLE',
    },
    {
        id: 2,
        value: 'COMMERCIAL',
    },
    {
        id: 3,
        value: 'COMMERCIAL',
    },
    {
        id: 4,
        value: 'RECRUITMENT',
    },
    {
        id: 5,
        value: 'EDUCATION',
    },
];

const CheckList: FC = memo(() => {
    const { data, setPostType } = usePostPageContext();
    const [value, setValue] = useState('Nhãn bài viết');
    const handleChangePostType = (value: string) => {
        setValue(value);
        setPostType(value);
    };
    const menu = (
        <Menu>
            {items.map(item => (
                <Menu.Item
                    key={item.id}
                    onClick={() => handleChangePostType(item.value)}
                >
                    {item.value}
                </Menu.Item>
            ))}
        </Menu>
    );
    return (
        <div className="wrapper__checkList">
            <span className="wrapper__checkList--label">Nhãn bài viết: </span>
            <Dropdown overlay={menu}>
                <Button>{data.postType || value}</Button>
            </Dropdown>
        </div>
    );
});

CheckList.displayName = 'DropdownComponent';

export default CheckList;

import { FC, memo, useState } from 'react';
import { Button, Dropdown, Menu } from 'antd';
import usePostPageContext from 'components/PostPage/components/Context';
const items = [
    {
        id: 1,
        value: 'ARTICLE',
        name: 'Báo Chí',
    },
    {
        id: 2,
        value: 'COMMERCIAL',
        name: 'Quảng cáo',
    },
    {
        id: 3,
        value: 'MARKETING',
        name: 'Marketing',
    },
    {
        id: 4,
        value: 'RECRUITMENT',
        name: 'Tuyển dụng',
    },
    {
        id: 5,
        value: 'EDUCATION',
        name: 'Giáo dục',
    },
];
const CheckList: FC = memo(() => {
    const { setPostType } = usePostPageContext();
    const [value, setValue] = useState('Nhãn bài viết');
    const handleChangePostType = (value: string, name: string) => {
        setValue(name);
        setPostType(value);
    };
    const menu = (
        <Menu>
            {items.map(item => (
                <Menu.Item
                    key={item.id}
                    onClick={() => handleChangePostType(item.value, item.name)}
                >
                    {item.name}
                </Menu.Item>
            ))}
        </Menu>
    );
    return (
        <div className="wrapper__checkList">
            <span className="wrapper__checkList--label">Nhãn bài viết: </span>
            <Dropdown overlay={menu}>
                <Button>{value}</Button>
            </Dropdown>
        </div>
    );
});
CheckList.displayName = 'DropdownComponent';
export default CheckList;

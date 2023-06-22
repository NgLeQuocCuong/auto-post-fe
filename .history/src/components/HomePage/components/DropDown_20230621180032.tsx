import {FC, memo, useState} from 'react';
import { Button, Dropdown, Menu } from 'antd';

const items = [
    {
        id: 1,
        name: 'Marketing',
    },
    {
        id: 2,
        name: 'Sale',
    },
    {
        id: 3,
        name: 'Best Seller',
    }
]

const CheckList: FC = memo(
    () => {
    const [value, setValue] = useState('Lựa chọn nhãn bài viết');
    const menu = (
        <Menu>
            {items.map((item) => (
                <Menu.Item key={item.id} onClick={() => setValue({item.name)}>{item.name}</Menu.Item>
            ))}
        </Menu>
    );
    return (
        <div className='wrapper__checkList'>
            <span className='wrapper__checkList--label'>Nhãn bài viết: </span>
            <Dropdown overlay={menu}>
                <Button>Lựa chọn nhãn bài viết</Button>
            </Dropdown>
        </div>
    )}
)

CheckList.displayName = 'DropdownComponent';

export default CheckList;
import {FC, memo} from 'react';
import { Button, Dropdown, Menu } from 'antd';

const items

const CheckList: FC = memo(
    () => {
    const menu = (
        <Menu>
            <Menu.Item key="1">Option 1</Menu.Item>
            <Menu.Item key="2">Option 2</Menu.Item>
            <Menu.Item key="3">Option 3</Menu.Item>
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
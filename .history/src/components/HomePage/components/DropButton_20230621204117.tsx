import {FC, memo} from 'react';
import { Dropdown, Menu, Button } from 'antd';
import { DownOutlined } from '@ant-design/icons';

const DropButton: FC = memo (
    () => {
        const menu = (
            <Menu>
                <Menu.Item key='1'>Hẹn giờ đăng bài</Menu.Item>
            </Menu>
        );
        return(
            <Dropdown.Button overlay={menu} icon={<DownOutlined />} placement='bottomRight'>
                Dang Bai
            </Dropdown.Button>
        )
    }
)

DropButton.displayName = 'DropButton Component';

export default DropButton;
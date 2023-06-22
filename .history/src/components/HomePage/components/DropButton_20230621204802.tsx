import {FC, memo} from 'react';
import { Dropdown, Menu } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import '../style.scss';

const DropButton: FC = memo (
    () => {
        const menu = (
            <Menu>
                <Menu.Item key='1'>Hẹn giờ đăng bài</Menu.Item>
            </Menu>
        );
        return(
            <div>
                <Dropdown.Button 
                    overlay={menu} 
                    icon={<DownOutlined />} 
                    placement='bottomRight'
                    className='wrapper__button'
                >
                    Đăng bài viết
                </Dropdown.Button>
            </div>
        )
    }
)

DropButton.displayName = 'DropButton Component';

export default DropButton;
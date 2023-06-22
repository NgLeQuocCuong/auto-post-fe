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
            <div className='wrapper__button'>
                <Dropdown.Button 
                    overlay={menu} 
                    icon={<DownOutlined />} 
                    placement='bottomRight'
                >
                    Đăng bài viết
                </Dropdown.Button>
            </div>
        )
    }
)

DropButton.displayName = 'DropButton Component';

export default DropButton;
// :where(.css-dev-only-do-not-override-1wazalj).ant-btn-compact-item:not(.ant-btn-compact-last-item)
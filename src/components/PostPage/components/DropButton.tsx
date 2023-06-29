import { FC, memo } from 'react';
import { Button, Dropdown, Menu } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import '../style.scss';
import usePostPageContext from 'components/PostPage/components/Context';

interface Props {
    handlePost: any;
    contentBtn: string;
    haveMenu?: boolean;
}

const DropButton: FC<Props> = memo(({ handlePost, contentBtn, haveMenu }) => {
    const { data } = usePostPageContext();
    const menu = (
        <Menu>
            <Menu.Item key="1">Hẹn giờ đăng bài</Menu.Item>
        </Menu>
    );
    return (
        <div className="wrapper__button">
            {haveMenu ? (
                <Dropdown.Button
                    overlay={menu}
                    icon={<DownOutlined />}
                    placement="bottomRight"
                    onClick={() => handlePost(data)}
                >
                    {contentBtn}
                </Dropdown.Button>
            ) : (
                <Button onClick={() => handlePost(data)}></Button>
            )}
        </div>
    );
});

DropButton.displayName = 'DropButton Component';

export default DropButton;

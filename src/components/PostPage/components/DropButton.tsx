import { DownOutlined } from '@ant-design/icons';
import { Button, Dropdown, Menu } from 'antd';
import usePostPageContext from 'components/PostPage/components/Context';
import { FC, memo } from 'react';
import '../style.scss';

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

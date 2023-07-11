import { FC, PropsWithChildren, memo, useState } from 'react';
import { PlusOutlined } from '@ant-design/icons';
import { Button, Drawer, Image } from 'antd';
import { NavLink, useLocation } from 'react-router-dom';
import routeConstants from 'route/routeConstant';
import Logout from 'layouts/Web/Logout';
import LogoSmall from 'components/CommonInput/icons/LogoSmall';
import './index.scss';
import { useUserProfile } from 'reducers/profile/function';
import PostPage from 'views/PostPage';

const WebLayout: FC<PropsWithChildren> = memo(({ children }) => {
    const user = useUserProfile();
    const [item, setItem] = useState(false);
    const handleCreatePost = () => {
        setItem(prevState => !prevState);
    };
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const toggleDrawer = () => {
        setIsDrawerOpen(prevState => !prevState);
    };
    const location = useLocation();
    const isAllPosts = location.pathname.startsWith(routeConstants.ALL_POSTS);
    const isHomePage = location.pathname === routeConstants.HOME_PAGE;
    const isUser = location.pathname.startsWith(routeConstants.USER);

    return (
        <div>
            <header className="header">
                <div className="header__wrap">
                    <div className="header__wrap--logo">
                        <NavLink to="/">
                            <LogoSmall />
                        </NavLink>
                    </div>
                    <ul className="header__wrap--items">
                        <li className="header__wrap--item">
                            <NavLink
                                to={routeConstants.HOME_PAGE}
                                className={`header__wrap--link ${
                                    isHomePage ? 'active' : ''
                                }`}
                            >
                                TRANG CHỦ
                            </NavLink>
                        </li>
                        <li className="header__wrap--item">
                            <NavLink
                                to={routeConstants.ALL_POSTS}
                                className={`header__wrap--link ${
                                    isAllPosts ? 'active' : ''
                                }`}
                            >
                                BÀI ĐĂNG
                            </NavLink>
                        </li>
                    </ul>
                    <div className="header__wrap--button">
                        <Button
                            icon={<PlusOutlined />}
                            className="header_wrap--buttonn"
                            onClick={handleCreatePost}
                        >
                            Bài viết mới
                        </Button>
                        <div
                            className={`user-dropdown ${
                                isUser ? 'active' : ''
                            }`}
                            onClick={toggleDrawer}
                        >
                            <Image
                                src={user.avatar}
                                className="header_avatar"
                                preview={false}
                            />
                        </div>
                    </div>
                </div>
                <Drawer
                    placement="right"
                    closable={false}
                    open={isDrawerOpen}
                    onClose={toggleDrawer}
                    className="drawer"
                    width={'200px'}
                >
                    <div className="drawer__menu-link">
                        <Button
                            size={'large'}
                            className="header__wrap--sidelink"
                            type={isHomePage ? 'primary' : 'default'}
                            block
                        >
                            <NavLink to={routeConstants.HOME_PAGE}>
                                TRANG CHỦ
                            </NavLink>
                        </Button>
                    </div>
                    <div className="drawer__menu-link">
                        <Button
                            size={'large'}
                            className="header__wrap--sidelink"
                            type={isAllPosts ? 'primary' : 'default'}
                            block
                        >
                            <NavLink to={routeConstants.ALL_POSTS}>
                                BÀI ĐĂNG
                            </NavLink>
                        </Button>
                    </div>
                    <div className="drawer__menu-link">
                        <Button
                            icon={<PlusOutlined />}
                            className="header__wrap--sidebut"
                            onClick={handleCreatePost}
                        >
                            Bài viết mới
                        </Button>
                    </div>
                    <div className="drawer__menu-item">
                        <Button type="link" size={'large'}>
                            <NavLink
                                to={routeConstants.USER_SETTINGS}
                                className="Drop-item"
                            >
                                <p>Xem hồ sơ</p>
                            </NavLink>
                        </Button>
                    </div>
                    <div className="drawer__menu-item">
                        <Button type="link" size={'large'}>
                            <NavLink
                                to={routeConstants.CHANGE_PASSWORD}
                                className="Drop-item"
                            >
                                <p>Đổi mật khẩu</p>
                            </NavLink>
                        </Button>
                    </div>
                    <div className="drawer__menu-item">
                        <Logout />
                    </div>
                </Drawer>
            </header>

            {item && <PostPage />}
            {children}
        </div>
    );
});

WebLayout.displayName = 'Weblayout';
export default WebLayout;

import { FC, PropsWithChildren, memo, useState } from 'react';
import { PlusOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import LogoSmall from 'components/CommonInput/icons/LogoSmall';
import { NavLink, useLocation } from 'react-router-dom';
import routeConstants from 'route/routeConstant';
import Logout from 'layouts/Web/Logout';
import { Image } from 'antd';
import './index.scss';
import { useUserProfile } from 'reducers/profile/function';
import PostPage from 'views/PostPage';

const WebLayout: FC<PropsWithChildren> = memo(({ children }) => {
    const user = useUserProfile();
    const [item, setItem] = useState(false);
    const handleCreatePost = () => {
        setItem(() => !item);
    };
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };
    const location = useLocation();
    const is_all_posts = location.pathname === '/posts';
    const is_home_page = location.pathname === routeConstants.HOME_PAGE;
    const is_user = location.pathname === '/user';

    return (
        <div>
            <header className="header">
                <div className="header__wrap">
                    <div className="header__wrap--logo">
                        <NavLink to={'/'}>
                            <LogoSmall></LogoSmall>
                        </NavLink>
                    </div>
                    <ul className="header__wrap--items">
                        <li className="header__wrap--item">
                            <NavLink
                                to={routeConstants.HOME_PAGE}
                                className={`header__wrap--link ${
                                    is_home_page ? 'active' : ''
                                }`}
                            >
                                TRANG CHỦ
                            </NavLink>
                        </li>
                        <li className="header__wrap--item">
                            <NavLink
                                to={routeConstants.ALL_POSTS}
                                className={`header__wrap--link ${
                                    is_all_posts ? 'active' : ''
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
                                isDropdownOpen ? 'open' : ''
                            }`}
                        >
                            <div
                                className={`dropdown ${
                                    is_user ? 'active' : ''
                                }`}
                                onClick={toggleDropdown}
                            >
                                <Image
                                    src={user.avatar}
                                    className="header_avatar"
                                    preview={false}
                                />
                            </div>
                            <ul className="dropdown-menu">
                                <li>
                                    <NavLink
                                        to={routeConstants.USER_SETTINGS}
                                        className="Drop-item"
                                    >
                                        <p>Xem hồ sơ</p>
                                    </NavLink>
                                </li>

                                <li>
                                    <NavLink
                                        to={routeConstants.CHANGE_PASSWORD}
                                        className="Drop-item"
                                    >
                                        <p>Đổi mật khẩu</p>
                                    </NavLink>
                                </li>
                                <li>
                                    <Logout></Logout>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                {item && <PostPage />}
            </header>

            {children}
        </div>
    );
});

WebLayout.displayName = 'WebLayout';

export default WebLayout;

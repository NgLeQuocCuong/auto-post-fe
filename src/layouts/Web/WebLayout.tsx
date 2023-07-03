import { FC, PropsWithChildren, memo, useState } from 'react';
import { PlusOutlined, CloseOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import LogoSmall from 'components/CommonInput/icons/LogoSmall';
import { NavLink, useLocation } from 'react-router-dom';
import routeConstants from 'route/routeConstant';
import Logout from 'layouts/Web/Logout';
import { Image } from 'antd';
import './index.scss';
import { useUserProfile } from 'reducers/profile/function';

const WebLayout: FC<PropsWithChildren> = memo(({ children }) => {
    const user = useUserProfile();
    const [showIframe, setShowIframe] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };
    const location = useLocation();
    const isALL_POSTS =
        location.pathname === routeConstants.ALL_POSTS ||
        location.pathname === routeConstants.POST_MANAGEMENT_ALL;
    const isHOME_PAGE = location.pathname === routeConstants.HOME_PAGE;
    const isUSER =
        location.pathname === routeConstants.USER_SETTINGS ||
        location.pathname === routeConstants.CHANGE_PASSWORD;
    const handleOpen = () => {
        setShowIframe(true);
        document.body.classList.add('modal-open');
    };

    const handleClose = () => {
        setShowIframe(false);
        document.body.classList.remove('modal-open');
    };

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
                                    isHOME_PAGE ? 'active' : ''
                                }`}
                            >
                                TRANG CHỦ
                            </NavLink>
                        </li>
                        <li className="header__wrap--item">
                            <NavLink
                                to={routeConstants.ALL_POSTS}
                                className={`header__wrap--link ${
                                    isALL_POSTS ? 'active' : ''
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
                            onClick={handleOpen}
                        >
                            Bài viết mới
                        </Button>
                        <div
                            className={`user-dropdown ${
                                isDropdownOpen ? 'open' : ''
                            }`}
                        >
                            <div
                                className={`dropdown ${isUSER ? 'active' : ''}`}
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
            </header>
            {showIframe && (
                <div className="pop-up">
                    <div className="pop-up--overlay" />
                    <div className="pop-up--frame-container">
                        <button
                            className="pop-up--close-button"
                            onClick={handleClose}
                        >
                            <CloseOutlined className="pop-up--icon" />
                        </button>
                        <iframe
                            src="http://localhost:3000/#/post-page"
                            title="iframe"
                        />
                    </div>
                </div>
            )}
            {children}
        </div>
    );
});

WebLayout.displayName = 'WebLayout';

export default WebLayout;

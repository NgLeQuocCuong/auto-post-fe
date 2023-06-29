import './index.scss';
import { NavLink, useLocation } from 'react-router-dom';
import { Button } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import LogoSmall from 'components/CommonInput/icons/LogoSmall';
import routeConstants from 'route/routeConstant';
import { memo, useState, FC } from 'react';
import Logout from './Logout';
import Searchbar from 'layouts/Main/Searchbar';

interface Props {
    firstName: string;
}
const Header: FC<Props> = memo(({ firstName }) => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };
    const location = useLocation();
    const isPostPage = location.pathname === routeConstants.POST;
    const isHomePage = location.pathname === routeConstants.HOMEPAGE;
    return (
        <header className="header">
            <div className="header__wrap">
                <div className="header__wrap--logo">
                    <NavLink to={'/'}>
                        <LogoSmall></LogoSmall>
                    </NavLink>
                    <Searchbar></Searchbar>
                </div>
                <ul className="header__wrap--items">
                    <li className="header__wrap--item">
                        <NavLink
                            to={routeConstants.HOMEPAGE}
                            className={`header__wrap--link ${
                                isHomePage ? 'active' : ''
                            }`}
                        >
                            TRANG CHỦ
                        </NavLink>
                    </li>
                    <li className="header__wrap--item">
                        <NavLink
                            to={routeConstants.POST}
                            className={`header__wrap--link ${
                                isPostPage ? 'active' : ''
                            }`}
                            aria-disabled={isPostPage}
                        >
                            BÀI VIẾT
                        </NavLink>
                    </li>
                </ul>
                <div className="header__wrap--button">
                    <NavLink to={routeConstants.POST}>
                        <Button icon={<PlusOutlined />} type="primary">
                            Đăng bài
                        </Button>
                    </NavLink>
                    <p>
                        Hello,{' '}
                        <NavLink
                            className="acc"
                            to={routeConstants.USER_SETTINGS}
                        >
                            {firstName}
                        </NavLink>{' '}
                        !
                    </p>
                    <div
                        className={`user-dropdown ${
                            isDropdownOpen ? 'open' : ''
                        }`}
                    >
                        <div
                            className="dropdown"
                            onClick={toggleDropdown}
                        ></div>
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
    );
});

Header.displayName = 'Header';

export default Header;
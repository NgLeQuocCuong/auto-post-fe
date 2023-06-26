import './index.scss';
import { NavLink } from 'react-router-dom';
import { Button } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import LogoSmall from 'components/HomePage/icons/LogoSmall';
import SearchIcon from 'components/HomePage/icons/SearchIcon';
import routeConstants from 'route/routeConstant';
import { memo, useState, FC } from 'react';

const items = [
    {
        id: 1,
        name: 'TRANG CHỦ',
        url: routeConstants.MAINPAGE,
    },
    {
        id: 2,
        name: 'BÀI VIẾT',
        url: routeConstants.POST,
    },
];
// eslint-disable-next-line no-undef
const Header: FC = memo(() => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };
    return (
        <header className="header">
            <div className="header__wrap">
                <div className="header__wrap--logo">
                    <NavLink to={'/'}>
                        <LogoSmall></LogoSmall>
                    </NavLink>
                    <div className="header__wrap--search">
                        <SearchIcon className="header__wrap--icon"></SearchIcon>
                        <input type="text" placeholder="Tìm kiếm ..." />
                    </div>
                </div>
                <ul className="header__wrap--items">
                    {items.map(item => (
                        <li className="header__wrap--item" key={item.id}>
                            <NavLink
                                to={item.url}
                                className="header__wrap--link"
                            >
                                {item.name}
                            </NavLink>
                        </li>
                    ))}
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
                            An
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
                                    to={routeConstants.USER_SETTINGS}
                                    className="Drop-item"
                                >
                                    <p>Đổi mật khẩu</p>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to={routeConstants.USER_SETTINGS}
                                    className="Drop-item"
                                >
                                    <p id="logout">Đăng xuất</p>
                                </NavLink>
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

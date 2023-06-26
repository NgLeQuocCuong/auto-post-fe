import './index.scss';
import { NavLink } from 'react-router-dom';
import { Button } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import LogoSmall from 'components/HomePage/icons/LogoSmall';
import routeConstants from 'route/routeConstant';
import { memo, useState, FC } from 'react';
import Logout from './Logout';
import Searchbar from 'layouts/Main/Searchbar';

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
interface Props {
    firstName: string;
}
// eslint-disable-next-line no-undef
const Header: FC<Props> = memo(({ firstName }) => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    if (!firstName) {
        firstName = 'default';
    }
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
                    <Searchbar></Searchbar>
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
                                    to={routeConstants.USER_SETTINGS}
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

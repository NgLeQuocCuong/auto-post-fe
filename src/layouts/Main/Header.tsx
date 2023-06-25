import React from 'react';
import './index.scss';
import { NavLink } from 'react-router-dom';
import { Button } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import LogoSmall from 'components/HomePage/icons/LogoSmall';
import SearchIcon from 'components/HomePage/icons/SearchIcon';
import routeConstants from 'route/routeConstant';
import { memo } from 'react';

const items = [
    {
        id: 1,
        name: 'TRANG CHỦ',
        url: routeConstants.MAINPAGE,
    },
    {
        id: 2,
        name: 'BÀI VIẾT',
        url: routeConstants.MAINPAGE,
    },
];
const Header: React.FC = memo(() => {
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
                </div>
            </div>
        </header>
    );
});

Header.displayName = 'Header';

export default Header;

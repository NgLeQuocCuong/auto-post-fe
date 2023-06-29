import React from 'react';
import '../index.scss';
import { NavLink } from 'react-router-dom';
import { Button } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import SmallLogo from 'icons/SmallLogo';
import SearchIcon from 'icons/SearchIcon';

const items = [
    {
        id: 1,
        name: 'TRANG CHỦ',
        url: '/',
    },
    {
        id: 2,
        name: 'BÀI VIẾT',
        url: '/posts',
    },
];

const Header: React.FC = () => {
    return (
        <header className="header">
            <div className="header__wrap">
                <div className="header__wrap--logo">
                    <NavLink to={'/'}>
                        <SmallLogo />
                    </NavLink>
                    <div className="header__wrap--search">
                        <SearchIcon className="header__wrap--icon" />
                        <input type="text" placeholder="Tìm kiếm ..." />
                    </div>
                </div>
                <ul className="header__wrap--items">
                    {items.map(item => (
                        <li className="header__wrap--item" key={item.id}>
                            <NavLink
                                to={item.url}
                                className={({ isActive }) =>
                                    isActive
                                        ? 'header__wrap--link-active header__wrap--link'
                                        : 'header__wrap--link'
                                }
                            >
                                {item.name}
                            </NavLink>
                        </li>
                    ))}
                </ul>
                <div className="header__wrap--button">
                    <NavLink to={'/post-page'}>
                        <Button icon={<PlusOutlined />} type="primary">
                            Đăng bài
                        </Button>
                    </NavLink>
                </div>
            </div>
        </header>
    );
};

export default Header;

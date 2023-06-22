import React from 'react';
import './index.scss';
import { NavLink } from 'react-router-dom';
import { Button } from 'antd';
import LogoSmall from 'components/HomePage/icons/LogoSmall';

const Header: React.FC = () => {
    return (
        <header className="header">
            <div className="header__wrap">
                <div className="header__wrap--logo">
                    <NavLink to={'/'}>
                        <LogoSmall></LogoSmall>
                    </NavLink>
                    {/* <div className="header__wrap--search">
                        <SearchIcon className="header__wrap--icon"></SearchIcon>
                        <input type="text" placeholder="Tìm kiếm ..." />
                    </div> */}
                </div>
                {/* <ul className="header__wrap--items">
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
                </ul> */}
                <div className="header__wrap--button">
                    <Button type="primary">
                        <NavLink to="/login">Đăng nhập</NavLink>
                    </Button>
                </div>
            </div>
        </header>
    );
};

export default Header;

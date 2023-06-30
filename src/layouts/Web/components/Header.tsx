import React from 'react';
import '../index.scss';
import { NavLink } from 'react-router-dom';
import { Button, Menu } from 'antd';
import { PlusOutlined, CaretDownOutlined } from '@ant-design/icons';
import { Dropdown, Space } from 'antd';
import LogoSmall from 'components/CommonInput/icons/LogoSmall';
import SearchIcon from 'icons/SearchIcon';
import routeConstants from 'route/routeConstant';
const items = [
    {
        id: 1,
        name: 'TRANG CHỦ',
        url: '/',
    },
    {
        id: 2,
        name: 'BÀI VIẾT',
        url: routeConstants.ALL_POSTS,
    },
];
const itemsDropdown = [
    {
        id: 1,
        name: 'Thông tin cá nhân',
        url: '/user-settings',
    },
    {
        id: 2,
        name: 'Đổi mật khẩu',
        url: '/change-password',
    },
    {
        id: 3,
        name: 'Đăng xuất',
        url: '/logout',
    },
];
const Header: React.FC = () => {
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
                    <Dropdown
                        className="header__wrap--dropdown"
                        overlay={
                            <Menu>
                                {itemsDropdown.map(item => (
                                    <Menu.Item key={item.id}>
                                        <NavLink to={item.url}>
                                            {item.name}
                                        </NavLink>
                                    </Menu.Item>
                                ))}
                            </Menu>
                        }
                        trigger={['click']}
                    >
                        <Button type="text">
                            <Space>
                                <CaretDownOutlined />
                            </Space>
                        </Button>
                    </Dropdown>
                </div>
            </div>
        </header>
    );
};
export default Header;

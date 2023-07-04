import React, { useState } from 'react';
import '../index.scss';
import { NavLink } from 'react-router-dom';
import { Button } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import PostPage from 'views/PostPage';
import LogoSmall from 'components/CommonInput/icons/LogoSmall';

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
    const [item, setItem] = useState(false);
    const handleCreatePost = () => {
        setItem(() => !item);
    };

    return (
        <header className="header">
            <div className="header__wrap">
                <div className="header__wrap--logo">
                    <NavLink to={'/'}>
                        <LogoSmall/>
                    </NavLink>
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
                    <Button icon={<PlusOutlined />} onClick={handleCreatePost}>
                        Tạo bài viết
                    </Button>
                </div>
            </div>
            {item && <PostPage />}
        </header>
    );

};

export default Header;

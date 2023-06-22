import React from 'react';
import { NavLink } from 'react-router-dom';

const Header: React.FC = () => {
    return (
        <header className="header">
        <div className="header-content">
        <div className="header-left">
            <span className="logo"><strong>AUTO</strong>POST</span>
            <div className="searchbar">
            <input type="text" placeholder="Tìm kiếm" />
            </div>
        </div>
        <div className="header-center"> 
          <a href="/"> TRANG CHỦ
          </a>
          <a href="/"> BÀI VIẾT
          </a>
        </div>
        <div className="header-right">
            <button className="create-post-button">Đăng bài</button>
            <span>Hello, <a href="/">Quốc An</a>!</span>
        </div>
        </div>
    </header>
    );
};

export default Header;
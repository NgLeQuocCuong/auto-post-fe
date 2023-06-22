import React from 'react';

const isLoggedIn: boolean = false;
const Header: React.FC = () => {
    if (isLoggedIn) {
        return (
            <header className="header">
                <div className="header-content">
                    <div className="header-left">
                        <span className="logo">
                            <strong>AUTO</strong>POST
                        </span>
                        <div className="searchbar">
                            <input type="text" placeholder="Tìm kiếm" />
                        </div>
                    </div>
                    <div className="header-center">
                        <a href="/"> TRANG CHỦ</a>
                        <a href="/post"> BÀI VIẾT</a>
                    </div>
                    <div className="header-right">
                        <button className="create-post-button">Đăng bài</button>
                        <span>
                            Hello, <a href="/">Quốc An</a>!
                        </span>
                    </div>
                </div>
            </header>
        );
    } else {
        return (
            <header className="header">
                <div className="header-content">
                    <div className="header-left">
                        <span className="logo">
                            <strong>AUTO</strong>POST
                        </span>
                    </div>
                    <div className="header-center"></div>
                    <div className="header-right">
                        <button className="login">Đăng nhập</button>
                    </div>
                </div>
            </header>
        );
    }
};

export default Header;

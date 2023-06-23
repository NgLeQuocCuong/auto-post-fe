import { Button } from 'antd';
import AccountLayout from 'layouts/Account';
import { memo } from 'react';
import { NavLink } from 'react-router-dom';
import routeConstants from 'route/routeConstant';
import AccountInput from 'layouts/Account/AccountInput';
import Checkbox from 'components/CommonInput/components/Checkbox';
import AccountLayoutImage from '../../assets/images/AccountLayoutImage.png';
import Popup from 'components/Popup';
const Inner = memo(({ handleLogin }) => {
    const handleMessage = () => {
        Popup.popupSuccess('Đăng nhập thành công', 'Chào mừng đến với AutoPost!');
    };
    return (
        <AccountLayout title="Login">
        <div className="account-layout-container">
            <div className="account-layout__left">
            <div className="account-layout__autopost-logo">
                <span>AUTO</span>POST
            </div>

            <form className="account-layout__input"
                  onSubmit={handleLogin}
            >
                <div className="input__title">Đăng nhập</div>
                <div>
                <AccountInput label="Tên đăng nhập" type="text" />
                </div>
                <div>
                <AccountInput label="Mật khẩu" type="password" />
                </div>
                <div className="input__group">
                <Checkbox
                    value="remember"
                    options={[
                    {
                        value: 'Ghi nhớ đăng nhập',
                        label: 'Ghi nhớ đăng nhập',
                    },
                    ]}
                />
                <NavLink to={routeConstants.FORGOT_PASSWORD}>
                    Quên mật khẩu?
                </NavLink>
                </div>
                <NavLink to={routeConstants.ALL_POSTS}>
                    <Button
                    id="register"
                    className="account-layout-button"
                    type="primary"
                    onClick={handleMessage}
                    >
                    Đăng nhập
                    </Button>
                </NavLink>
                <div className="has-account">
                    Chưa có tài khoản? &nbsp;
                    <NavLink to={routeConstants.REGISTER}>Đăng ký</NavLink>
                </div>
            </form>
            <div className="account-layout__footer">
                © 2023 AutoPost is a product of Horus Co., Ltd
            </div>
        </div>
        <div className="account-layout__right">
            <img src={AccountLayoutImage} alt="Account layout" />
        </div>
        </div>
        </AccountLayout>
    );
});

Inner.displayName = 'Login Inner';

export default Inner;
import { Button } from 'antd';
import AccountLayout from 'layouts/Account';
import { memo } from 'react';
import { NavLink } from 'react-router-dom';
import routeConstants from 'route/routeConstant';
import '../../layouts/Account/index.scss';
import AccountInput from 'layouts/Account/AccountInput';
import AccountLayoutImage from '../../assets/images/AccountLayoutImage.png';

const Inner = memo(({ handleRegister }) => {
    return (
        <AccountLayout title="Register">
            <div className="account-layout-container">
                <div className="account-layout__left">
                    <div className="account-layout__autopost-logo"><span>AUTO</span>POST</div>
                    <form className="account-layout__input">
                        <div className="input__title">Đăng ký</div>
                        <div>
                            <AccountInput label="Họ và tên" type="text" />
                        </div>
                        <div>
                            <AccountInput label="Email" type="email" />
                        </div>
                        <div>
                            <AccountInput label="Tên đăng nhập" type="text" />
                        </div>
                        <div>
                            <AccountInput label="Mật khẩu" type="password" />
                        </div>
                        <div>
                            <AccountInput label="Nhập lại mật khẩu" type="password" />
                        </div>
                        <Button id="register" className="account-layout-button" type="primary">
                        <NavLink to={routeConstants.LOGIN}>
                                Đăng ký
                            </NavLink>
                        </Button>
                        <div className="has-account">
                            Đã có tài khoản? &nbsp;
                            <NavLink to={routeConstants.LOGIN}>
                                Đăng nhập
                            </NavLink>
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

Inner.displayName = 'Register Inner';

export default Inner;

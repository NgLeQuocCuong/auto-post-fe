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
                    <div className="account-layout__input">
                        <div className="input__title">Đặt lại mật khẩu</div>
                        <div>
                            <AccountInput label="Email" type="email" />
                        </div>
                        <Button id="register" className="account-layout-button" type="primary">
                        <NavLink to={routeConstants.LOGIN}>
                                Gửi yêu cầu
                            </NavLink>
                        </Button>
                        <div className="has-account">
                            <NavLink to={routeConstants.LOGIN}>
                                Quay lại trang đăng nhập
                            </NavLink>
                        </div>

                    </div>
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

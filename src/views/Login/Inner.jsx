import { Button, Form } from 'antd';
import AccountLayout from 'layouts/Account';
import { memo } from 'react';
import { NavLink } from 'react-router-dom';
import routeConstants from 'route/routeConstant';
import Checkbox from 'components/CommonInput/components/Checkbox';
import AccountInput from 'layouts/Account/AccountInput';
import AccountLayoutImage from 'assets/images/AccountLayoutImage.png';
import AutopostLogo48 from 'assets/images/AutopostLogo48';
const Inner = memo(({ handleLogin }) => {
    const handleFinish = values => {
        handleLogin(values);
    };
    return (
        <AccountLayout title="Login">
            <div className="account-layout-container">
                <div className="account-layout__left">
                    <div className="account-layout__autopost-logo">
                        <AutopostLogo48 />
                    </div>
                    <Form
                        className="account-layout__input"
                        onFinish={handleFinish}
                        method="POST"
                        layout="vertical"
                    >
                        <div className="input__title">Đăng nhập</div>
                        <AccountInput
                            name="email"
                            label="Email"
                            type="email"
                            required
                            requiredMessage="Vui lòng nhập email"
                            placeholder="Email"
                        />
                        <AccountInput
                            name="password"
                            label="Mật khẩu"
                            type="password"
                            required
                            requiredMessage="Vui lòng nhập mật khẩu"
                            placeholder="Mật khẩu"
                        />
                        <div className="account-layout__input--vertical">
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

                        <Button
                            className="account-layout-button"
                            type="primary"
                            htmlType="submit"
                        >
                            Đăng nhập
                        </Button>
                        <div className="has-account">
                            Chưa có tài khoản? &nbsp;
                            <NavLink to={routeConstants.REGISTER}>
                                Đăng ký
                            </NavLink>
                        </div>
                    </Form>
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

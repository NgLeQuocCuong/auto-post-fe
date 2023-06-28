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
    //Validate rules
    const emailRules = [
        {
            type: 'email',
            message: 'Định dạng email không hợp lệ.',
        },
    ];
    const passwordRules = [
        {
            pattern: /^(?=.*[\d])(?=.*[a-zA-Z])[a-zA-Z\d]{8,}$/,
            message: 'Mật khẩu phải có ít nhất 8 ký tự gồm cả chữ và số.',
        },
    ];
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
                        layout="vertical"
                    >
                        <div className="input__title">Đăng nhập</div>
                        <AccountInput
                            name="email"
                            label="Email"
                            type="email"
                            placeholder="Email"
                            rules={emailRules}
                        />
                        <AccountInput
                            name="password"
                            label="Mật khẩu"
                            type="password"
                            placeholder="Mật khẩu"
                            rules={passwordRules}
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

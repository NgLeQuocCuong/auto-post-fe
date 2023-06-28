import { Button, Form } from 'antd';
import AccountLayout from 'layouts/Account';
import { memo } from 'react';
import { NavLink } from 'react-router-dom';
import routeConstants from 'route/routeConstant';
import 'layouts/Account/index.scss';
import AccountInput from 'layouts/Account/AccountInput';
import AccountLayoutImage from 'assets/images/AccountLayoutImage.png';
import AutopostLogo48 from 'assets/images/AutopostLogo48';

const Inner = memo(({ handleRegister }) => {
    //Validate rules
    const nameRules = [
        {
            pattern: /^[^\d]+$/,
            message: 'Họ và tên không được chứa số.',
        },
    ];
    const usernameRules = [
        {
            min: 8,
            message: 'Tên đăng nhập phải có ít nhất 8 ký tự.',
        },
    ];
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
    const confirmPasswordRules = [
        ...passwordRules,
        ({ getFieldValue }) => ({
            validator(_, value) {
                if (!value || getFieldValue('password') === value) {
                    return Promise.resolve();
                }
                return Promise.reject(
                    new Error('Mật khẩu nhập lại không trùng khớp.')
                );
            },
        }),
    ];
    const handleFinish = values => {
        //Delete confirm password field before calling API
        delete values.confirmPassword;
        handleRegister(values);
    };
    return (
        <AccountLayout title="Register">
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
                        <div className="input__title">Đăng ký</div>

                        <div className="account-layout__input--vertical">
                            <AccountInput
                                name="firstName"
                                label="Họ"
                                type="text"
                                required
                                requiredMessage="Vui lòng nhập họ."
                                placeholder="Họ"
                                rules={nameRules}
                            />
                            <AccountInput
                                name="lastName"
                                label="Tên"
                                type="text"
                                required
                                requiredMessage="Vui lòng nhập tên."
                                placeholder="Tên"
                                rules={nameRules}
                            />
                        </div>
                        <AccountInput
                            name="email"
                            label="Email"
                            type="email"
                            required
                            requiredMessage="Vui lòng nhập email."
                            placeholder="Email"
                            rules={emailRules}
                        />
                        <AccountInput
                            name="username"
                            label="Tên đăng nhập"
                            type="text"
                            required
                            requiredMessage="Vui lòng nhập tên đăng nhập."
                            placeholder="Tên đăng nhập"
                            tooltip="Tên đăng nhập phải có ít nhất 8 ký tự."
                            rules={usernameRules}
                        />
                        <AccountInput
                            name="password"
                            label="Mật khẩu"
                            type="password"
                            required
                            requiredMessage="Vui lòng nhập mật khẩu."
                            placeholder="Mật khẩu"
                            tooltip="Mật khẩu phải có ít nhất 8 kí tự, bao gồm cả chữ và số."
                            rules={passwordRules}
                        />
                        <AccountInput
                            name="confirmPassword"
                            label="Nhập lại mật khẩu"
                            type="password"
                            required
                            requiredMessage="Vui lòng nhập lại mật khẩu."
                            placeholder="Nhập lại mật khẩu"
                            rules={confirmPasswordRules}
                        />
                        <Button
                            className="account-layout-button"
                            type="primary"
                            htmlType="submit"
                        >
                            Đăng ký
                        </Button>
                        <div className="has-account">
                            Đã có tài khoản? &nbsp;
                            <NavLink to={routeConstants.LOGIN}>
                                Đăng nhập
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

Inner.displayName = 'Register Inner';

export default Inner;

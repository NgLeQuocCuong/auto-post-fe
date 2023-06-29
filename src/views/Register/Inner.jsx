import { Button, Form } from 'antd';
import AccountLayout from 'layouts/Account';
import { memo, useMemo, useCallback } from 'react';
import { NavLink } from 'react-router-dom';
import routeConstants from 'route/routeConstant';
import 'layouts/Account/index.scss';
import AccountInput from 'layouts/Account/AccountInput';

const Inner = memo(({ handleRegister }) => {
    //Validate rules
    const nameRules = useMemo(
        () => [
            {
                pattern: /^[^0-9]*$/,
                message: 'Họ và tên không được chứa số.',
            },
        ],
        []
    );

    const usernameRules = useMemo(
        () => [
            {
                min: 8,
                message: 'Tên đăng nhập phải có ít nhất 8 ký tự.',
            },
        ],
        []
    );

    const emailRules = useMemo(
        () => [
            {
                type: 'email',
                message: 'Định dạng email không hợp lệ.',
            },
        ],
        []
    );

    const passwordRules = useMemo(
        () => [
            {
                pattern: /^(?=.*\d)(?=.*[a-zA-Z])[a-zA-Z\d]{8,}$/,
                message: 'Mật khẩu phải có ít nhất 8 ký tự gồm cả chữ và số.',
            },
        ],
        []
    );

    const confirmPasswordRules = useMemo(
        () => [
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
        ],
        [passwordRules]
    );
    const handleFinish = useCallback(
        values => {
            //Delete confirm password field before calling API
            delete values.confirmPassword;
            handleRegister(values);
        },
        [handleRegister]
    );
    return (
        <AccountLayout title="Đăng ký">
            <Form
                className="account-layout__input"
                onFinish={handleFinish}
                layout="vertical"
            >
                <div className="account-layout__input--vertical">
                    <AccountInput
                        name="firstName"
                        label="Họ"
                        type="text"
                        placeholder="Họ"
                        rules={nameRules}
                    />
                    <AccountInput
                        name="lastName"
                        label="Tên"
                        type="text"
                        placeholder="Tên"
                        rules={nameRules}
                    />
                </div>
                <AccountInput
                    name="email"
                    label="Email"
                    type="email"
                    placeholder="Email"
                    rules={emailRules}
                />
                <AccountInput
                    name="username"
                    label="Tên đăng nhập"
                    type="text"
                    placeholder="Tên đăng nhập"
                    tooltip="Tên đăng nhập phải có ít nhất 8 ký tự."
                    rules={usernameRules}
                />
                <AccountInput
                    name="password"
                    label="Mật khẩu"
                    type="password"
                    placeholder="Mật khẩu"
                    tooltip="Mật khẩu phải có ít nhất 8 kí tự, bao gồm cả chữ và số."
                    rules={passwordRules}
                />
                <AccountInput
                    name="confirmPassword"
                    label="Nhập lại mật khẩu"
                    type="password"
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
                    <NavLink to={routeConstants.LOGIN}>Đăng nhập</NavLink>
                </div>
            </Form>
        </AccountLayout>
    );
});

Inner.displayName = 'Register Inner';

export default Inner;

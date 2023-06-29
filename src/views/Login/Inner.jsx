import { Button, Form } from 'antd';
import AccountLayout from 'layouts/Account';
import { memo, useMemo, useCallback } from 'react';
import { NavLink } from 'react-router-dom';
import routeConstants from 'route/routeConstant';
import AccountInput from 'layouts/Account/AccountInput';
const Inner = memo(({ handleLogin }) => {
    //Validate rules
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
    const handleFinish = useCallback(
        values => {
            handleLogin(values);
        },
        [handleLogin]
    );
    return (
        <AccountLayout title="Đăng nhập">
            <Form
                className="account-layout__input"
                onFinish={handleFinish}
                layout="vertical"
            >
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
                <NavLink to={routeConstants.FORGOT_PASSWORD}>
                    Quên mật khẩu?
                </NavLink>
                <Button
                    className="account-layout-button"
                    type="primary"
                    htmlType="submit"
                >
                    Đăng nhập
                </Button>
                <div className="has-account">
                    Chưa có tài khoản? &nbsp;
                    <NavLink to={routeConstants.REGISTER}>Đăng ký</NavLink>
                </div>
            </Form>
        </AccountLayout>
    );
});

Inner.displayName = 'Login Inner';

export default Inner;

import { Button, Form } from 'antd';
import AccountLayout from 'layouts/Account';
import AccountInput from 'layouts/Account/AccountInput';
import 'layouts/Account/index.scss';
import { memo, useCallback, useMemo } from 'react';
import { NavLink } from 'react-router-dom';
import routeConstants from 'route/routeConstant';

const Inner = memo(({ handleRegister }) => {
    //Validate rules
    const nameRules = useMemo(
        () => [
            {
                pattern: /^\D*$/,
                message: 'Họ và tên không được chứa số.',
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
    const handleFinish = useCallback(
        values => {
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
                    type="text"
                    placeholder="Email"
                    rules={emailRules}
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

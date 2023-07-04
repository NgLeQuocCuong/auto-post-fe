import { Button, Form, Spin } from 'antd';
import AccountLayout from 'layouts/Account';
import { memo, useCallback, useMemo } from 'react';
import AccountInput from 'layouts/Account/AccountInput';
import routeConstants from 'route/routeConstant';
import { useNavigate } from 'react-router-dom';
const Inner = memo(({ handleVerifyAccount, loading }) => {
    const passwordRules = useMemo(
        () => [
            {
                pattern: /^(?=.*\d)(?=.*\D)[^\s]{8,}$/,
                message: 'Mật khẩu phải có ít nhất 8 ký tự gồm chữ và số.',
            },
        ],
        []
    );

    const confirmPasswordRules = useMemo(
        () => [
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
        []
    );

    const navigate = useNavigate();
    const handleFinish = useCallback(
        values => {
            delete values.confirmPassword;
            handleVerifyAccount(values).then(() => {
                navigate(routeConstants.LOGIN);
            });
        },
        [handleVerifyAccount, navigate]
    );
    return (
        <Spin spinning={loading} size="large">
            <AccountLayout title="Xác thực tài khoản">
                <Form
                    className="account-layout__input"
                    onFinish={handleFinish}
                    layout="vertical"
                >
                    <AccountInput
                        name="password"
                        label="Mật khẩu"
                        type="password"
                        placeholder="Mật khẩu"
                        tooltip="Mật khẩu phải có ít nhất 8 kí tự gồm chữ và số."
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
                        Xác nhận
                    </Button>
                </Form>
            </AccountLayout>
        </Spin>
    );
});

Inner.displayName = 'Verify Account Inner';

export default Inner;

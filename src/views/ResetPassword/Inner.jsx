import { Button, Form } from 'antd';
import AccountLayout from 'layouts/Account';
import AccountInput from 'layouts/Account/AccountInput';
import 'layouts/Account/index.scss';
import { memo, useCallback, useMemo } from 'react';

const Inner = memo(({ handleResetPassword }) => {
    //Validate rules
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
    const handleFinish = useCallback(
        values => {
            //Delete confirm password field before calling API
            delete values.confirmPassword;
            handleResetPassword(values);
        },
        [handleResetPassword]
    );
    return (
        <AccountLayout title="Thay đổi mật khẩu">
            <Form
                className="account-layout__input"
                onFinish={handleFinish}
                layout="vertical"
            >
                <AccountInput
                    name="password"
                    label="Mật khẩu mới"
                    type="password"
                    placeholder="Mật khẩu mới"
                    tooltip="Mật khẩu phải có ít nhất 8 kí tự gồm chữ và số."
                    rules={passwordRules}
                />
                <AccountInput
                    name="confirmPassword"
                    label="Nhập lại mật khẩu mới"
                    type="password"
                    placeholder="Nhập lại mật khẩu mới"
                    rules={confirmPasswordRules}
                />
                <Button
                    className="account-layout-button"
                    type="primary"
                    htmlType="submit"
                >
                    Đổi mật khẩu
                </Button>
            </Form>
        </AccountLayout>
    );
});

Inner.displayName = 'Reset Password Inner';

export default Inner;

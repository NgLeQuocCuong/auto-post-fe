import { Button, Form, Spin } from 'antd';
import AccountLayout from 'layouts/Account';
import { memo, useMemo, useCallback } from 'react';
import AccountInput from 'layouts/Account/AccountInput';
const Inner = memo(({ handleForgotPassword, onLoading }) => {
    // Validate rules
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
            handleForgotPassword(values);
        },
        [handleForgotPassword]
    );
    return (
        <Spin spinning={onLoading} size="large">
            <AccountLayout title="Lấy lại mật khẩu">
                <Form
                    className="account-layout__input"
                    onFinish={handleFinish}
                    layout="vertical"
                >
                    <AccountInput
                        name="email"
                        label="Email đã đăng ký"
                        type="email"
                        placeholder="Email đã đăng ký"
                        rules={emailRules}
                        required
                    />
                    <Button
                        className="account-layout-button"
                        type="primary"
                        htmlType="submit"
                    >
                        Gửi email
                    </Button>
                </Form>
            </AccountLayout>
        </Spin>
    );
});

Inner.displayName = 'Forgot Password Inner';

export default Inner;

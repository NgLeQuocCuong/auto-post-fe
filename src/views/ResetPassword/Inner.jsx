import AccountLayout from 'layouts/Account';
import { memo } from 'react';
import { Form, Button } from 'antd';
import AccountInput from 'layouts/Account/AccountInput';

const Inner = memo(({ handleResetPassword }) => {
    // TODO: Add AccountLayout
    return (
        <AccountLayout title="Đặt lại mật khẩu">
            <div className="forgot">
                <Form
                    className="forgot__left"
                    layout="vertical"
                    onFinish={values => handleResetPassword(values)}
                >
                    <AccountInput
                        title="Mật khẩu mới"
                        label="Mật khẩu mới"
                        name="password"
                        type="password"
                        placeholder="Nhập mật khẩu mới"
                    />
                    <AccountInput
                        title="Xác nhận mật khẩu mới"
                        label="Xác nhận mật khẩu mới"
                        name="confirmPassword"
                        type="password"
                        placeholder="Nhập lại mật khẩu mới"
                    />
                    <Button type="primary" htmlType="submit">
                        Đặt lại mật khẩu
                    </Button>
                </Form>
                <div className="forgot__right"></div>
            </div>
        </AccountLayout>
    );
});

Inner.displayName = 'Reset Password Inner';

export default Inner;

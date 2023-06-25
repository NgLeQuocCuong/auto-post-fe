import { Button, Form, Typography } from 'antd';
import AccountLayout from 'layouts/Account';
import { memo } from 'react';
import { NavLink } from 'react-router-dom';
import routeConstants from 'route/routeConstant';
import PasswordInput from 'components/CommonInput/components/PasswordInput';
import Message from 'components/Message';
import './index.scss';

const Inner = memo(({ handleResetPassword }) => {
    const passwordTooltip =
        'Mật khẩu tối thiểu 8 ký tự, chỉ gồm chữ và số, và có ít nhất một số';
    const rules = [
        {
            required: true,
            message: 'Không được để trống',
        },
    ];
    const rulesPassword = [
        ...rules,
        {
            pattern: /^(?=.*[0-9])(?=.*[a-zA-Z])[a-zA-Z0-9]{8,}$/,
            message: 'Mật khẩu không hợp lệ',
        },
    ];
    const rulesPasswordRetype = [
        ...rules,
        ({ getFieldValue }) => ({
            validator(_, value) {
                if (!value || getFieldValue('password') === value) {
                    return Promise.resolve();
                }
                return Promise.reject(new Error('Mật khẩu không trùng khớp'));
            },
        }),
    ];
    const onFinish = values => {
        handleResetPassword(values);
    };
    const onFinishFailed = () => {
        Message.sendError('Vui lòng kiểm tra lại thông tin');
    };
    return (
        <AccountLayout title="Reset Password">
            <div className="container"></div>
            <Form
                layout="vertical"
                className="container form"
                medthod="POST"
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
            >
                <Form.Item>
                    <Typography.Text component="div" className="form__title">
                        Đặt lại mật khẩu
                    </Typography.Text>
                </Form.Item>
                <Form.Item
                    className="form__label-fw-600"
                    name="password"
                    label="Mật khẩu mới"
                    hasFeedback
                    rules={rulesPassword}
                    tooltip={passwordTooltip}
                >
                    <PasswordInput
                        size="large"
                        placeholder="Nhập mật khẩu mới"
                    />
                </Form.Item>
                <Form.Item
                    className="form__label-fw-600"
                    name="password_retype"
                    label="Xác nhận mật khẩu mới"
                    dependencies={['password']}
                    hasFeedback
                    rules={rulesPasswordRetype}
                >
                    <PasswordInput
                        size="large"
                        placeholder="Nhập lại mật khẩu mới"
                    />
                </Form.Item>
                <Form.Item style={{ clear: 'both' }}>
                    <NavLink to={routeConstants.USER_SETTINGS}>
                        <Button
                            size="large"
                            className="account-layout-button"
                            type="default"
                        >
                            Hủy
                        </Button>
                    </NavLink>
                    <Button
                        size="large"
                        type="primary"
                        htmlType="submit"
                        style={{
                            float: 'right',
                        }}
                    >
                        Lưu
                    </Button>
                </Form.Item>
            </Form>
        </AccountLayout>
    );
});

Inner.displayName = 'Reset Password Inner';

export default Inner;

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
            pattern: /^(?=.*[\d])(?=.*[a-zA-Z])[a-zA-Z\d]{8,}$/,
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
        delete values.passwordRetype;
        values.token = 'token_param_from_url';
        handleResetPassword(values);
    };
    const onFinishFailed = () => {
        Message.sendError('Vui lòng kiểm tra lại thông tin');
    };
    return (
        <AccountLayout title="Reset Password">
            <Form
                layout="vertical"
                className="container form"
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
                    name="passwordRetype"
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
                <Form.Item className="clear-both">
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
                        className="float-right"
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

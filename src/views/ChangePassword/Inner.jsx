import { Button, Form, Typography } from 'antd';
import PasswordInput from 'components/CommonInput/components/PasswordInput';
import WebLayout from 'layouts/Web/WebLayout';
import { memo } from 'react';
import { NavLink } from 'react-router-dom';
import routeConstants from 'route/routeConstant';
import Message from 'components/Message';
import './index.scss';

const Inner = memo(({ handleChangePassword }) => {
    const passwordTooltip =
        'Mật khẩu tối thiểu 8 ký tự, không có khoảng trắng, phải chứa số và chữ cái hoặc ký tự đặc biệt';
    const rulesPasswordCurrent = [
        {
            required: true,
            message: 'Không được để trống',
        },
    ];
    const rulesPasswordNew = [
        ...rulesPasswordCurrent,
        {
            pattern: /^(?=.*\d)(?=.*\D)[^\s]{8,}$/,
            message: 'Mật khẩu không hợp lệ',
        },
    ];
    const rulesPasswordRenew = [
        ...rulesPasswordNew,
        ({ getFieldValue }) => ({
            validator(_, value) {
                if (!value || getFieldValue('newPassword') === value) {
                    return Promise.resolve();
                }
                return Promise.reject(new Error('Mật khẩu không trùng khớp'));
            },
        }),
    ];
    const onFinish = values => {
        delete values.newPasswordRetype;
        handleChangePassword(values);
    };
    const onFinishFailed = () => {
        Message.sendError('Vui lòng kiểm tra lại thông tin');
    };

    return (
        <WebLayout title="Change Password">
            <Form
                layout="vertical"
                className="change-password-form"
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
            >
                <Form.Item>
                    <Typography.Text className="change-password-form__title">
                        Đổi mật khẩu
                    </Typography.Text>
                </Form.Item>
                <Form.Item
                    className="change-password-form__label--fw-600"
                    name="currentPassword"
                    label="Mật khẩu hiện tại"
                    rules={rulesPasswordCurrent}
                >
                    <PasswordInput
                        required
                        size="large"
                        placeholder="Nhập mật khẩu hiện tại"
                    />
                </Form.Item>
                <Form.Item
                    className="change-password-form__label--fw-600"
                    name="newPassword"
                    label="Mật khẩu mới"
                    hasFeedback
                    rules={rulesPasswordNew}
                    tooltip={passwordTooltip}
                >
                    <PasswordInput
                        required
                        size="large"
                        placeholder="Nhập mật khẩu mới"
                    />
                </Form.Item>
                <Form.Item
                    className="change-password-form__label--fw-600"
                    name="newPasswordRetype"
                    label="Xác nhận mật khẩu mới"
                    dependencies={['newPassword']}
                    hasFeedback
                    rules={rulesPasswordRenew}
                >
                    <PasswordInput
                        required
                        size="large"
                        placeholder="Nhập lại mật khẩu mới"
                    />
                </Form.Item>
                <Form.Item className="clear-both">
                    <NavLink to={routeConstants.USER_SETTINGS}>
                        <Button size="large" type="default">
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
        </WebLayout>
    );
});

Inner.displayName = 'Change Password Inner';

export default Inner;

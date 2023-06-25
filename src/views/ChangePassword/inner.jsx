import { Button, Form, Typography, Row, Col, Image } from 'antd';
import PasswordInput from 'components/CommonInput/components/PasswordInput';
import AccountLayout from 'layouts/Account';
import { memo } from 'react';
import { NavLink } from 'react-router-dom';
import routeConstants from 'route/routeConstant';
import './index.scss';

const Inner = memo(({ handleChangePassword }) => {
    const passwordTooltip =
        'Mật khẩu tối thiểu 8 ký tự, chỉ gồm chữ và số, và có ít nhất một số';
    const rulesPasswordCurrent = [
        {
            required: true,
            message: 'Không được để trống',
        },
    ];
    const rulesPasswordNew = [
        ...rulesPasswordCurrent,
        {
            pattern: /^(?=.*[0-9])(?=.*[a-zA-Z])[a-zA-Z0-9]{8,}$/,
            message: 'Mật khẩu không hợp lệ',
        },
    ];
    const rulesPasswordRenew = [
        ...rulesPasswordCurrent,
        ({ getFieldValue }) => ({
            validator(_, value) {
                if (!value || getFieldValue('password_new') === value) {
                    return Promise.resolve();
                }
                return Promise.reject(new Error('Mật khẩu không trùng khớp'));
            },
        }),
    ];
    return (
        <AccountLayout title="Change Password">
            <Form layout="vertical" className="container form">
                <Form.Item>
                    <Typography.Text className="form__title">
                        Đổi mật khẩu
                    </Typography.Text>
                </Form.Item>
                <Form.Item
                    className="form__label-fw-600"
                    name="password_current"
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
                    className="form__label-fw-600"
                    name="password_new"
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
                    className="form__label-fw-600"
                    name="password_renew"
                    label="Xác nhận mật khẩu mới"
                    dependencies={['password_new']}
                    hasFeedback
                    rules={rulesPasswordRenew}
                >
                    <PasswordInput
                        required
                        size="large"
                        placeholder="Nhập lại mật khẩu mới"
                    />
                </Form.Item>
                <Form.Item style={{ clear: 'both' }}>
                    <NavLink to={routeConstants.USER_SETTINGS}>
                        <Button size="large" type="default">
                            Hủy
                        </Button>
                    </NavLink>
                    <Button
                        size="large"
                        type="primary"
                        onClick={handleChangePassword}
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

Inner.displayName = 'Change Password Inner';

export default Inner;

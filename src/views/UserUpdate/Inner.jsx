import { Button, Form, Typography, Space } from 'antd';
import { memo } from 'react';
import AccountLayout from 'layouts/Account';
import routeConstants from 'route/routeConstant';
import { NavLink } from 'react-router-dom';
import TextInput from 'components/CommonInput/components/TextInput';
import Message from 'components/Message';
import './index.scss';

const Inner = memo(({ handleUserUpdate, userInfo }) => {
    const [form] = Form.useForm();
    form.setFieldsValue(userInfo);
    const rulesName = [
        {
            pattern: /^[^\d]+$/,
            message: 'Không hợp lệ',
        },
    ];
    const usernameTooltip = 'Tên đăng nhập tối thiểu 8 ký tự gồm chữ hoặc số';
    const rulesUsername = [
        {
            pattern: /^[a-zA-Z\d]{8,}$/,
            message: 'Không hợp lệ',
        },
    ];
    const onFinish = values => {
        delete values.email;
        handleUserUpdate(values);
    };
    const onFinishFailed = () => {
        Message.sendError('Vui lòng kiểm tra lại thông tin.');
    };
    return (
        <AccountLayout title="User Update">
            <Form
                form={form}
                layout="vertical"
                className="container user-update-form"
                initialValues={userInfo}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
            >
                <Form.Item>
                    <Typography.Text
                        component="div"
                        className="user-update-form__title"
                    >
                        Chỉnh sửa thông tin
                    </Typography.Text>
                </Form.Item>
                <Space>
                    <Form.Item
                        name="firstName"
                        label="Họ"
                        className="user-update-form__label--fw-600"
                        rules={rulesName}
                    >
                        <TextInput size="large" placeholder="Nhập họ" />
                    </Form.Item>
                    <Form.Item
                        name="lastName"
                        label="Tên"
                        className="user-update-form__label--fw-600"
                        rules={rulesName}
                    >
                        <TextInput size="large" placeholder="Nhập tên" />
                    </Form.Item>
                </Space>
                <Form.Item
                    name="username"
                    label="Tên đăng nhập"
                    className="user-update-form__label--fw-600"
                    tooltip={usernameTooltip}
                    rules={rulesUsername}
                >
                    <TextInput size="large" placeholder="Nhập tên đăng nhập" />
                </Form.Item>
                <Form.Item
                    name="email"
                    label="Email"
                    className="user-update-form__label--fw-600"
                >
                    <TextInput size="large" placeholder="Nhập email" disabled />
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
        </AccountLayout>
    );
});

Inner.displayName = 'User Update Inner';

export default Inner;

import { Button, Form, Typography, Space } from 'antd';
import { memo, useEffect } from 'react';
import AccountLayout from 'layouts/Account';
import routeConstants from 'route/routeConstant';
import { NavLink } from 'react-router-dom';
import TextInput from 'components/CommonInput/components/TextInput';
import Message from 'components/Message';
import './index.scss';

const Inner = memo(({ handleUserUpdate, userInfo }) => {
    const [form] = Form.useForm();
    useEffect(() => {
        form.setFieldsValue(userInfo);
    }, [form, userInfo]);
    const rules = [
        {
            pattern: /^[^\d]+$/,
            message: 'Không hợp lệ',
        },
    ];
    const rulesUsername = [
        {
            pattern: /^[a-zA-Z0-9]+$/,
            message: 'Không hợp lệ',
        },
    ];
    const onFinish = values => {
        delete values.email;
        handleUserUpdate(values);
    };
    const onFinishFailed = () => {
        Message.sendError('Vui lòng kiểm tra lại thông tin');
    };
    return (
        <AccountLayout title="User Update">
            <Form
                form={form}
                layout="vertical"
                className="container form"
                initialValues={userInfo}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
            >
                <Form.Item>
                    <Typography.Text className="form__title">
                        Chỉnh sửa thông tin
                    </Typography.Text>
                </Form.Item>
                <Space>
                    <Form.Item
                        name="first_name"
                        label="Họ"
                        className="form__label-fw-600"
                        rules={rules}
                    >
                        <TextInput size="large" placeholder="Nhập họ" />
                    </Form.Item>
                    <Form.Item
                        name="last_name"
                        label="Tên"
                        className="form__label-fw-600"
                        rules={rules}
                    >
                        <TextInput size="large" placeholder="Nhập tên" />
                    </Form.Item>
                </Space>
                <Form.Item
                    name="username"
                    label="Tên đăng nhập"
                    className="form__label-fw-600"
                    rules={rulesUsername}
                >
                    <TextInput size="large" placeholder="Nhập tên đăng nhập" />
                </Form.Item>
                <Form.Item
                    name="email"
                    label="Email"
                    className="form__label-fw-600"
                >
                    <TextInput size="large" placeholder="Nhập email" disabled />
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

Inner.displayName = 'User Update Inner';

export default Inner;

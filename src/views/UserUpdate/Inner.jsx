import { Button, Form, Space, Typography, Row, Col } from 'antd';
import TextInput from 'components/CommonInput/components/TextInput';
import Message from 'components/Message';
import WebLayout from 'layouts/Web/WebLayout';
import { memo, useCallback, useRef, useState } from 'react';
import { NavLink } from 'react-router-dom';
import routeConstants from 'route/routeConstant';
import FileInputAvatar from 'components/Profile/components/FileInputAvatar';
import './index.scss';

const Inner = memo(({ handleUserUpdate, userInfo }) => {
    const [form] = Form.useForm();
    form.setFieldsValue(userInfo);
    const rulesName = [
        {
            pattern: /^[^\d]+$/,
            message: 'Không được chứa số',
        },
    ];
    // TODO: Username maybe used in the future
    // const usernameTooltip = 'Tên đăng nhập tối thiểu 8 ký tự gồm chữ hoặc số';
    // const rulesUsername = [
    //     {
    //         required: true,
    //         message: 'Không được để trống',
    //     },
    //     {
    //         pattern: /^[a-zA-Z\d]{8,}$/,
    //         message: 'Không hợp lệ',
    //     },
    // ];
    const [imgurl, setImgurl] = useState('');
    const handleOnChange = useCallback(
        event => {
            setImgurl(event.target.url);
            console.log(imgurl);
        },
        [imgurl]
    );
    const onFinish = values => {
        delete values.email;
        handleUserUpdate(values);
    };
    const onFinishFailed = () => {
        Message.sendError('Vui lòng kiểm tra lại thông tin.');
    };
    return (
        <WebLayout title="User Update">
            <Form
                form={form}
                layout="vertical"
                initialValues={userInfo}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
            >
                <Row className="user-update-form">
                    <Col span={6}>
                        {/* <Avatar url={userInfo.avatar} /> */}
                        <FileInputAvatar
                            url={userInfo.avatar}
                            onChange={handleOnChange}
                        />
                    </Col>
                    <Col span={18}>
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
                                <TextInput
                                    size="large"
                                    placeholder="Nhập tên"
                                />
                            </Form.Item>
                        </Space>
                        {/* TODO: Username may be used in the future*/}
                        {/* <Form.Item
                    name="username"
                    label="Tên đăng nhập"
                    className="user-update-form__label--fw-600"
                    tooltip={usernameTooltip}
                    rules={rulesUsername}
                >
                    <TextInput size="large" placeholder="Nhập tên đăng nhập" />
                </Form.Item> */}
                        <Form.Item
                            name="email"
                            label="Email"
                            className="user-update-form__label--fw-600"
                        >
                            <TextInput
                                size="large"
                                placeholder="Nhập email"
                                disabled
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
                    </Col>
                </Row>
            </Form>
        </WebLayout>
    );
});

Inner.displayName = 'User Update Inner';

export default Inner;

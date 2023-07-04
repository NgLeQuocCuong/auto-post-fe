import { Button, Form, Space, Typography, Row, Col } from 'antd';
import TextInput from 'components/CommonInput/components/TextInput';
import Message from 'components/Message';
import WebLayout from 'layouts/Web/WebLayout';
import { memo, useCallback, useState } from 'react';
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
    const [inputFile, setInputFile] = useState();
    const handleImgChange = useCallback(
        value => {
            setInputFile(value);
        },
        [setInputFile]
    );

    const onFinish = values => {
        delete values.email;
        delete values.avatar;
        values.firstName = values.firstName.replace(/\s\s+/g, ' ');
        values.lastName = values.lastName.replace(/\s\s+/g, ' ');
        const body = {
            avatar: inputFile,
            data: values,
        };
        handleUserUpdate(body);
    };
    const onFinishFailed = () => {
        Message.sendError('Vui lòng kiểm tra lại thông tin.');
    };
    return (
        <WebLayout>
            <Form
                form={form}
                layout="vertical"
                initialValues={userInfo}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
            >
                <Row className="user-update-form">
                    <Col span={6}>
                        <Form.Item name="avatar">
                            <FileInputAvatar
                                imgSrc={userInfo.avatar}
                                imgChange={handleImgChange}
                            />
                        </Form.Item>
                    </Col>
                    <Col span={18}>
                        <Form.Item>
                            <Typography.Text className="user-update-form__title">
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

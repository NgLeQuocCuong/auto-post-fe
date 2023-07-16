import { Button, Form, Space, Typography, Row, Col } from 'antd';
import TextInput from 'components/CommonInput/components/TextInput';
import Message from 'components/Message';
import WebLayout from 'layouts/Web/WebLayout';
import { memo, useCallback, useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import routeConstants from 'route/routeConstant';
import FileInputAvatar from 'components/Profile/components/FileInputAvatar';
import './index.scss';

const Inner = memo(({ handleUserUpdate, userInfo }) => {
    const [form] = Form.useForm();
    const initForm = useCallback(() => {
        form.setFieldsValue(userInfo);
    }, [form, userInfo]);
    useEffect(() => {
        initForm();
    }, [initForm]);

    const nameTooltip = 'Không được chứa số hoặc chỉ có khoảng trắng';
    const rulesName = [
        {
            required: true,
            message: 'Không được để trống',
        },
        {
            pattern: /^(?! *$)([^\d])+$/,
            message: 'Không hợp lệ',
        },
    ];
    const [inputFile, setInputFile] = useState();
    const handleImgChange = useCallback(fileData => {
        setInputFile(fileData);
    }, []);

    const onFinish = useCallback(
        values => {
            delete values.email;
            values.firstName = values.firstName.replace(/\s+/g, ' ').trim();
            values.lastName = values.lastName.replace(/\s+/g, ' ').trim();
            const body = Object.assign(
                inputFile ? { avatar: inputFile } : {},
                values
            );
            handleUserUpdate(body);
        },
        [inputFile, handleUserUpdate]
    );
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
                        <FileInputAvatar
                            imgSrc={userInfo.avatar}
                            imgChange={handleImgChange}
                        />
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
                                tooltip={nameTooltip}
                                rules={rulesName}
                            >
                                <TextInput size="large" placeholder="Nhập họ" />
                            </Form.Item>
                            <Form.Item
                                name="lastName"
                                label="Tên"
                                className="user-update-form__label--fw-600"
                                tooltip={nameTooltip}
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

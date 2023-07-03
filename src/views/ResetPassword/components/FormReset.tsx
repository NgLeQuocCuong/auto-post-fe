import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import { Button, Form, Input, Space } from 'antd';
import { useForm } from 'antd/es/form/Form';
import Message from 'components/Message';
import { FC, memo } from 'react';
import { useNavigate } from 'react-router-dom';
import '../style.scss';

interface Props {
    handleResetPassword: any;
}

const FormReset: FC<Props> = memo(({ handleResetPassword }) => {
    const [form] = useForm();
    const navgate = useNavigate();
    const handleFinish = async (values: any) => {
        await handleResetPassword(values);
        form.resetFields();
        Message.sendSuccess('Đổi mật khẩu thành công. Đăng nhập ngay');
        navgate('/login');
    };
    const validatePassword = (_: any, value: any, callback: any) => {
        const password = form.getFieldValue('newpass');
        if (value && value !== password) {
            callback('Xác nhận mật khẩu không khớp!');
        }
        callback();
    };
    return (
        <Form
            form={form}
            layout="vertical"
            autoComplete="off"
            className="reset__left--form"
            onFinish={handleFinish}
        >
            <Form.Item
                name="newpass"
                label="Mật khẩu mới"
                className="reset__left--form-item"
                rules={[
                    {
                        required: true,
                        message: 'Vui lòng nhập mật khẩu mới',
                    },
                    {
                        pattern: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
                        message:
                            'Mật khẩu chứa tối thiểu 8 ký tự, ít nhất 1 số và 1 ký tự',
                    },
                ]}
            >
                <Input.Password
                    placeholder="Nhập mật khẩu mới"
                    className="reset__left--form-input"
                    iconRender={visible =>
                        visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
                    }
                />
            </Form.Item>
            <Form.Item
                name="confirmpass"
                label="Xác nhận mật khẩu"
                className="reset__left--form-item"
                dependencies={['newpass']}
                rules={[
                    {
                        required: true,
                        message: 'Vui lòng xác nhận mật khẩu',
                    },
                    {
                        validator: validatePassword,
                    },
                ]}
            >
                <Input.Password
                    placeholder="Xác nhận mật khẩu mới"
                    className="reset__left--form-input"
                    iconRender={visible =>
                        visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
                    }
                />
            </Form.Item>
            <Form.Item className="reset__left--form-item">
                <Space>
                    <Button
                        type="primary"
                        htmlType="submit"
                        className="reset__left--form-button"
                    >
                        Xác nhận
                    </Button>
                </Space>
            </Form.Item>
        </Form>
    );
});

FormReset.displayName = 'FormReset Component';

export default FormReset;

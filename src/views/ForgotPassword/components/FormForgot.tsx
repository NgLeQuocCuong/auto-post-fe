import { Button, Form, Input, Space } from 'antd';
import { useForm } from 'antd/es/form/Form';
import { FC, memo } from 'react';
import '../style.scss';

interface Props {
    handleForgotPassword: any;
}

const FormForgot: FC<Props> = memo(({ handleForgotPassword }) => {
    const [form] = useForm();
    const handleFinish = async (values: any) => {
        await handleForgotPassword(values);
        form.resetFields();
    };
    return (
        <Form
            form={form}
            layout="vertical"
            autoComplete="off"
            className="forgot__left--form"
            onFinish={handleFinish}
        >
            <Form.Item
                name="email"
                label="Email"
                className="forgot__left--form-item"
                rules={[
                    {
                        required: true,
                        message: 'Vui lòng nhập email của bạn',
                    },
                    {
                        pattern:
                            /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/,
                        message: 'Email không đúng định dạng',
                    },
                ]}
            >
                <Input
                    placeholder="Nhập email của bạn"
                    className="forgot__left--form-input"
                />
            </Form.Item>
            <Form.Item className="forgot__left--form-item">
                <Space>
                    <Button
                        type="primary"
                        htmlType="submit"
                        className="forgot__left--form-button"
                    >
                        Xác nhận
                    </Button>
                </Space>
            </Form.Item>
        </Form>
    );
});

FormForgot.displayName = 'FormForgot Component';

export default FormForgot;

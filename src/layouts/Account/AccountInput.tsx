import { Form, Input } from 'antd';
import { FC, memo } from 'react';
import './index.scss';
interface AccountInputProps {
    type?: string;
    name: string;
    label: string;
    placeholder?: string;
    rules?: [];
}

const AccountInput: FC<AccountInputProps> = memo(
    ({
        type = 'text',
        name,
        label,
        placeholder = 'Nhập vào trường này',
        rules,
        ...props
    }) => {
        return (
            <Form.Item
                name={name}
                label={label}
                rules={[
                    {
                        required: true,
                        message: 'Trường này không được để trống.',
                    },
                    ...(rules || []),
                ]}
                {...props}
            >
                <Input type={type} placeholder={placeholder} size="large" />
            </Form.Item>
        );
    }
);

AccountInput.displayName = 'AccountInput';
export default AccountInput;

import { Form, Input } from 'antd';
import { FC, memo } from 'react';
import './index.scss';
interface AccountInputProps {
    type?: string | 'text';
    name: string;
    label: string;
    placeholder?: string | 'Nhập vào trường này';
    rules?: any;
}

const AccountInput: FC<AccountInputProps> = memo(
    ({ type, name, label, placeholder, rules, ...props }) => {
        return (
            <Form.Item
                name={name}
                label={label}
                rules={[
                    {
                        required: true,
                        message: 'Trường này không được để trống.',
                    },
                    ...rules,
                ]}
                {...props}
            >
                <Input type={type} placeholder={placeholder} />
            </Form.Item>
        );
    }
);

AccountInput.displayName = 'AccountInput';
export default AccountInput;

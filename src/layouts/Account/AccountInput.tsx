import { memo, FC } from 'react';
import { Form, Input } from 'antd';
import './index.scss';

interface AccountInputProps {
    type?: string | 'text';
    name: string;
    label: string;
    placeholder?: string | 'Nhập vào trường này';
}

const AccountInput: FC<AccountInputProps> = memo(
    ({ type, name, label, placeholder, ...props }) => {
        return (
            <Form.Item name={name} label={label} required {...props}>
                <Input type={type} placeholder={placeholder} />
            </Form.Item>
        );
    }
);

AccountInput.displayName = 'AccountInput';
export default AccountInput;
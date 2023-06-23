import {  memo, FC } from 'react'
import {Form, Input } from 'antd';
import './index.scss';

interface AccountInputProps {

    type: string;
    name: string;
    placeholder: string;
    required?: boolean;
    requiredMessage?: string;
}

const AccountInput: FC<AccountInputProps> = memo(
    ({ type, 
        name, 
        placeholder, 
        required, 
        requiredMessage,
        ...props 
    }) => {

    const rules = required ? [{ required: true, message: requiredMessage || 'Trường này không được để trống.' }] : [];

    return (
        <Form.Item name={name} rules={rules}>
            <Input 
                type={type} 
                name={name} 
                placeholder={placeholder} 
                {...props}
            />
        </Form.Item>
    );
});

AccountInput.displayName = 'AccountInput';
export default AccountInput;
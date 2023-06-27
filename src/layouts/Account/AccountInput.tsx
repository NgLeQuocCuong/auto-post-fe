import { memo, FC } from 'react';
import { Form, Input } from 'antd';
import './index.scss';

interface AccountInputProps {
    type?: string | 'text';
    name: string;
    label: string;
    placeholder?: string | 'Nhập vào trường này';
    required?: boolean;
    requiredMessage?: string;
}

const AccountInput: FC<AccountInputProps> = memo(
    ({ type, name, label, placeholder, required, requiredMessage }) => {
        const rules = required
            ? [
                  {
                      required: true,
                      message:
                          requiredMessage || 'Trường này không được để trống.',
                  },
              ]
            : [];

        return (
            <Form.Item name={name} rules={rules} label={label}>
                <Input type={type} placeholder={placeholder} />
            </Form.Item>
        );
    }
);

AccountInput.displayName = 'AccountInput';
export default AccountInput;

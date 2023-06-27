import { useState, FC, memo } from 'react';
import {
    Dropdown as AntdDropdown,
    Checkbox,
    Radio,
    DatePicker,
    Form,
} from 'antd';
import type { MenuProps } from 'antd';
import dayjs, { Dayjs } from 'dayjs';
import ArrowIcon from 'components/CommonInput/icons/ArrowIcon';

interface DropdownProps {
    title: string;
    name: string;
    options?: { label: string; value: string }[]; //List of checkboxes/radios
    type?: 'checkbox' | 'radio' | 'dateRange';
}

const Dropdown: FC<DropdownProps> = memo(
    ({ title, name, options, type = 'checkbox' }) => {
        const [open, setOpen] = useState(false);
        const handleOpenChange = (flag: boolean) => {
            setOpen(flag);
        };
        const disabledDate = (current: Dayjs) => {
            return current && current > dayjs().endOf('day');
        };
        const items: MenuProps['items'] = [
            {
                key: name,
                label:
                    type !== 'dateRange' ? (
                        <Form.Item name={name}>
                            {type === 'checkbox' && (
                                <Checkbox.Group options={options} />
                            )}
                            {type === 'radio' && (
                                <Radio.Group options={options} />
                            )}
                        </Form.Item>
                    ) : (
                        <>
                            <span>Từ</span>
                            <Form.Item name="min_time">
                                <DatePicker
                                    format="DD/MM/YYYY"
                                    placeholder="Chọn ngày"
                                    disabledDate={disabledDate}
                                />
                            </Form.Item>
                            <span>Đến</span>
                            <Form.Item name="max_time">
                                <DatePicker
                                    format="DD/MM/YYYY"
                                    placeholder="Chọn ngày"
                                    disabledDate={disabledDate}
                                />
                            </Form.Item>
                        </>
                    ),
            },
        ];
        return (
            <AntdDropdown
                menu={{ items }}
                onOpenChange={handleOpenChange}
                open={open}
                trigger={['click']}
            >
                <button onClick={e => e.preventDefault()}>
                    <span>{title}</span> <ArrowIcon />
                </button>
            </AntdDropdown>
        );
    }
);

Dropdown.displayName = 'Dropdown';
export default Dropdown;

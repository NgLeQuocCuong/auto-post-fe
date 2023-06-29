import { useState, useMemo, FC, memo, useCallback } from 'react';
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
    options?: { label: string; value: string | boolean | number }[]; //List of checkboxes/radios
    type?: 'checkbox' | 'radio' | 'dateRange';
}

const Dropdown: FC<DropdownProps> = memo(
    ({ title, name, options, type = 'checkbox' }) => {
        const [open, setOpen] = useState(false);
        const handleOpenChange = useCallback((flag: boolean) => {
            setOpen(flag);
        }, []);
        const disabledDate = useCallback((current: Dayjs) => {
            return current && current > dayjs().endOf('day');
        }, []);
        const getMenuLabel = useCallback(
            (type: string) => {
                switch (type) {
                    case 'checkbox':
                        return (
                            <Form.Item name={name}>
                                <Checkbox.Group options={options} />
                            </Form.Item>
                        );
                    case 'radio':
                        return (
                            <Form.Item name={name}>
                                <Radio.Group options={options} />
                            </Form.Item>
                        );
                    case 'dateRange':
                        return (
                            <>
                                <span>Từ</span>
                                <Form.Item name="minTime">
                                    <DatePicker
                                        format="DD/MM/YYYY"
                                        placeholder="Chọn ngày"
                                        disabledDate={disabledDate}
                                    />
                                </Form.Item>
                                <span>Đến</span>
                                <Form.Item name="maxTime">
                                    <DatePicker
                                        format="DD/MM/YYYY"
                                        placeholder="Chọn ngày"
                                        disabledDate={disabledDate}
                                    />
                                </Form.Item>
                            </>
                        );
                    default:
                        return <></>;
                }
            },
            [name, options, disabledDate]
        );
        const items: MenuProps['items'] = useMemo(
            () => [
                {
                    key: name,
                    label: getMenuLabel(type),
                },
            ],
            [name, type, getMenuLabel]
        );

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
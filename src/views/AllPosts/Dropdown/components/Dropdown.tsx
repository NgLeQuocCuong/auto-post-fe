import type { MenuProps } from 'antd';
import {
    Dropdown as AntdDropdown,
    Checkbox,
    DatePicker,
    Form,
    Radio,
} from 'antd';
import ArrowIcon from 'components/CommonInput/icons/ArrowIcon';
import dayjs, { Dayjs } from 'dayjs';
import { FC, memo, useCallback, useMemo, useState } from 'react';
import TagSelect from './TagSelect';
interface DropdownProps {
    title: string;
    name: string;
    options?: { label: string; value: string | boolean | number }[]; //List of checkboxes/radios
    type?: 'checkbox' | 'radio' | 'dateRange' | 'tagSelect';
    defaultValue?: (string | number)[];
    handleTagSelectChange?: (tags: string[]) => void;
}

const Dropdown: FC<DropdownProps> = memo(
    ({
        title,
        name,
        options,
        type = 'checkbox',
        defaultValue,
        handleTagSelectChange,
    }) => {
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
                            <Form.Item name={name} initialValue={undefined}>
                                <Checkbox.Group
                                    options={options}
                                    defaultValue={defaultValue}
                                />
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
                    case 'tagSelect':
                        return (
                            <Form.Item name={name}>
                                <TagSelect
                                    onChange={
                                        handleTagSelectChange ?? (() => {})
                                    }
                                />
                            </Form.Item>
                        );
                    default:
                        return <></>;
                }
            },
            [name, options, disabledDate, defaultValue, handleTagSelectChange]
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
                <button
                    onClick={e => {
                        e.preventDefault();
                        e.stopPropagation();
                    }}
                >
                    <span>{title}</span> <ArrowIcon />
                </button>
            </AntdDropdown>
        );
    }
);

Dropdown.displayName = 'Dropdown';
export default Dropdown;

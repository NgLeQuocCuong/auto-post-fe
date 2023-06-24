import React, { useState, FC, memo } from 'react';
import { Menu, Dropdown as AntdDropdown, Checkbox } from 'antd';
import ArrowIcon from '../icons/ArrowIcon';
import CustomDatePicker from 'views/AllPosts/CustomDatePicker';
interface DropdownCheckboxProps {
  title: string;
  options?: { label: string; value: string }[]; //List of checkboxes
  checkOnlyOne?: boolean;
  pickDate?: boolean;
}

const DropdownCheckbox: FC<DropdownCheckboxProps> = memo(({ title, options, checkOnlyOne, pickDate }) => {
    const [open, setOpen] = useState(false);
    const [checkedValues, setCheckedValues] = useState<string[]>([]);
    const handleOpenChange = (flag: boolean) => {
        setOpen(flag);
    };
    const menu = pickDate ? (
        <Menu>
            <Menu.Item key="start-date">
                <CustomDatePicker />
            </Menu.Item>
            <Menu.Item key="end-date">
                <p>Đến</p>
                <CustomDatePicker />
            </Menu.Item>
        </Menu>
    ) : (
        <Menu>
            {options?.map((option) => {
                const isChecked = checkedValues.includes(option.value);
                return (
                    <Menu.Item key={option.value}>
                    <Checkbox
                        checked={isChecked}
                        //Add unchecked option into list
                        onChange={() => {
                            let values = [...checkedValues];
                            if (checkOnlyOne) {
                                values = []; //Empty the list before adding new option
                            }
                            if (isChecked) {
                                values = values.filter((value) => value !== option.value);
                            } 
                            else {
                                values = [...values, option.value];
                            }
                            setCheckedValues(values);
                        }}
                    >
                    {option.label}
                    </Checkbox>
                    </Menu.Item>
                );
            })}
        </Menu>
    );
    return (
    <AntdDropdown
        overlay={menu}
        onOpenChange={handleOpenChange}
        open={open}
        trigger={['click']}
    >
        <button onClick={(e) => e.preventDefault()}>
        <span>{title}</span> <ArrowIcon />
        </button>
    </AntdDropdown>
    );
});

DropdownCheckbox.displayName = 'DropdownCheckbox';
export default DropdownCheckbox;
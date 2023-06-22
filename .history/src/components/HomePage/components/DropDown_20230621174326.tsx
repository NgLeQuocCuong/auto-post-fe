import {FC, memo} from 'react';
import '' from 'antd';

const Dropdown: FC = memo(
    () => {
    return (
        <div>
            <span>Nhãn bài viết: </span>
            <DropDown></DropDown>
        </div>
    )}
)

Dropdown.displayName = 'DropdownComponent';

export default Dropdown;
import {FC, memo} from 'react';
import { Dropdown } from 'antd';


const CheckList: FC = memo(
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
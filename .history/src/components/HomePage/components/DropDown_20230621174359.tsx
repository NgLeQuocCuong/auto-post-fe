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

CheckList.displayName = 'DropdownComponent';

export default CheckList;
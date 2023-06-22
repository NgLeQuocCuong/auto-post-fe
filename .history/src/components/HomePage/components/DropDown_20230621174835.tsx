import {FC, memo} from 'react';
import { Dropdown } from 'antd';


const CheckList: FC = memo(
    () => {
    return (
        <div>
            <span>Nhãn bài viết: </span>
            {/* <Dropdown></Dropdown> */}
        </div>
    )}
)

CheckList.displayName = 'DropdownComponent';

export default CheckList;
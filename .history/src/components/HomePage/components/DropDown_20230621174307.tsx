import {FC, memo} from 'react';

const Dropdown: FC = memo(
    () => {
    return (
        <div>
            <span>Nhãn bài viết: </span>
            <DropDow></DropDow>
        </div>
    )}
)

Dropdown.displayName = 'DropdownComponent';

export default Dropdown;
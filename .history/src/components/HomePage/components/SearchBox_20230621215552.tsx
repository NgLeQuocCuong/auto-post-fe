import {FC, memo} from 'react';
import '../style.scss';
import { Input } from 'antd';
import { SearchOutlined } from '@ant-design/icons';

const SearchBox: FC = memo(
    () => {
        return (
            <div>
            <Input
                placeholder="Search"
                prefix={<SearchOutlined />}
            />
            </div>
        )
    }
)

SearchBox.displayName = 'Search Component';

export default SearchBox;
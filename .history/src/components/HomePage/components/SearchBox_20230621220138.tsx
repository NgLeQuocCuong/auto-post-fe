import {FC, memo} from 'react';
import '../style.scss';
import { Input } from 'antd';
import { SearchOutlined } from '@ant-design/icons';

const SearchBox: FC = memo(
    () => {
        return (
            <div>
                <Input
                    className='custom-input'
                    placeholder="Tìm kiếm ..."
                    prefix={<SearchOutlined className='input-in' />}
                />
            </div>
        )
    }
)

SearchBox.displayName = 'Search Component';

export default SearchBox;
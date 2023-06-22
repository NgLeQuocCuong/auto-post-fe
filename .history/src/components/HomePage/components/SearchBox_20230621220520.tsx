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
                    prefix={<SearchOutlined style={{backgroundColor: '#686868'}}/>}
                />
            </div>
        )
    }
)

SearchBox.displayName = 'Search Component';

export default SearchBox;
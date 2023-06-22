import {FC, memo} from 'react';
import '../style.scss';
import { Input } from 'antd';
import { SearchOutlined } from '@ant-design/icons';

const SearchBox: FC = memo(
    () => {
        return (
            <div className='searchBox'>
                <Search className='searchBox__icon'></Search>
                <input type='text' placeholder='Tìm kiếm ...' className='searchBox__input'/>
            </div>
        )
    }
)

SearchBox.displayName = 'Search Component';

export default SearchBox;
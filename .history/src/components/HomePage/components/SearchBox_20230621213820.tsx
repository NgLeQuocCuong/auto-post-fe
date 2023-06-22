import {FC, memo} from 'react';
import '../style.scss';

const SearchBox: FC = memo(
    () => {
        return (
            <div className='searchBox'>
                <Search
                <input type='text' placeholder='Tìm kiếm ...' className='searchBox__input'/>
            </div>
        )
    }
)

SearchBox.displayName = 'Search Component';

export default SearchBox;
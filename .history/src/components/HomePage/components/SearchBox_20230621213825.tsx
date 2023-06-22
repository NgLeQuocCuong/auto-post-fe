import {FC, memo} from 'react';
import '../style.scss';
import Search from 'layouts/Web/icons/Search';

const SearchBox: FC = memo(
    () => {
        return (
            <div className='searchBox'>
                <Search></Search>
                <input type='text' placeholder='Tìm kiếm ...' className='searchBox__input'/>
            </div>
        )
    }
)

SearchBox.displayName = 'Search Component';

export default SearchBox;
import {FC, memo} from 'react';
import '../style.scss';
import Search from 'layouts/Web/icons/Search';

const SearchBox: FC = memo(
    () => {
        return (
            <div className='searchBox'>
                <Search className='searchBox__icon'></Search>
            </div>
        )
    }
)

SearchBox.displayName = 'Search Component';

export default SearchBox;
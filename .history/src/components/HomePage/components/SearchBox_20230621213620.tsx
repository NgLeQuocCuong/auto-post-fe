import {FC, memo} from 'react';


const SearchBox: FC = memo(
    () => {
        return (
            <div className='searchBox'>
                <input type='text' placeholder='Tìm kiếm ...' className='searchBox__input'/>
            </div>
        )
    }
)

SearchBox.displayName = 'Search Component';

export default SearchBox;
import {FC, memo} from 'react';

const Search: FC = memo(
    () => {
        return (
            <div className='searchBox'>
                <input type='text' placeH/>
            </div>
        )
    }
)

Search.displayName = 'Search Component';

export default Search;
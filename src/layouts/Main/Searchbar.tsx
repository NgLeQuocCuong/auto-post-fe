import routeConstants from 'route/routeConstant';
import { memo, useCallback, useState } from 'react';
import './index.scss';
import { useNavigate } from 'react-router-dom';
import SearchIcon from 'components/HomePage/icons/SearchIcon';

const Searchbar = memo(() => {
    const navigate = useNavigate();
    const [search, setSearch] = useState('');
    const handleChange = (event: any) => {
        setSearch(event.target.value);
    };
    const handleSearch = useCallback(
        async (event: any) => {
            if (event.key === 'Enter' && search.trim() !== '') {
                if (search.length) {
                    let url = routeConstants.ALLPOSTS + '?search=';
                    url = url + search;
                    navigate(url);
                }
            }
        },
        [navigate, search]
    );
    return (
        <div className="header__wrap--search">
            <SearchIcon className="header__wrap--icon"></SearchIcon>
            <input
                type="text"
                placeholder="Tìm kiếm..."
                onChange={handleChange}
                onKeyDown={handleSearch}
                value={search}
            />
        </div>
    );
});
Searchbar.displayName = 'Searchbar';
export default Searchbar;

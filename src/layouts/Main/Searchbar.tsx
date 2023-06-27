import routeConstants from 'route/routeConstant';
import { memo, useCallback, useState } from 'react';
import './index.scss';
import { useNavigate, useSearchParams, useLocation } from 'react-router-dom';
import SearchIcon from 'components/HomePage/icons/SearchIcon';

const Searchbar = memo(() => {
    const navigate = useNavigate();
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [searchParams, setSearchParams] = useSearchParams();
    const [Search, setSearch] = useState('');
    const location = useLocation();
    const currentRoute = location.pathname;
    const handleChange = (event: any) => {
        setSearch(event.target.value);
    };
    const handleSearch = useCallback(
        async (event: any) => {
            if (event.key === 'Enter' && Search.trim() !== '') {
                if (Search) {
                    if (currentRoute === routeConstants.ALL_POSTS) {
                        setSearchParams({ search: Search });
                    } else {
                        navigate(
                            routeConstants.ALL_POSTS + `?search=${Search}`
                        );
                    }
                }
            }
        },
        [Search, setSearchParams, navigate, currentRoute]
    );
    return (
        <div className="header__wrap--search">
            <SearchIcon className="header__wrap--icon"></SearchIcon>
            <input
                type="text"
                placeholder="Tìm kiếm..."
                onChange={handleChange}
                onKeyDown={handleSearch}
                value={Search}
            />
        </div>
    );
});
Searchbar.displayName = 'Searchbar';
export default Searchbar;

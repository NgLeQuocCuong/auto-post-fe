import routeConstants from 'route/routeConstant';
import { memo, useCallback, useState } from 'react';
import './index.scss';
import { useNavigate, useSearchParams, useLocation } from 'react-router-dom';
import SearchIcon from 'components/CommonInput/icons/SearchIcon';

const Searchbar = memo(() => {
    const navigate = useNavigate();

    const [searchParams, setSearchParams] = useSearchParams();
    const [searchs, setSearch] = useState('');
    const location = useLocation();
    const currentRoute = location.pathname;
    const handleChange = useCallback((event: any) => {
        setSearch(event.target.value);
    }, []);
    const handleSearch = useCallback(
        async (event: any) => {
            if (event.key === 'Enter' && searchs.trim() !== '') {
                if (searchs) {
                    if (currentRoute === routeConstants.ALL_POSTS) {
                        setSearchParams({ search: searchs });
                    } else {
                        navigate(
                            routeConstants.ALL_POSTS + `?search=${searchs}`
                        );
                    }
                }
            }
        },
        [searchs, setSearchParams, navigate, currentRoute]
    );
    return (
        <div className="header__wrap--search">
            <SearchIcon className="header__wrap--icon"></SearchIcon>
            <input
                type="text"
                placeholder="Tìm kiếm..."
                onChange={handleChange}
                onKeyDown={handleSearch}
                value={searchs}
            />
        </div>
    );
});
Searchbar.displayName = 'Searchbar';
export default Searchbar;

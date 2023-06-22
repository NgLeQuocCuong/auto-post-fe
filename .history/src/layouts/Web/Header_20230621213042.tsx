import SearchBox from 'components/HomePage/components/SearchBox';
import LogoSmall from 'layouts/Web/icons/LogoSmall';
import {FC, memo} from 'react';
import '../index.scss';

const Header: FC = memo(
    () => {
        return (
            <div className='wrapper__header'>
                <LogoSmall></LogoSmall>
                <SearchBox></SearchBox>
            </div>
        )
    }
)

Header.displayName = 'HeaderComponent';

export default Header;
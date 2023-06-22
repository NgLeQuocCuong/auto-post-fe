import SearchBox from 'components/HomePage/components/SearchBox';
import LogoSmall from 'layouts/Web/icons/LogoSmall';
import {FC, memo} from 'react';

const Header: FC = memo(
    () => {
        return (
            <div class>
                <LogoSmall></LogoSmall>
                <SearchBox></SearchBox>
            </div>
        )
    }
)

Header.displayName = 'HeaderComponent';

export default Header;
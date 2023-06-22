import LogoSmall from 'layouts/Web/icons/LogoSmall';
import {FC, memo} from 'react';

const Header: FC = memo(
    () => {
        return (
            <div>
                <LogoSmall></LogoSmall>
            </div>
        )
    }
)

Header.displayName = 'HeaderComponent';

export default Header;
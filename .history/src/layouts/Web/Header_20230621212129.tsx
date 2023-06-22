import {FC, PropsWithChildren, memo} from 'react';

const Header: FC<PropsWithChildren> = memo(
    ({children}) => {
        return (
            <div></div>
        )
    }
)

Header.displayName = 'HeaderComponent';

export default Header;
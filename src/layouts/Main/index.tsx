import { FC, PropsWithChildren, memo } from 'react';
import Header from './Header';

import { useUserProfile } from 'reducers/profile/function';

const MainLayout: FC<PropsWithChildren> = memo(({ children }) => {
    const user = useUserProfile();
    return (
        <div>
            <Header firstName={user.firstName ? user.firstName : 'default'} />
            {children}
        </div>
    );
});

MainLayout.displayName = 'MainLayout';

export default MainLayout;

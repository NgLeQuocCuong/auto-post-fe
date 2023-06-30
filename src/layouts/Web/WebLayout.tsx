import { FC, PropsWithChildren, memo } from 'react';
import Header from 'layouts/Web/Header';

import { useUserProfile } from 'reducers/profile/function';

const WebLayout: FC<PropsWithChildren> = memo(({ children }) => {
    const user = useUserProfile();
    return (
        <div>
            <Header firstName={user.firstName ? user.firstName : 'default'} />
            {children}
        </div>
    );
});

WebLayout.displayName = 'WebLayout';

export default WebLayout;

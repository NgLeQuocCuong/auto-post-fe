import { FC, PropsWithChildren, memo, useState, useEffect } from 'react';
import './index.scss';
import { useToken } from 'reducers/token/function';
import Header from './Header';
import routeConstants from 'route/routeConstant';
import { useNavigate } from 'react-router-dom';
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

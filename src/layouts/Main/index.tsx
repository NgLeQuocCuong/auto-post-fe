import { FC, PropsWithChildren, memo, useState, useEffect } from 'react';
import './index.scss';
import { useToken } from 'reducers/token/function';
import Header from './Header';
import routeConstants from 'route/routeConstant';
import { useNavigate } from 'react-router-dom';
import { useUserProfile } from 'reducers/profile/function';

interface Props {
    title?: string;
    subTitle?: string;
    firstName: string;
}

const MainLayout: FC<PropsWithChildren<Props>> = memo(({ children }) => {
    const navigate = useNavigate();
    const [authorized, setAuthorized] = useState(false);
    const [firstName, setFirstName] = useState('');
    const token = useToken();
    const user = useUserProfile();
    useEffect(() => {
        if (token) {
            setFirstName(user.firstName);
            setAuthorized(true);
        } else {
            setAuthorized(false);
            navigate(routeConstants.LOGIN);
        }
    }, [authorized, token, navigate, user.firstName]);
    if (!authorized) {
        return null;
    }
    return (
        <div>
            <Header firstName={firstName ? firstName : 'default'} />
            {children}
        </div>
    );
});

MainLayout.displayName = 'MainLayout';

export default MainLayout;

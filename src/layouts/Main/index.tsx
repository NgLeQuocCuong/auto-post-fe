import { FC, PropsWithChildren, memo, useState, useEffect } from 'react';
import './index.scss';
import userService from 'services/userService';
import { getToken } from 'reducers/token/function';
import Header from './Header';
import routeConstants from 'route/routeConstant';
import { useNavigate } from 'react-router-dom';

interface Props {
    title?: string;
    subTitle?: string;
    firstName: string;
}

const MainLayout: FC<PropsWithChildren<Props>> = memo(({ children }) => {
    const navigate = useNavigate();
    const [firstName, setFirstName] = useState('');
    useEffect(function effectFunction() {
        const token = getToken();
        if (token) {
            (async () => {
                const response = await userService.me();
                setFirstName(await response.data.firstName);
            })();
        } else {
            navigate(routeConstants.LOGIN);
        }
    });
    return (
        <div>
            <Header firstName={firstName} />
            {children}
        </div>
    );
});

MainLayout.displayName = 'MainLayout';

export default MainLayout;

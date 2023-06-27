import {
    FC,
    PropsWithChildren,
    memo,
    useState,
    useEffect,
    Dispatch,
    SetStateAction,
} from 'react';
import './index.scss';
import userService from 'services/userService';
import { useToken, setToken } from 'reducers/token/function';
import Header from './Header';
import routeConstants from 'route/routeConstant';
import { useNavigate } from 'react-router-dom';

interface Props {
    title?: string;
    subTitle?: string;
    firstName: string;
    setfirstName: Dispatch<SetStateAction<string>>;
}

const MainLayout: FC<PropsWithChildren<Props>> = memo(({ children }) => {
    const navigate = useNavigate();
    const [authorized, setAuthorized] = useState(false);
    const [firstName, setFirstName] = useState('');
    const token = useToken();
    useEffect(() => {
        if (token) {
            userService.me().then(res => {
                if (res.isSuccess) {
                    setAuthorized(true);
                    setFirstName(res.data.firstName);
                } else {
                    setToken('');
                    setAuthorized(false);
                    navigate(routeConstants.LOGIN);
                }
            });
        } else {
            setAuthorized(false);
            navigate(routeConstants.LOGIN);
        }
    }, [authorized, token, navigate]);
    if (!authorized) {
        return null;
    }
    return (
        <div>
            <Header firstName={firstName} setfirstName={setFirstName} />
            {children}
        </div>
    );
});

MainLayout.displayName = 'MainLayout';

export default MainLayout;

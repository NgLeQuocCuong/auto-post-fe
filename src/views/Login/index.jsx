import { memo, useCallback, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getToken, setToken } from 'reducers/token/function';
import userService from 'services/userService';
import Inner from 'views/Login/Inner';
import Message from 'components/Message';
import routeConstants from 'route/routeConstant';
const Wrapper = memo(() => {
    const navigate = useNavigate();
    useEffect(() => {
        const token = getToken();
        if (token) {
            //navigate(routeConstants.HOME_PAGE);
            navigate(routeConstants.HOME_PAGE);
        }
    }, [navigate]);

    const handleLogin = useCallback(
        async data => {
            const response = await userService.login(data);
            if (response.isSuccess) {
                setToken(response.data.accessToken);
                Message.sendSuccess('Đăng nhập thành công.');
                navigate(routeConstants.HOME_PAGE);
            }
            return response;
        },
        [navigate]
    );

    return <Inner handleLogin={handleLogin} />;
});
Wrapper.displayName = 'Login';

const Login = Wrapper;

export default Login;

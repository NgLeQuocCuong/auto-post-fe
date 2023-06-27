import { memo, useCallback, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getToken, setToken } from 'reducers/token/function';
import userService from 'services/userService';
import Inner from 'views/Login/Inner';
import Popup from 'components/Popup';
const Wrapper = memo(() => {
    const navigate = useNavigate();
    useEffect(() => {
        const token = getToken();
        if (token) {
            //Navigate to main page
        }
    }, [navigate]);

    const handleLogin = useCallback(async data => {
        //TODO: Implement login API
        const response = await userService.login(data);
        if (response.isSuccess) {
            // set token
            setToken(response.data.accessToken);
            Popup.sendSuccess(
                'Đăng nhập thành công.',
                `Chào mừng ${data.email} đến với AutoPost!`
            );
        }
        return response;
    }, []);

    return <Inner handleLogin={handleLogin} />;
});
Wrapper.displayName = 'Login';

const Login = Wrapper;

export default Login;

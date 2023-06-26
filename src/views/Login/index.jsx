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
            // navigate to main page
            navigate('/posts');
        }
    }, [navigate]);

    const handleLogin = useCallback(async data => {
        const response = await userService.login(data);
        if (response.isSuccess) {
            Popup.popupSuccess('Đăng nhập thành công', `Chào mừng ${data.email} đến với AutoPost!`);
            setToken(response.data.accessToken);
        }
        return response;
    }, []);

    return <Inner handleLogin={handleLogin} />;
});
Wrapper.displayName = 'Login';

const Login = Wrapper;

export default Login;
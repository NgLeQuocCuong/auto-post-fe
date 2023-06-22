import { memo, useCallback, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getToken } from 'reducers/token/function';
import userService from 'services/userService';
import Inner from 'views/Register/Inner';

const Wrapper = memo(() => {
    const navigate = useNavigate();
    useEffect(() => {
        const token = getToken();
        if (token) {
            // navigate to main page
        }
    }, [navigate]);

    const handleRegister = useCallback(async data => {
        const response = await userService.login(data);

        if (response.isSuccess) {
            // set token
        }

        return response;
    }, []);

    return <Inner handleLogin={handleRegister} />;
});
Wrapper.displayName = 'Register';

const Register = Wrapper;

export default Register;

import { memo, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import userService from 'services/userService';
import Inner from 'views/Register/Inner';

const Wrapper = memo(() => {
    const navigate = useNavigate();
    const handleRegister = useCallback(
        async data => {
            //TODO: Implement register API
            const response = await userService.register(data);
            if (response.isSuccess) {
                // navigate to login page
                navigate('/login');
            }
            return response;
        },
        [navigate]
    );
    return <Inner handleRegister={handleRegister} />;
});
Wrapper.displayName = 'Register';

const Register = Wrapper;

export default Register;

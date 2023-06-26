import Popup from 'components/Popup';
import { memo, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import userService from 'services/userService';
import Inner from 'views/Register/Inner';

const Wrapper = memo(() => {
    const navigate = useNavigate();
    const handleRegister = useCallback(async data => {
        const response = await userService.register(data);
        if (response.isSuccess) {
            Popup.popupSuccess('Đăng ký thành công!');
            navigate('/login');
        }
        return response;
    }, [navigate]);

    return <Inner handleRegister={handleRegister} />;
});
Wrapper.displayName = 'Register';

const Register = Wrapper;

export default Register;

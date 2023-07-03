import Message from 'components/Message';
import { memo, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import routeConstants from 'route/routeConstant';
import userService from 'services/userService';
import Inner from 'views/Register/Inner';
const Wrapper = memo(() => {
    const navigate = useNavigate();
    const handleRegister = useCallback(
        async data => {
            const response = await userService.register(data);
            if (response.isSuccess) {
                Message.sendSuccess(
                    'Đăng ký thành công. Vui lòng xác thực email.'
                );
                navigate(routeConstants.VERIFY_EMAIL);
                localStorage.setItem('verifyEmail', data.email);
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

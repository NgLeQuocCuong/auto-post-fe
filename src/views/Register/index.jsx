import { memo, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import userService from 'services/userService';
import Inner from 'views/Register/Inner';
import routeConstants from 'route/routeConstant';
import Message from 'components/Message';
const Wrapper = memo(() => {
    const navigate = useNavigate();
    const handleRegister = useCallback(
        async data => {
            const response = await userService.register(data);
            if (response.isSuccess) {
                Message.sendSuccess(
                    'Đăng ký thành công. Vui lòng đăng nhập để tiếp tục.'
                );
                navigate(routeConstants.LOGIN);
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

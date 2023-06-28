import routeConstants from 'route/routeConstant';
import { memo, useCallback, useEffect } from 'react';
import userService from 'services/userService';
import Message from 'components/Message';
import { useNavigate } from 'react-router-dom';
import { setToken } from 'reducers/token/function';

const Logout = memo(() => {
    const navigate = useNavigate();
    const handleLogout = useCallback(async () => {
        const response = await userService.logout();
        if (response.isSuccess) {
            Message.sendSuccess('Đăng xuất thành công!', 2);
            setToken('');
            navigate(routeConstants.LOGIN);
        } else {
            setToken('');
            navigate(routeConstants.LOGIN);
        }
        return response;
    }, [navigate]);
    useEffect(() => {
        handleLogout();
    }, [handleLogout]);
    return <div>Logging out...</div>;
});
Logout.displayName = 'Logout';
export default Logout;

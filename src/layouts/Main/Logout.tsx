import routeConstants from 'route/routeConstant';
import { memo, useCallback } from 'react';
import userService from 'services/userService';
import './index.scss';
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
        }
        return response;
    }, [navigate]);
    return (
        <p className="Drop-item" onClick={handleLogout}>
            <p id="logout">Đăng xuất</p>
        </p>
    );
});
Logout.displayName = 'Logout';
export default Logout;

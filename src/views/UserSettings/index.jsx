import { memo, useCallback, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getToken } from 'reducers/token/function';
import userService from 'services/userService';
import Inner from 'views/UserSettings/inner';
import Message from 'components/Message';

const Wrapper = memo(() => {
    const navigate = useNavigate();
    useEffect(() => {
        const token = getToken();
        if (token) {
            // navigate to main page
        }
    }, [navigate]);

    const handleUnlinkFacebook = useCallback(async data => {
        const response = await userService.post(data);

        if (response.isSuccess) {
            ///
        }

        return response;
    }, []);

    const handleLogout = useCallback(async data => {
        const response = await userService.post(data);

        if (response.isSuccess) {
            // Logout
        }

        return Message.sendSuccess('Đăng xuất', 2);
    }, []);

    return (
        <Inner
            handleUnlinkFacebook={handleUnlinkFacebook}
            handleLogout={handleLogout}
        />
    );
});
Wrapper.displayName = 'User Settings';

const UserSettings = Wrapper;

export default UserSettings;

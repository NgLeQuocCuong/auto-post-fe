import { memo, useCallback, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getToken } from 'reducers/token/function';

import Inner from 'views/UserSettings/inner';
import Message from 'components/Message';

const Wrapper = memo(() => {
    const navigate = useNavigate();
    useEffect(() => {
        const token = getToken();
        if (token) {
            // navigate to the main page
        }
    }, [navigate]);

    const [facebookLinked, setFacebookLinked] = useState(true);
    const [zaloLinked, setZaloLinked] = useState(false);

    const handleToggleFacebookLink = useCallback(
        async data => {
            if (facebookLinked) {
                // Handle unlink Facebook
                // const response = await userService.unlinkFacebook();
                const response = { isSuccess: true }; // Mock response
                if (response.isSuccess) {
                    setFacebookLinked(false);
                    // Perform other actions after successful Facebook unlink
                }
            } else {
                // Handle link Facebook
                // const response = await userService.linkFacebook();
                const response = { isSuccess: true }; // Mock response
                if (response.isSuccess) {
                    setFacebookLinked(true);
                    // Perform other actions after successful Facebook link
                }
            }
        },
        [facebookLinked]
    );

    const handleToggleZaloLink = useCallback(
        async data => {
            if (zaloLinked) {
                // Handle unlink Zalo
                // const response = await userService.unlinkZalo();
                const response = { isSuccess: true }; // Mock response
                if (response.isSuccess) {
                    setZaloLinked(false);
                    // Perform other actions after successful Zalo unlink
                }
            } else {
                // Handle link Zalo
                // const response = await userService.linkZalo();
                const response = { isSuccess: true }; // Mock response
                if (response.isSuccess) {
                    setZaloLinked(true);
                    // Perform other actions after successful Zalo link
                }
            }
        },
        [zaloLinked]
    );

    const handleLogout = useCallback(async data => {
        // const response = await userService.logout();
        const response = { isSuccess: true }; // Mock response
        if (response.isSuccess) {
            return Message.sendSuccess('Đang đăng xuất', 2);
        } else {
            return Message.sendError('Có lỗi xảy ra', 2);
        }
    }, []);

    return (
        <Inner
            facebookLinked={facebookLinked}
            zaloLinked={zaloLinked}
            handleToggleFacebookLink={handleToggleFacebookLink}
            handleToggleZaloLink={handleToggleZaloLink}
            handleLogout={handleLogout}
        />
    );
});

Wrapper.displayName = 'User Settings';

const UserSettings = Wrapper;

export default UserSettings;

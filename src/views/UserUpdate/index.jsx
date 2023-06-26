import { memo, useCallback, useEffect, useState } from 'react';
import Inner from 'views/UserUpdate/Inner';
import { useNavigate } from 'react-router-dom';
import { getToken } from 'reducers/token/function';
import userService from 'services/userService';
import routeConstants from 'route/routeConstant';
import Message from 'components/Message';

const Wrapper = memo(() => {
    const navigate = useNavigate();
    const [userInfo, setUserInfo] = useState();
    useEffect(() => {
        const token = getToken();
        if (token) {
            (async () => {
                const response = await userService.me();
                if (await response.isSuccess) {
                    const returnInfo = {
                        first_name: response.data.firstName,
                        last_name: response.data.lastName,
                        email: response.data.email,
                        username: response.data.username,
                    };
                    setUserInfo(returnInfo);
                }
            })();
        }
    }, []);

    const handleUserUpdate = useCallback(
        async data => {
            const response = await userService.updateUser(data);
            if (response.isSuccess) {
                Message.sendSuccess('Cập nhật thành công!', 2);
                navigate(routeConstants.USER_SETTINGS);
            } else {
                Message.sendError('Có lỗi xảy ra', 2);
            }
            return response;
        },
        [navigate]
    );

    return <Inner handleUserUpdate={handleUserUpdate} userInfo={userInfo} />;
});

Wrapper.displayName = 'User Update';

const UserUpdate = Wrapper;

export default UserUpdate;

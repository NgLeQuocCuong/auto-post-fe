import { memo, useCallback } from 'react';
import Inner from 'views/UserUpdate/Inner';
import { useNavigate } from 'react-router-dom';
import userService from 'services/userService';
import routeConstants from 'route/routeConstant';
import Message from 'components/Message';
import { setUserProfile, useUserProfile } from 'reducers/profile/function';

const Wrapper = memo(() => {
    const navigate = useNavigate();
    const userProfile = useUserProfile();
    const handleUserUpdate = useCallback(
        async data => {
            const response = await userService.updateUser(data);
            if (response.isSuccess) {
                setUserProfile(data);
                Message.sendSuccess('Cập nhật thành công!', 2);
                navigate(routeConstants.USER_SETTINGS);
            } else {
                Message.sendError('Có lỗi xảy ra', 2);
            }
            return response;
        },
        [navigate]
    );

    return (
        <Inner handleUserUpdate={handleUserUpdate} userProfile={userProfile} />
    );
});

Wrapper.displayName = 'User Update';

const UserUpdate = Wrapper;

export default UserUpdate;

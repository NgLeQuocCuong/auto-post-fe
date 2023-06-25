import { memo, useCallback } from 'react';
import Inner from 'views/UserUpdate/inner';
import { useNavigate } from 'react-router-dom';
import routeConstants from 'route/routeConstant';
import Message from 'components/Message';

const Wrapper = memo(() => {
    const navigate = useNavigate();
    const handleUserUpdate = useCallback(
        async data => {
            // const response = await userService.userUpdate(data);
            const response = { isSuccess: false }; // Mock response
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

    return <Inner handleUserUpdate={handleUserUpdate} />;
});

Wrapper.displayName = 'User Update';

const UserUpdate = Wrapper;

export default UserUpdate;

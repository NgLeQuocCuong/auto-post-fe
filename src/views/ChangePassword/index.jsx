import { memo, useCallback } from 'react';
import userService from 'services/userService';
import { useNavigate } from 'react-router-dom';
import routeConstants from 'route/routeConstant';
import Inner from 'views/ChangePassword/Inner';
import Message from 'components/Message';

const Wrapper = memo(() => {
    const navigate = useNavigate();
    const handleChangePassword = useCallback(
        async data => {
            const response = await userService.changePassword(data);
            if (response.isSuccess) {
                Message.sendSuccess('Thay đổi mật khẩu thành công!', 2);
                navigate(routeConstants.USER_SETTINGS);
            }
            return response;
        },
        [navigate]
    );

    return <Inner handleChangePassword={handleChangePassword} />;
});
Wrapper.displayName = 'Change Password';

const ChangePassword = Wrapper;

export default ChangePassword;

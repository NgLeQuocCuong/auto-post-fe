import { memo, useCallback } from 'react';
import userService from 'services/userService';
import { useNavigate } from 'react-router-dom';
import { getToken } from 'reducers/token/function';
import routeConstants from 'route/routeConstant';
import Inner from 'views/ChangePassword/inner';
import Message from 'components/Message';

const Wrapper = memo(() => {
    const navigate = useNavigate();
    const handleChangePassword = useCallback(
        async data => {
            const config = {
                headers: {
                    Authorization: 'Bearer ' + getToken(),
                },
            };
            const response = await userService.changePassword(data, config);
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

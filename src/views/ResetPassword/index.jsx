import { memo, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import Inner from 'views/ResetPassword/Inner';
import routeConstants from 'route/routeConstant';
import Message from 'components/Message';

const Wrapper = memo(() => {
    const navigate = useNavigate();
    const handleResetPassword = useCallback(
        async data => {
            //const response = await userService.resetPassword(data);
            const response = { isSuccess: true };
            if (response.isSuccess) {
                Message.sendSuccess('Đặt mật khẩu thành công!', 2);
                navigate(routeConstants.RESET_PASSWORD);
            } else {
                Message.sendError('Có lỗi xảy ra', 2);
            }
            return response;
        },
        [navigate]
    );

    return <Inner handleResetPassword={handleResetPassword} />;
});
Wrapper.displayName = 'Reset Password';

const ResetPassword = Wrapper;

export default ResetPassword;

import { memo, useCallback } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import routeConstants from 'route/routeConstant';
import userService from 'services/userService';
import Inner from 'views/ResetPassword/Inner';
import Message from 'components/Message';
const Wrapper = memo(() => {
    const { slug } = useParams();
    const navigate = useNavigate();
    const handleResetPassword = useCallback(
        async data => {
            const newData = {
                token: slug,
                password: data.password,
            };
            const response = await userService.resetPassword(newData);
            if (response.isSuccess) {
                Message.sendSuccess('Đổi mật khẩu thành công.');
                navigate(routeConstants.LOGIN);
            }
            return response;
        },
        [slug, navigate]
    );
    return <Inner handleResetPassword={handleResetPassword} />;
});
Wrapper.displayName = 'Reset Password';

const ResetPassword = Wrapper;

export default ResetPassword;

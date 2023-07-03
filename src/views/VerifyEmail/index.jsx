import Message from 'components/Message';
import { memo, useCallback, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import routeConstants from 'route/routeConstant';
import userService from 'services/userService';
import Inner from 'views/VerifyEmail/Inner';

const Wrapper = memo(() => {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const handleCheckVerifyEmail = useCallback(
        async data => {
            setLoading(true);
            const response = await userService.checkVerifyEmail(data);
            setLoading(false);
            if (response.isSuccess) {
                Message.sendSuccess(
                    'Xác thực email thành công. Vui lòng đăng nhập để tiếp tục.'
                );
                navigate(routeConstants.LOGIN);
            }
        },
        [navigate]
    );
    const handleSendVerifyEmail = useCallback(() => {
        const response = userService.sendVerifyEmail({
            email: localStorage.getItem('verifyEmail'),
        });
        if (response.isSuccess) {
            Message.sendSuccess('Gửi email xác thực thành công.');
        }
        return;
    }, []);
    //Send verify email on first load
    useEffect(() => {
        const response = userService.sendVerifyEmail({
            email: localStorage.getItem('verifyEmail'),
        });
        if (response.isSuccess) {
            Message.sendSuccess('Gửi email xác thực thành công.');
        }
    }, []);

    return (
        <Inner
            handleCheckVerifyEmail={handleCheckVerifyEmail}
            handleSendVerifyEmail={handleSendVerifyEmail}
            onLoading={loading}
        />
    );
});
Wrapper.displayName = 'Verify Email';

const VerifyEmail = Wrapper;

export default VerifyEmail;

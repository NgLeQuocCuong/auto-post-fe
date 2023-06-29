import Message from 'components/Message';
import { memo, useCallback } from 'react';
import userService from 'services/userService';
import Inner from 'views/ForgotPassword/Inner';

const Wrapper = memo(() => {
    const handleForgotPassword = useCallback(async data => {
        const response = await userService.forgotPass(data);
        if (response.isSuccess) {
            Message.sendSuccess('Vui lòng kiểm tra Email của bạn!');
        } else {
            Message.sendSuccess('Đã có lỗi xãy ra!');
        }
        return response;
    }, []);
    return <Inner handleForgotPassword={handleForgotPassword} />;
});
Wrapper.displayName = 'Forgot Password';

const ForgotPassword = Wrapper;

export default ForgotPassword;

import Message from 'components/Message';
import { memo, useCallback, useState } from 'react';
import userService from 'services/userService';
import Inner from 'views/ForgotPassword/Inner';

const Wrapper = memo(() => {
    const [loading, setLoading] = useState(false);

    const handleForgotPassword = useCallback(async data => {
        setLoading(true);
        const response = await userService.forgotPassword(data);
        setLoading(false);
        if (response.isSuccess) {
            Message.sendSuccess('Vui lòng kiểm tra email của bạn.');
        }
        return response;
    }, []);
    return (
        <Inner handleForgotPassword={handleForgotPassword} loading={loading} />
    );
});
Wrapper.displayName = 'Forgot Password';

const ForgotPassword = Wrapper;

export default ForgotPassword;

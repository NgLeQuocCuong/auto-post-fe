import { memo, useCallback } from 'react';
import { useParams } from 'react-router-dom';
import userService from 'services/userService';
import Inner from 'views/ResetPassword/Inner';

const Wrapper = memo(() => {
    const { slug } = useParams();
    const handleResetPassword = useCallback(
        async data => {
            const newData = {
                token: slug,
                password: data.newPassword,
            };
            const response = await userService.resetPassword(newData);
            return response;
        },
        [slug]
    );
    return <Inner handleResetPassword={handleResetPassword} />;
});
Wrapper.displayName = 'Reset Password';

const ResetPassword = Wrapper;

export default ResetPassword;

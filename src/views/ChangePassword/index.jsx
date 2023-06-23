import { memo, useCallback } from 'react';
import Inner from 'views/ChangePassword/inner';
import Message from 'components/Message';

const Wrapper = memo(() => {
    const handleChangePassword = useCallback(async data => {
        // const response = await userService.changePassword(data);
        const response = { isSuccess: false }; // Mock response
        if (response.isSuccess) {
            return Message.sendSuccess('Thay đổi mật khẩu thành công!', 2);
        } else {
            return Message.sendError('Có lỗi xảy ra', 2);
        }
    }, []);

    return <Inner handleChangePassword={handleChangePassword} />;
});
Wrapper.displayName = 'Change Password';

const ChangePassword = Wrapper;

export default ChangePassword;

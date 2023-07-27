import Message from 'components/Message';
import { memo, useCallback, useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import routeConstants from 'route/routeConstant';
import userService from 'services/userService';
import Inner from 'views/VerifyAccount/Inner';

const Wrapper = memo(() => {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const { token } = useParams();
    const handleVerifyAccount = useCallback(
        async data => {
            setLoading(true);
            const newData = {
                token: token,
                password: data.password,
            };
            const response = await userService.verifyAccount(newData);
            setLoading(false);
            if (response.isSuccess) {
                Message.sendSuccess(
                    'Xác thực tài khoản thành công. Vui lòng đăng nhập để tiếp tục.'
                );
                navigate(routeConstants.LOGIN);
            }
        },
        [navigate, token]
    );

    return (
        <Inner handleVerifyAccount={handleVerifyAccount} loading={loading} />
    );
});
Wrapper.displayName = 'Verify Account';

const VerifyAccount = Wrapper;

export default VerifyAccount;

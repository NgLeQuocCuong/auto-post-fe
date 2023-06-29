import { memo, useCallback, useState } from 'react';
import userService from 'services/userService';
import Inner from 'views/UserSettings/Inner';
import Message from 'components/Message';
import { setUserProfile, useUserProfile } from 'reducers/profile/function';
import { setFacebookToken } from 'reducers/token/function';

const Wrapper = memo(() => {
    const [userInfo, setUserInfo] = useState(useUserProfile());
    const [facebookProcessing, setFacebookProcessing] = useState(false);
    const [zaloProcessing, setZaloProcessing] = useState(false);
    const handleLinkFacebook = useCallback(
        async data => {
            setFacebookProcessing(true);
            if (data.accessToken) {
                const response = await userService.linkFacebook({
                    token: data.accessToken,
                });
                if (response.isSuccess) {
                    setUserInfo(prevState => ({
                        ...prevState,
                        facebookStatus: true,
                    }));
                    setUserProfile(userInfo);
                    setFacebookToken(data.accessToken);
                    Message.sendSuccess('Liên kết Facebook thành công!');
                }
                setFacebookProcessing(false);
                return response;
            } else {
                Message.sendError('Liên kết Facebook không thành công.');
            }
            setFacebookProcessing(false);
        },
        [userInfo]
    );

    const handleUnlinkFacebook = useCallback(async () => {
        setFacebookProcessing(true);
        const response = await userService.unlinkFacebook();
        if (response.isSuccess) {
            setUserInfo(prevState => ({
                ...prevState,
                facebookStatus: false,
            }));
            setUserProfile(userInfo);
            setFacebookToken('');
            Message.sendInfo('Hủy liên kết Facebook thành công!');
        }
        setFacebookProcessing(false);
        return response;
    }, [userInfo]);

    const handleLinkZalo = useCallback(
        async data => {
            setZaloProcessing(true);
            // const response = await userService.linkZalo({oathCode: data.oathCode});
            const response = { isSuccess: false }; // Mock response
            if (response.isSuccess) {
                setUserInfo(prevState => ({
                    ...prevState,
                    zaloStatus: true,
                }));
                setUserProfile(userInfo);
                // setZaloToken(data.oathCode);
                Message.sendSuccess('Liên kết Zalo thành công!');
            } else {
                Message.sendWarning(
                    'Chức năng đang phát triển. Vui lòng thử lại sau.'
                );
            }
            setZaloProcessing(false);
            return response;
        },
        [userInfo]
    );

    const handleUnlinkZalo = useCallback(async () => {
        setZaloProcessing(true);
        const response = await userService.unlinkZalo();
        if (response.isSuccess) {
            setUserInfo(prevState => ({
                ...prevState,
                zaloStatus: false,
            }));
            setUserProfile(userInfo);
            // setZaloToken('');
            Message.sendInfo('Hủy liên kết Zalo thành công!');
        }
        setZaloProcessing(false);
        return response;
    }, [userInfo]);

    return (
        <Inner
            userInfo={userInfo}
            handleLinkFacebook={handleLinkFacebook}
            handleUnlinkFacebook={handleUnlinkFacebook}
            facebookProcessing={facebookProcessing}
            handleLinkZalo={handleLinkZalo}
            handleUnlinkZalo={handleUnlinkZalo}
            zaloProcessing={zaloProcessing}
        />
    );
});

Wrapper.displayName = 'User Settings';

const UserSettings = Wrapper;

export default UserSettings;

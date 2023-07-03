import Message from 'components/Message';
import { memo, useCallback, useState, useEffect } from 'react';
import { setUserProfile, useUserProfile } from 'reducers/profile/function';
import { setFacebookToken } from 'reducers/token/function';
import userService from 'services/userService';
import Inner from 'views/UserSettings/Inner';

const Wrapper = memo(() => {
    const [userInfo, setUserInfo] = useState(useUserProfile());
    const [facebookProcessing, setFacebookProcessing] = useState(false);
    const [LinkedinProcessing, setLinkedinProcessing] = useState(false);

    const FACEBOOK_OAUTH_CLIENT_ID = '283990164019980';
    const FACEBOOK_PERMISSIONS =
        'public_profile,publish_to_groups,pages_manage_metadata,pages_manage_posts,pages_manage_engagement,pages_show_list';
    //const facebookGetFields = 'name,email,picture,groups.limit(100)';
    const initFacebookSdk = useCallback(() => {
        // wait for facebook sdk to initialize before starting the react app
        window.fbAsyncInit = function () {
            window.FB.init({
                appId: FACEBOOK_OAUTH_CLIENT_ID,
                cookie: true,
                xfbml: true,
                version: 'v17.0',
            });
        };

        // load facebook sdk script
        (function (d, s, id) {
            var js,
                fjs = d.getElementsByTagName(s)[0];
            if (d.getElementById(id)) {
                return;
            }
            js = d.createElement(s);
            js.id = id;
            js.src = 'https://connect.facebook.net/en_US/sdk.js';
            fjs.parentNode.insertBefore(js, fjs);
        })(document, 'script', 'facebook-jssdk');
    }, [FACEBOOK_OAUTH_CLIENT_ID]);

    useEffect(() => {
        initFacebookSdk();
    }, [initFacebookSdk]);

    const saveTokenFacebook = useCallback(
        async responseFB => {
            if (responseFB.status === 'connected') {
                const accessToken = responseFB.authResponse.accessToken;
                const response = await userService.linkFacebook({
                    token: accessToken,
                });
                if (response.isSuccess) {
                    setUserInfo(prevState => ({
                        ...prevState,
                        facebookStatus: true,
                    }));
                    setUserProfile(userInfo);
                    setFacebookToken(accessToken);
                    Message.sendSuccess('Liên kết Facebook thành công!');
                }
                setFacebookProcessing(false);
                return response;
            } else {
                Message.sendError('Liên kết Facebook không thành công!');
                setFacebookProcessing(false);
            }
        },
        [userInfo]
    );

    const handleLinkFacebook = useCallback(async () => {
        setFacebookProcessing(true);
        await window.FB.login(
            responseFB => {
                saveTokenFacebook(responseFB);
            },
            { scope: FACEBOOK_PERMISSIONS }
        );
    }, [saveTokenFacebook]);

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

    const handleLinkLinkedin = useCallback(
        async data => {
            setLinkedinProcessing(true);
            // const response = await userService.linkLinkedin({oathCode: data.oathCode});
            const response = { ...data, isSuccess: false }; // Mock response
            if (response.isSuccess) {
                setUserInfo(prevState => ({
                    ...prevState,
                    LinkedinStatus: true,
                }));
                setUserProfile(userInfo);
                // setLinkedinToken(data.oathCode);
                Message.sendSuccess('Liên kết Linkedin thành công!');
            } else {
                Message.sendWarning(
                    'Chức năng đang phát triển. Vui lòng thử lại sau.'
                );
            }
            setLinkedinProcessing(false);
            return response;
        },
        [userInfo]
    );

    const handleUnlinkLinkedin = useCallback(async () => {
        setLinkedinProcessing(true);
        const response = await userService.unlinkLinkedin();
        if (response.isSuccess) {
            setUserInfo(prevState => ({
                ...prevState,
                LinkedinStatus: false,
            }));
            setUserProfile(userInfo);
            // setLinkedinToken('');
            Message.sendInfo('Hủy liên kết Linkedin thành công!');
        }
        setLinkedinProcessing(false);
        return response;
    }, [userInfo]);

    return (
        <Inner
            userInfo={userInfo}
            handleLinkFacebook={handleLinkFacebook}
            handleUnlinkFacebook={handleUnlinkFacebook}
            facebookProcessing={facebookProcessing}
            handleLinkLinkedin={handleLinkLinkedin}
            handleUnlinkLinkedin={handleUnlinkLinkedin}
            LinkedinProcessing={LinkedinProcessing}
        />
    );
});

Wrapper.displayName = 'User Settings';

const UserSettings = Wrapper;

export default UserSettings;

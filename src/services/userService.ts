import ApiBase from 'modules/apis/apiBase';

const _USER_PATH = '/users';
const _OAUTH_PATH = '/oauth';

class UserService extends ApiBase {
    me = () => {
        const url = `${_USER_PATH}/get/me`;
        return this.get(url);
    };

    login = (requestBody: any) => {
        const url = `${_OAUTH_PATH}/login`;
        const res = this.post(url, requestBody);
        return res;
    };
    linkFacebook = (requestBody: { token: string }) => {
        const url = `${_USER_PATH}/connect/facebook`;
        const res = this.post(url, requestBody);
        return res;
    };
    unlinkFacebook = () => {
        const url = `${_USER_PATH}/disconnect/facebook`;
        const res = this.put(url);
        return res;
    };
    linkZalo = (requestBody: { oathCode: string }) => {
        const url = `${_USER_PATH}/connect/zalo`;
        const res = this.post(url, requestBody);
        return res;
    };
    unlinkZalo = () => {
        const url = `${_USER_PATH}/disconnect/zalo`;
        const res = this.put(url);
        return res;
    };
}

const userService = new UserService();

export default userService;

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
    changePassword = (requestBody: {
        current_password: string;
        new_password: string;
    }) => {
        const url = `${_USER_PATH}/update/password`;
        const res = this.post(url, requestBody);
        return res;
    };
    getGroupUID = () => {
        const url = `${_USER_PATH}/get/facebook/page_id`;
        const res = this.get(url);
        return res;
    };
    upImg = (requestBody: any, options: any) => {
        const url = '/images/upload';
        const res = this.post(url, requestBody, options);
        return res;
    };
}

const userService = new UserService();

export default userService;

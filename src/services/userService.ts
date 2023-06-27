import ApiBase from 'modules/apis/apiBase';

const _USER_PATH = '/users';
const _OAUTH_PATH = '/oauth';

class UserService extends ApiBase {
    me = () => {
        const url = `${_USER_PATH}/get/me`;
        return this.get(url);
    };

    login = (requestBody: any) => {
        const url = `${_USER_PATH}/login`;
        const res = this.post(url, requestBody);
        return res;
    };

    register = (requestBody: any) => {
        const url = `${_USER_PATH}/register`;
        const res = this.post(url, requestBody);
        return res;
    };
}

const userService = new UserService();

export default userService;

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
        const res = this.post(url);
        return res;
    };
    getdetails = (uid: any) => {
        const url = `${_USER_PATH}/${uid}/details`;
        return this.post(url);
    };
}

const userService = new UserService();

export default userService;

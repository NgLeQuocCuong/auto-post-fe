import ApiBase from 'modules/apis/apiBase';

const _USER_PATH = '/users';
const _OAUTH_PATH = '/oauth';
const _POST_PATH = '/posts';

class UserService extends ApiBase {
    me = () => {
        const url = `${_USER_PATH}/get/me`;
        return this.get(url);
    };

    login = (requestbody: JSON) => {
        const url = `${_USER_PATH}/login`;
        const res = this.post(url, requestbody);
        return res;
    };
    getdetails = (uid: string) => {
        const url = `${_POST_PATH}/${uid}/detail`;
        return this.get(url);
    };
    remove = (uid: string) => {
        const url = `${_POST_PATH}/${uid}/remove`;
        return this.post(url, uid);
    };
}

const userService = new UserService();

export default userService;

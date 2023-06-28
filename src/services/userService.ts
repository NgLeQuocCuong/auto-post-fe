import ApiBase from 'modules/apis/apiBase';

const _USER_PATH = '/users';
const _OAUTH_PATH = '/oauth';
const _POST_PATH = '/posts';
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

    filterPosts = (params: any) => {
        const url = `${_POST_PATH}/matrix`;
        const res = this.get(url, {
            params: params,
        });
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
}

const userService = new UserService();

export default userService;

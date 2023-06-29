import ApiBase from 'modules/apis/apiBase';

const _USER_PATH = '/users';
const _OAUTH_PATH = '/oauth';
const _POST_PATH = '/posts';

class UserService extends ApiBase {
    me = () => {
        const url = `${_USER_PATH}/get/me`;
        return this.get(url);
    };

    login = (requestBody: { email: string; password: string }) => {
        const url = `${_USER_PATH}/login`;
        const res = this.post(url, requestBody);
        return res;
    };

    forgotPass = (requestBody: any) => {
        const url = `${_USER_PATH}/forgot-password`;
        const res = this.post(url, requestBody);
        return res;
    };

    resetPass = (requestBody: { email: string }) => {
        const url = `${_USER_PATH}/reset-password`;
        const res = this.post(url, requestBody);
        return res;
    };

    register = (requestBody: {
        first_name: string;
        last_name: string;
        email: string;
        username: string;
        password: string;
    }) => {
        const url = `${_USER_PATH}/register`;
        const res = this.post(url, requestBody);
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
    logout = () => {
        const url = `${_USER_PATH}/logout`;
        return this.post(url);
    };
    changePassword = (requestBody: {
        currentPassword: string;
        newPassword: string;
    }) => {
        const url = `${_USER_PATH}/update/password`;
        const res = this.post(url, requestBody);
        return res;
    };
}

const userService = new UserService();

export default userService;

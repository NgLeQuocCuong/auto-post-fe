import ApiBase from 'modules/apis/apiBase';

const _USER_PATH = '/users';
const _OAUTH_PATH = '/oauth';

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

    updateUser = (
        requestBody: {
            avatar?: Blob;
            firstName: string;
            lastName: string;
        },
        options: any
    ) => {
        const url = `${_USER_PATH}/update/info`;
        const res = this.post(url, requestBody, options);
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

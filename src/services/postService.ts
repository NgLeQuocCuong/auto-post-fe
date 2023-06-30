import ApiBase from 'modules/apis/apiBase';

const _POST_PATH = '/posts';
const _POST_MANAGEMENT_PATH = '/post-management';
class PostService extends ApiBase {
    filterPosts = (params: {
        page?: number;
        pageSize?: number;
        search?: string;
        postType?: string;
        minTime?: string;
        maxTime?: string;
    }) => {
        const url = `${_POST_PATH}/matrix`;
        const res = this.get(url, {
            params: params,
        });
        return res;
    };
    removePost = (params: { uid: string }) => {
        const url = `${_POST_PATH}/${params.uid}/remove`;
        const res = this.post(url);
        return res;
    };
    getDetails = (uid: string) => {
        const url = `${_POST_PATH}/${uid}/detail`;
        return this.get(url);
    };
    getManagementDetails = (uid: string) => {
        const url = `${_POST_PATH}${_POST_MANAGEMENT_PATH}/${uid}/detail`;
        const res = this.get(url);
        return res;
    };
    filterPostManagement = (
        params: {
            page?: number;
            pageSize?: number;
            platform?: string;
            status?: string;
            minTime?: string;
            maxTime?: string;
        },
        uid: string
    ) => {
        const url = `${_POST_PATH}/${uid}${_POST_MANAGEMENT_PATH}`;
        const res = this.get(url, {
            params: params,
        });
        return res;
    };
    getManagementMatrix = (params: {
        page?: number;
        pageSize?: number;
        platform?: string;
        status?: string;
        minTime?: string;
        maxTime?: string;
    }) => {
        const url = `${_POST_PATH}${_POST_MANAGEMENT_PATH}/matrix`;
        const res = this.get(url, {
            params: params,
        });
        return res;
    };
    newPost = (requestBody: any, options: any) => {
        const url = '/posts/create';
        const res = this.post(url, requestBody, options);
        return res;
    };
    postNow = (uid: string) => {
        const url = `/posts/post-management/${uid}/publish`;
        const res = this.post(url);
        return res;
    };
}

const postService = new PostService();

export default postService;

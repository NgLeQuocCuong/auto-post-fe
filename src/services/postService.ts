import ApiBase from 'modules/apis/apiBase';

const _POST_PATH = '/posts';

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
    getMDetails = (uid: string) => {
        const url = `${_POST_PATH}/post-management/${uid}/detail`;
        const res = this.get(url);
        return res;
    };
    remove = (uid: string) => {
        const url = `${_POST_PATH}/${uid}/remove`;
        return this.post(url, uid);
    };
}

const postService = new PostService();

export default postService;

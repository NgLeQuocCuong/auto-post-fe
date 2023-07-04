import Message from 'components/Message';
import { memo, useCallback } from 'react';
import userService from 'services/userService';
import Inner from 'views/PostPage/Inner';

const Wrapper = memo(() => {
    // const {setLoading} = usePostPageContext();
    const handlePost = useCallback(async data => {
        const postData = {
            title: data.title,
            content: data.value,
            post_type: data.postType,
            images: data.images,
            // managements: data.groupUID.map(
            //     ({ name, pageId, pageAccessToken }) => ({
            //         platform: 'FACEBOOK',
            //         auto_publish: false,
            //         required_items: {
            //             name: name,
            //             page_id: pageId,
            //             access_token: pageAccessToken,
            //         },
            //     })
            // ),
        };
        // console.log('postData', postData);
        const response = await userService.newpost(postData);
        if (response.isSuccess) {
            Message.sendSuccess('Khởi tạo bài viết thành công!!!');
        }
        return response;
    }, []);
    return <Inner handlePost={handlePost} />;
});
Wrapper.displayName = 'PostPage';

const PostPage = Wrapper;

export default PostPage;

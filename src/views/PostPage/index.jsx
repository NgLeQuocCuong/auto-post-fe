import { memo, useCallback, useMemo } from 'react';
import postService from 'services/postService';
import Inner from 'views/PostPage/Inner';
import showdown from 'showdown';
import Message from 'components/Message';

const Wrapper = memo(() => {
    const converter = useMemo(() => new showdown.Converter(), []);

    const handlePost = useCallback(
        async data => {
            const postData = {
                content: converter.makeMarkdown(data.value),
                post_type: data.postType,
                images: data.images,
                managements: data.groupUID.map(
                    ({ name, pageId, pageAccessToken }) => ({
                        platform: 'FACEBOOK',
                        auto_publish: false,
                        required_items: {
                            name: name,
                            page_id: pageId,
                            access_token: pageAccessToken,
                        },
                    })
                ),
            };
            const response = await postService.newPost(postData);
            if (response.isSuccess) {
                response.data.forEach(async item => {
                    await postService.postNow(item.uid);
                    Message.sendSuccess('Đăng bài thành công!!!');
                });
            }
            return response;
        },
        [converter]
    );
    return <Inner handlePost={handlePost} />;
});
Wrapper.displayName = 'PostPage';

const PostPage = Wrapper;

export default PostPage;

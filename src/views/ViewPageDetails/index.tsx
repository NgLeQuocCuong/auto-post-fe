import { memo } from 'react';
import Inner from 'views/ViewPageDetails/Inner';

const Wrapper = memo(() => {
    return <Inner />;
});
Wrapper.displayName = 'PageDetails';

const PostPage = Wrapper;

export default PostPage;

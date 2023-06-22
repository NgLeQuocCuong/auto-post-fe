import { memo } from 'react';
import Inner from 'views/PostPage/Inner';

const Wrapper = memo(() => {
    return <Inner/>;
});
Wrapper.displayName = 'Login';

const PostPage = Wrapper;

export default PostPage;

import { memo } from 'react';
import PostPage from 'components/PostPage/PostPage';

const Inner = memo(() => {
    return (
        <PostPage/>
    );
});

Inner.displayName = 'PostPage Inner';

export default Inner;

import { memo } from 'react';
import PostPage from 'components/PostPage/PostPage';

const Inner = memo(({ handlePost }) => {
    return <PostPage handlePost={handlePost} />;
});

Inner.displayName = 'PostPage Inner';

export default Inner;

import { memo } from 'react';
import PostPage from 'components/PostPage/PostPage';

const Inner = memo(({ handlePost, set }) => {
    return <PostPage handlePost={handlePost} set={set} />;
});

Inner.displayName = 'PostPage Inner';

export default Inner;

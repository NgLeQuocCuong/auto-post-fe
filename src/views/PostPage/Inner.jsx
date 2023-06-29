import { memo } from 'react';
import PostPage from 'components/PostPage/PostPage';
import WebLayout from 'layouts/Web/WebLayout';

const Inner = memo(({handlePost}) => {
    return (
        <WebLayout>
            <PostPage handlePost={handlePost}/>
        </WebLayout>
    );
});

Inner.displayName = 'PostPage Inner';

export default Inner;

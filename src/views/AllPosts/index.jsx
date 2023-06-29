import { memo, useCallback } from 'react';
import postService from 'services/postService';
import Inner from 'views/AllPosts/Inner';

const Wrapper = memo(() => {
    const handleAllPosts = useCallback(async data => {
        const response = await postService.filterPosts(data);
        return response;
    }, []);
    return <Inner handleAllPosts={handleAllPosts} />;
});

Wrapper.displayName = 'All Posts';

const AllPosts = Wrapper;

export default AllPosts;

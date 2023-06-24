import { memo, useCallback, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getToken } from 'reducers/token/function';
import userService from 'services/userService';
import Inner from 'views/AllPosts/Inner';

const Wrapper = memo(() => {
    //TODO: Add API to get all posts 
    const handleAllPosts = undefined;
    return <Inner handleAllPosts={handleAllPosts} />;
});
Wrapper.displayName = 'All Posts';

const AllPosts = Wrapper;

export default AllPosts;
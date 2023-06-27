import { memo, useCallback, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getToken } from 'reducers/token/function';
import userService from 'services/userService';
import Inner from 'views/AllPosts/Inner';
import Message from 'components/Message';

const Wrapper = memo(() => {
    const navigate = useNavigate();
    useEffect(() => {
        const token = getToken();
        if (!token) {
            navigate('/login');
        }
    }, [navigate]);
    const handleAllPosts = useCallback(async data => {
        const response = await userService.filterPosts(data);
        if (!response.isSuccess) {
            Message.sendError('Có lỗi xảy ra: ' + response.message);
        }
        return response;
    }, []);
    return <Inner handleAllPosts={handleAllPosts} />;
});

Wrapper.displayName = 'All Posts';

const AllPosts = Wrapper;

export default AllPosts;

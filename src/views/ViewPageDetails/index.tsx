import { memo } from 'react';
import Inner from 'views/ViewPageDetails/Inner';
import './style.scss';
import { useEffect } from 'react';

const Wrapper = memo(() => {
    useEffect(() => {
        document.body.classList.add('current-page');

        return () => {
            document.body.classList.remove('current-page');
        };
    }, []);
    return <Inner />;
});
Wrapper.displayName = 'PageDetails';

const PostPage = Wrapper;

export default PostPage;

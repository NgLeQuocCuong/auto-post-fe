import { FC, memo } from 'react';
import './style.scss';
import WebLayout from 'layouts/Web/WebLayout';
import Wrapper from 'components/PostPage/components/Wrapper';
import Title from 'components/PostPage/components/Title';
import Social from 'components/PostPage/components/Social';
import Content from 'components/PostPage/components/Content';
import CheckList from 'components/PostPage/components/DropDown';
import DropButton from 'components/PostPage/components/DropButton';

const PostPage: FC = memo(() => {
    return (
        <WebLayout>
            <Wrapper>
                <div className='nav-bar'>
                    <Title title='tạo bài viết mới' subTitle='Bạn muốn đăng gì nào?' />
                    <Social/>
                </div>
                <Content/>
                <CheckList/>
                <DropButton/>
            </Wrapper>
        </WebLayout>
    );
});

PostPage.displayName = 'PostPage';

export default PostPage;

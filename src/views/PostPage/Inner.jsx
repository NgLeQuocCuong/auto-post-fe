// import { Button, Input } from 'antd';
import { memo } from 'react';
import './style.scss';
import WebLayout from 'layouts/Web/WebLayout';
import Wrapper from 'components/PostPage/components/Wrapper';
import Social from 'components/PostPage/components/Social';
import CheckList from 'components/PostPage/components/DropDown';
import DropButton from 'components/PostPage/components/DropButton';
import Title from 'components/PostPage/components/Title';
import Content from 'components/PostPage/components/Content';

// import AccountLayout from 'layouts/Account';
// import { NavLink } from 'react-router-dom';
// import routeConstants from 'route/routeConstant';

const Inner = memo(() => {
    return (
        <WebLayout>
            <Wrapper>
                <div className='wrapHeader'>
                    <Title title='tạo bài viết mới' subTitle='Bạn muốn đăng gì nào?'></Title>
                    <Social></Social>
                </div>
                <Content></Content>
                <CheckList></CheckList>
                <DropButton></DropButton>
            </Wrapper>
        </WebLayout>
    );
});

Inner.displayName = 'PostPage Inner';

export default Inner;

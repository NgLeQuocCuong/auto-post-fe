// import { Button, Input } from 'antd';
import { memo } from 'react';
import Social from 'components/HomePage/components/Social';
import Title from 'components/HomePage/components/Title';
import Wrapper from 'components/HomePage/components/Wrapper';
import './style.scss';
import Content from 'components/HomePage/components/Content';
import CheckList from 'components/HomePage/components/DropDown';
import DropButton from 'components/HomePage/components/DropButton';

// import AccountLayout from 'layouts/Account';
// import { NavLink } from 'react-router-dom';
// import routeConstants from 'route/routeConstant';

const Inner = memo(() => {
    
    return (
        <Header
        <Wrapper>
            <div className='wrapHeader'>
                <Title title='tạo bài viết mới' subTitle='Bạn muốn đăng gì nào?'></Title>
                <Social></Social>
            </div>
            <Content></Content>
            <CheckList></CheckList>
            <DropButton></DropButton>
        </Wrapper>
    );
});

Inner.displayName = 'PostPage Inner';

export default Inner;

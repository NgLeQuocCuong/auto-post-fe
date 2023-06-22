import { Button, Input } from 'antd';
import Title from 'components/HomePage/components/Title';
import Wrapper from 'components/HomePage/components/Wrapper';
import AccountLayout from 'layouts/Account';
import { memo } from 'react';
import { NavLink } from 'react-router-dom';
import routeConstants from 'route/routeConstant';

const Inner = memo(({ handleLogin }) => {
    return (
        <Wrapper>
            <Title title='tạo bài viết mới' subTitle='Bạn muốn bán gì nào?'></Title>
            <
        </Wrapper>
    );
});

Inner.displayName = 'PostPage Inner';

export default Inner;

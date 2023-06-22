import { Button, Input } from 'antd';
import Wrapper from 'components/HomePage/components/Wrapper';
import AccountLayout from 'layouts/Account';
import { memo } from 'react';
import { NavLink } from 'react-router-dom';
import routeConstants from 'route/routeConstant';

const Inner = memo(({ handleLogin }) => {
    return (
        <Wrapper>
            
        </Wrapper>
    );
});

Inner.displayName = 'PostPage Inner';

export default Inner;

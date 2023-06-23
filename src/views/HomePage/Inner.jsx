import HomePage from 'components/HomePage/HomePage';
import { memo } from 'react';

const Inner = memo(() => {
    return (
        <HomePage/>
    );
});

Inner.displayName = 'HomePage Inner';

export default Inner;
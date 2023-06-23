import { memo } from 'react';
import PageDetails from 'components/PageDetails/PageDetails';

const Inner = memo(() => {
    return <PageDetails />;
});

Inner.displayName = 'PageDetails Inner';

export default Inner;

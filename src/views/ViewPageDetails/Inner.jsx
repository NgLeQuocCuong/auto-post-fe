import { memo } from 'react';
import PageDetails from './PageDetails';

const Inner = memo(() => {
    return (
        <div className="container-detail">
            <PageDetails />
        </div>
    );
});

Inner.displayName = 'PageDetails Inner';

export default Inner;

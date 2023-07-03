import WebLayout from 'layouts/Web/WebLayout';
import { memo } from 'react';
import HomePage from './HomePage';

const Inner = memo(() => {
    return (
        <WebLayout>
            <HomePage />
        </WebLayout>
    );
});

Inner.displayName = 'HomePage Inner';

export default Inner;

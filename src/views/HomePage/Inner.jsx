import './style.scss';
import { memo } from 'react';
import PostInDate from 'views/HomePage/components/PostInDate';
import Interact from 'views/HomePage/components/Interact';
import WebLayout from 'layouts/Web/WebLayout';

const Inner = memo(() => {
    return (
        <WebLayout>
            <div className="homepage">
                <div className="homepage__top">
                    <div className="homepage__graph"></div>
                    <Interact/>
                </div>
                <PostInDate/>
            </div>
        </WebLayout>
    );
});

Inner.displayName = 'HomePage Inner';

export default Inner;
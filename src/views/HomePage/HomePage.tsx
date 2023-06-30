import React, { FC, memo } from 'react';
import './style.scss';
import Interact from './components/Interact';
import PostInDate from './components/PostInDate';

const HomePage: FC = memo(() => {
    return (
        <div className="homepage">
            <div className="homepage__top">
                <div className="homepage__graph"></div>
                <Interact />
            </div>
            <PostInDate />
        </div>
    );
});

HomePage.displayName = 'Home Page';

export default HomePage;

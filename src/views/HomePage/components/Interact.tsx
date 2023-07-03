import React, { FC, memo } from 'react';
import '../style.scss';
import InteractSocial from './InteractSocial';

const Interact: FC = memo(() => {
    return (
        <div className="homepage__interact">
            <InteractSocial
                title="Tổng quan"
                totalPosts={1024}
                totalLike={245680}
                people={4569}
                evaluate={2124}
                className="homepage__interact--general"
            />
            <div className="homepage__interact--social">
                <InteractSocial
                    title="Facebook"
                    posts={100}
                    like={24568}
                    cmt={1234}
                />
                <InteractSocial title="Zalo" posts={64} like={1050} cmt={234} />
            </div>
        </div>
    );
});

Interact.displayName = 'Interact Component';

export default Interact;

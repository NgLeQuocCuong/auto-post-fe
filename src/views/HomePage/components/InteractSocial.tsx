import React, { FC, memo } from 'react';
import '../style.scss';
import InteractData from './InteractData';

interface Props {
    title: string;
    posts?: number;
    totalPosts?: number;
    like?: number;
    totalLike?: number;
    cmt?: number;
    people?: number;
    evaluate?: number;
    className?: string;
}

const InteractSocial: FC<Props> = memo(
    ({
        title,
        posts,
        totalPosts,
        like,
        totalLike,
        cmt,
        people,
        evaluate,
        className,
    }) => {
        return (
            <div className={`wrapper__interact ${className}`}>
                <p className="wrapper__interact--title">{title}</p>
                <div className="wrapper__interact--datas">
                    {posts && <InteractData interact={posts} name="Bài đăng" />}
                    {totalPosts && (
                        <InteractData
                            interact={totalPosts}
                            name="Tổng số bài đăng"
                        />
                    )}
                    {totalLike && (
                        <InteractData
                            interact={totalLike}
                            name="Tổng số lượt tương tác"
                        />
                    )}
                    {like && (
                        <InteractData interact={like} name="Lượt tương tác" />
                    )}
                    {people && (
                        <InteractData interact={people} name="Người tiếp cận" />
                    )}
                    {cmt && <InteractData interact={cmt} name="Bình luận" />}
                    {evaluate && (
                        <InteractData
                            interact={evaluate}
                            name="Lượt đánh giá"
                        />
                    )}
                </div>
            </div>
        );
    }
);

InteractSocial.displayName = 'InteractSocial Component';

export default InteractSocial;

import InteractData from 'views/HomePage/components/InteractData';
import { FC, memo } from 'react';
import '../style.scss';

interface Props {
    title: string;
    posts?: number;
    totalPosts?: number;
    like?: number;
    totalLike?: number;
    comment?: number;
    people?: number;
    evaluate?: number;
    className?: string;
}

// const values = [
//     {
//         name: 'Bài đăng',
//         interact,
//     },
//     {

//     }
// ]

const InteractSocial: FC<Props> = memo(
    ({
        title,
        posts,
        totalPosts,
        like,
        totalLike,
        comment,
        people,
        evaluate,
        className,
    }) => {
        const interactDatas = [
            { interact: posts, name: 'Bài đăng' },
            { interact: totalPosts, name: 'Tổng số bài đăng' },
            { interact: like, name: 'Lượt tương tác' },
            { interact: totalLike, name: 'Tổng số lượt tương tác' },
            { interact: comment, name: 'Người tiếp cận' },
            { interact: people, name: 'Bình luận' },
            { interact: evaluate, name: 'Lượt đánh giá' },
        ];
        return (
            <div className={`wrapper__interact ${className}`}>
                <p className="wrapper__interact--title">{title}</p>
                <div className="wrapper__interact--datas">
                    {interactDatas.map(
                        data =>
                            data.interact && (
                                <InteractData
                                    key={data.name}
                                    interact={data.interact}
                                    name={data.name}
                                />
                            )
                    )}
                </div>
            </div>
        );
    }
);

InteractSocial.displayName = 'InteractSocial Component';

export default InteractSocial;

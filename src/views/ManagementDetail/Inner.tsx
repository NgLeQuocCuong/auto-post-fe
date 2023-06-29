import { memo } from 'react';
import './style.scss';
import AccountLayout from 'layouts/Account';
import ZaloIcon from 'components/CommonInput/icons/ZaloIcon';
import FBIcon from 'components/CommonInput/icons/FBIcon';
import LikeIcon from 'components/CommonInput/icons/LikeIcon';
import CommentIcon from 'components/CommonInput/icons/CommentIcon';
import { FC } from 'react';

interface Props {
    date: string;
    time: string;
    content: string;
    reaction: Number;
    imageurls: string[];
    comment: Number;
    platform: string;
}

const Inner: FC<Props> = memo(
    ({ date, time, content, imageurls, platform, reaction, comment }) => {
        // const navigate = useNavigate();
        const reacts = reaction.toString();
        const comments = comment.toString();
        const imgpath = 'http://192.168.1.24:8000';
        // const handleremove = useCallback(async () => {
        //     const response = await userService.remove(uid);
        //     if (response.isSuccess) {
        //         Message.sendSuccess('Xóa bài viết thành công!', 2);
        //         navigate(routeConstants.ALL_POSTS);
        //     }
        //     return response;
        // }, [navigate, uid]);
        return (
            <div className="container-mdetail">
                <AccountLayout>
                    <div className="mdetails-view-container">
                        <div className="header">
                            <div className="left-section">
                                <div className="post-info">
                                    <h2>Thông tin bài viết</h2>
                                    <div className="post-meta">
                                        <div className="title">
                                            <div className="page-time">
                                                Thời gian:
                                            </div>
                                        </div>
                                        <div className="content">
                                            <span>
                                                {time} - {date}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="right-section">
                                <div className="actions">
                                    <h2>Nền tảng đã đăng</h2>
                                    <div className="social-stats">
                                        <div className="FB-stat">
                                            <div className="platfrom-F">
                                                {platform === 'FACEBOOK' ? (
                                                    <FBIcon />
                                                ) : (
                                                    <ZaloIcon />
                                                )}
                                            </div>

                                            <div className="platform">
                                                <LikeIcon />
                                                <span>{reacts}</span>
                                            </div>
                                            <div className="platform">
                                                <CommentIcon />
                                                <span>{comments}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="post-content">
                            <h2>Nội dung bài đăng</h2>
                            <div
                                dangerouslySetInnerHTML={{
                                    __html: content,
                                }}
                            />
                            <div className="imgs">
                                {imageurls.map((path, index) => (
                                    <img
                                        className="img"
                                        key={index}
                                        src={imgpath + path}
                                        alt={`Img no.${index}`}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </AccountLayout>
            </div>
        );
    }
);

Inner.displayName = 'PageDetails Inner';

export default Inner;

import { memo } from 'react';
import './style.scss';
import AccountLayout from 'layouts/Account';
import ZaloIcon from 'components/CommonInput/icons/ZaloIcon';
import FBIcon from 'components/CommonInput/icons/FBIcon';
import ViewIcon from 'components/CommonInput/icons/ViewIcon';
import ShareIcon from 'components/CommonInput/icons/ShareIcon';
import LikeIcon from 'components/CommonInput/icons/LikeIcon';
import CommentIcon from 'components/CommonInput/icons/CommentIcon';
import PencilIcon from 'components/CommonInput/icons/PencilIcon';
import TrashIcon from 'components/CommonInput/icons/TrashIcon';
import { FC } from 'react';

interface Props {
    postType: string;
    date: string;
    time: string;
    content: string;
}

const Inner: FC<Props> = memo(({ postType, date, time, content }) => {
    const formattedContent = content.replace(/\n/g, '<br />');
    return (
        <div className="container-detail">
            <AccountLayout>
                <div className="details-view-container">
                    <div className="upper">
                        <button className="edit-button">
                            <PencilIcon /> <p>Sửa bài viết</p>
                        </button>
                        <button className="del-button">
                            <TrashIcon /> <p>Xóa bài viết</p>
                        </button>
                    </div>
                    <div className="header">
                        <div className="left-section">
                            <div className="post-info">
                                <h2>Thông tin bài viết</h2>
                                <div className="post-meta">
                                    <div className="title">
                                        <div className="page-cate">
                                            Loại bài viết:
                                        </div>
                                        <br></br>
                                        <div className="page-time">
                                            Thời gian:
                                        </div>
                                    </div>
                                    <div className="content">
                                        <div className="type">{postType}</div>
                                        <br></br>
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
                                            <FBIcon />
                                        </div>
                                        <div className="platform">
                                            <span>
                                                <ViewIcon /> 1000
                                            </span>
                                        </div>
                                        <div className="platform">
                                            <span>
                                                <LikeIcon /> 100
                                            </span>
                                        </div>
                                        <div className="platform">
                                            <span>
                                                <CommentIcon /> 50
                                            </span>
                                        </div>
                                        <div className="platform">
                                            <span>
                                                <ShareIcon /> 21
                                            </span>
                                        </div>
                                    </div>
                                    <div className="Zalo-stat">
                                        <div className="platfrom-Z">
                                            <ZaloIcon />
                                        </div>

                                        <div className="platform">
                                            <span>
                                                <ViewIcon /> 1000
                                            </span>
                                        </div>
                                        <div className="platform">
                                            <span>
                                                <LikeIcon /> 100
                                            </span>
                                        </div>
                                        <div className="platform">
                                            <span>
                                                <CommentIcon /> 50
                                            </span>
                                        </div>
                                        <div className="platform">
                                            <span>
                                                <ShareIcon /> 21
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="post-content">
                        <h2>Nội dung bài đăng</h2>
                        <div>
                            <div
                                dangerouslySetInnerHTML={{
                                    __html: formattedContent,
                                }}
                            />
                        </div>
                    </div>
                </div>
            </AccountLayout>
        </div>
    );
});

Inner.displayName = 'PageDetails Inner';

export default Inner;

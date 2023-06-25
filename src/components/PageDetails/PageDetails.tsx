import { memo } from 'react';
import './style.scss';
import AccountLayout from 'layouts/Account';
import ZaloIcon from 'components/PageDetails/icons/ZaloIcon';
import FBIcon from 'components/PageDetails/icons/FBIcon';
import ViewIcon from 'components/PageDetails/icons/ViewIcon';
import ShareIcon from 'components/PageDetails/icons/ShareIcon';
import LikeIcon from 'components/PageDetails/icons/LikeIcon';
import CommentIcon from 'components/PageDetails/icons/CommentIcon';
import PencilIcon from 'components/PageDetails/icons/PencilIcon';
import TrashIcon from 'components/PageDetails/icons/TrashIcon';
// import Wrapper from 'components/PageDetails/components/Wrapper';
// import Title from 'components/PageDetails/components/Title';
// import Social from 'components/PageDetails/components/Social';
// import Content from 'components/PageDetails/components/Content';
// import CheckList from 'components/PageDetails/components/DropDown';
// import DropButton from 'components/PageDetails/components/DropButton';
interface Post {
    id: number;
    title: string;
    category: string;
    timestamp: string;
    content: string;
    likes: number;
    comments: number;
    shares: number;
}

interface Props {
    post: Post;
}
const PageDetails = memo(post => {
    return (
        <AccountLayout>
            <div className="details-view-container">
                <div className="upper">
                    <button className="edit-button">
                        <PencilIcon></PencilIcon> Sửa bài viết
                    </button>
                    <button className="del-button">
                        <TrashIcon></TrashIcon> Xóa bài viết
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
                                    <div className="page-time">Thời gian:</div>
                                </div>
                                <div className="content">
                                    <div className="type">QUẢNG CÁO</div>
                                    <br></br>
                                    <span>19:28 - 22/02/2002</span>
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
                                        <FBIcon></FBIcon>
                                    </div>
                                    <div className="platform">
                                        <span>
                                            <ViewIcon></ViewIcon> 1000
                                        </span>
                                    </div>
                                    <div className="platform">
                                        <span>
                                            <LikeIcon></LikeIcon> 100
                                        </span>
                                    </div>
                                    <div className="platform">
                                        <span>
                                            <CommentIcon></CommentIcon> 50
                                        </span>
                                    </div>
                                    <div className="platform">
                                        <span>
                                            <ShareIcon></ShareIcon> 21
                                        </span>
                                    </div>
                                </div>
                                <div className="Zalo-stat">
                                    <div className="platfrom-Z">
                                        <ZaloIcon></ZaloIcon>
                                    </div>

                                    <div className="platform">
                                        <span>
                                            <ViewIcon></ViewIcon> 1000
                                        </span>
                                    </div>
                                    <div className="platform">
                                        <span>
                                            <LikeIcon></LikeIcon> 100
                                        </span>
                                    </div>
                                    <div className="platform">
                                        <span>
                                            <CommentIcon></CommentIcon> 50
                                        </span>
                                    </div>
                                    <div className="platform">
                                        <span>
                                            <ShareIcon></ShareIcon> 21
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="post-content">
                    <h2>Nội dung bài đăng</h2>
                    <div>Content</div>
                </div>
            </div>
        </AccountLayout>
    );
});

PageDetails.displayName = 'PageDetails';

export default PageDetails;

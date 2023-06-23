import { memo } from 'react';
import './style.scss';
import AccountLayout from 'layouts/Account';
import { useEffect } from 'react';
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
                    <button className="edit-button">Edit</button>
                </div>
                <div className="header">
                    <div className="left-section">
                        <div className="post-info">
                            <div className="post-meta">
                                <div className="category">
                                    <span>Quảng cáo</span>
                                </div>
                                <div>
                                    <span>
                                        <strong>Post at:</strong> 10-05-2023
                                        15:00:00
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="right-section">
                        <div className="actions">
                            <div className="social-stats">
                                <div className="platform">
                                    <span>Seen: 1000</span>
                                </div>
                                <div className="platform">
                                    <span>Likes: 100</span>
                                </div>
                                <div className="platform">
                                    <span>Comments: 50</span>
                                </div>
                                <div className="platform">
                                    <span>Shares: 21</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="post-content">Lorem Sirum</div>
            </div>
        </AccountLayout>
    );
});

PageDetails.displayName = 'PageDetails';

export default PageDetails;

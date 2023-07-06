import { memo } from 'react';
import './style.scss';
import WebLayout from 'layouts/Web/WebLayout';
// import ZaloIcon from 'components/CommonInput/icons/ZaloIcon';
// import FBIcon from 'components/CommonInput/icons/FBIcon';
// import ViewIcon from 'components/CommonInput/icons/ViewIcon';
// import ShareIcon from 'components/CommonInput/icons/ShareIcon';
// import LikeIcon from 'components/CommonInput/icons/LikeIcon';
// import CommentIcon from 'components/CommonInput/icons/CommentIcon';
import PencilIcon from 'components/CommonInput/icons/PencilIcon';
import TrashIcon from 'components/CommonInput/icons/TrashIcon';
import { FC, useCallback } from 'react';
import postService from 'services/postService';
import { useNavigate } from 'react-router-dom';
import routeConstants from 'route/routeConstant';
import Message from 'components/Message';
import Popup from 'components/Popup';
interface Props {
    postType: string;
    date: string;
    time: string;
    content: string;
    uid: string;
    imageurls: string[];
}

const Inner: FC<Props> = memo(
    ({ postType, date, time, content, uid, imageurls }) => {
        let postTypeVi = '';
        switch (postType) {
            case 'COMMERCIAL':
                postTypeVi = 'QUẢNG CÁO';
                break;
            case 'ARTICLE':
                postTypeVi = 'BÁO CHÍ';
                break;
            case 'RECRUITMENT':
                postTypeVi = 'TUYỂN DỤNG';
                break;
            case 'EDUCATION':
                postTypeVi = 'HỌC THUẬT';
                break;
            default:
                postTypeVi = 'MARKETING';
                break;
        }
        const navigate = useNavigate();
        const imgpath = 'http://192.168.30.109:8000';
        const handleRemove = useCallback(async () => {
            const response = await postService.removePost({ uid });
            if (response.isSuccess) {
                Message.sendSuccess('Xóa bài viết thành công!');
                navigate(routeConstants.ALL_POSTS);
            }
            return response;
        }, [navigate, uid]);
        return (
            <div className="container-detail">
                <WebLayout>
                    <div className="details-view-container">
                        <div className="upper">
                            {/* <button className="edit-button">
                                <PencilIcon /> <p>Sửa bài viết</p>
                            </button>
                            <button
                                className="del-button"
                                onClick={handleremove}
                            >
                                <TrashIcon /> <p>Xóa bài viết</p>
                            </button> */}
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
                                            <div className="type">
                                                {postTypeVi}
                                            </div>
                                            <br></br>
                                            <span>
                                                {time} - {date}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="right-section">
                                <button className="edit-button">
                                    <PencilIcon /> <p>Sửa bài viết</p>
                                </button>
                                <button
                                    className="del-button"
                                    onClick={() =>
                                        Popup.sendConfirm(
                                            'Bạn có chắc chắn muốn xóa bài viết này?',
                                            'Thao tác này không thể hoàn tác!',
                                            {
                                                onOk: () => {
                                                    handleRemove();
                                                },
                                                onCancel: () => {},
                                            }
                                        )
                                    }
                                >
                                    <TrashIcon /> <p>Xóa bài viết</p>
                                </button>
                            </div>
                        </div>
                        <div className="post-content">
                            <h2>Nội dung bài viết</h2>
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
                </WebLayout>
            </div>
        );
    }
);

Inner.displayName = 'PAGE_DETAILS Inner';

export default Inner;
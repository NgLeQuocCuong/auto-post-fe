import { FC, memo, useCallback, useMemo, useState } from 'react';
import './style.scss';
import './OverWrite.scss';
import { Button, Modal } from 'antd';
import PostForm from 'components/PostPage/components/PostForm';
import UploadImage from 'components/PostPage/components/UploadImage';
import { IContext, Context } from 'components/PostPage/components/Context';

interface Props {
    handlePost: any;
    set: any;
}

interface Option {
    name: string;
    page_id: string;
    page_access_token: string;
}

const PostPage: FC<Props> = memo(({ handlePost, set }) => {
    const [display, setDisplay] = useState(true);
    const handleModalClose = useCallback(() => {
        setDisplay(false);
        set.set();
    }, [set]);

    const [data, setData] = useState<IContext['data']>({
        title: '',
        value: '',
        loading: false,
        postType: [],
        images: [],
        groupUID: [],
    });

    const setTitle = useCallback((newTitle: string) => {
        setData(prevData => ({
            ...prevData,
            title: newTitle,
        }));
    }, []);

    const setValue = useCallback((newValue: string) => {
        setData(prevData => ({
            ...prevData,
            value: newValue,
        }));
    }, []);

    const setLoading = useCallback((isLoading: boolean) => {
        setData(prevData => ({
            ...prevData,
            loading: isLoading,
        }));
    }, []);

    const setPostType = useCallback((newPostType: string) => {
        setData(prevData => ({
            ...prevData,
            postType: [...prevData.postType, newPostType],
        }));
    }, []);

    const removePostType = useCallback((removePostType: string) => {
        setData(prevData => ({
            ...prevData,
            postType: prevData.postType.filter(type => type !== removePostType),
        }));
    }, []);

    const setGroupUID = useCallback((newGroupUID: Option) => {
        setData(prevData => ({
            ...prevData,
            groupUID: [...prevData.groupUID, newGroupUID],
        }));
    }, []);

    const removeGroupUID = useCallback((removeUID: Option) => {
        setData(prevData => ({
            ...prevData,
            groupUID: prevData.groupUID.filter(type => type !== removeUID),
        }));
    }, []);

    const setImages = useCallback((newUID: string) => {
        setData(prevData => ({
            ...prevData,
            images: [...prevData.images, newUID],
        }));
    }, []);

    const resetForm = useCallback(() => {
        setData({
            title: '',
            value: '',
            loading: false,
            postType: [],
            images: [],
            groupUID: [],
        });
    }, []);

    const contextValue = useMemo(
        () => ({
            data,
            setTitle,
            setValue,
            setLoading,
            setImages,
            setPostType,
            removePostType,
            setGroupUID,
            removeGroupUID,
            resetForm,
        }),
        [
            data,
            setTitle,
            setValue,
            setLoading,
            setImages,
            setPostType,
            removePostType,
            setGroupUID,
            removeGroupUID,
            resetForm,
        ]
    );

    const handlePostClick = useCallback(async () => {
        setLoading(true);
        await handlePost(data);
        resetForm();
        handleModalClose();
    }, [data, handlePost, resetForm, setLoading, handleModalClose]);

    return (
        <Context.Provider value={contextValue}>
            <Modal
                open={display}
                title="Bài viết mới"
                onCancel={handleModalClose}
                footer={null}
                className="modal-wrapper"
                width={900}
            >
                <PostForm />
                <div>
                    <label className="image-label">Hình ảnh</label>
                    <UploadImage />
                </div>
                <div className="button-post">
                    <Button onClick={handleModalClose}>Hủy</Button>
                    <Button
                        type="primary"
                        onClick={handlePostClick}
                        disabled={data.loading}
                    >
                        {data.loading ? 'Đang tạo ...' : 'Tạo bài viết'}
                    </Button>
                </div>
            </Modal>
        </Context.Provider>
    );
});

PostPage.displayName = 'PostPage';

export default PostPage;

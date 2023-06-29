import { FC, memo, useCallback, useMemo, useState } from 'react';
import './style.scss';
import Wrapper from 'components/PostPage/components/Wrapper';
import Title from 'components/PostPage/components/Title';
import Social from 'components/PostPage/components/Social';
import Content from 'components/PostPage/components/Content';
import CheckList from 'components/PostPage/components/DropDown';
import DropButton from 'components/PostPage/components/DropButton';
import UploadImage from 'components/PostPage/components/UploadImage';
import { Context, IContext } from 'components/PostPage/components/Context';

interface Props {
    handlePost: any;
}

interface Option {
    name: string;
    page_id: string;
    page_access_token: string;
}

const PostPage: FC<Props> = memo(({ handlePost }) => {
    const [data, setData] = useState<IContext['data']>({
        value: '',
        postType: '',
        images: [],
        groupUID: [],
    });

    const setValue = useCallback(
        (newValue: string) => {
            setData(prevData => ({
                ...prevData,
                value: newValue,
            }));
        },
        [setData]
    );

    const setPostType = useCallback(
        (newPostType: string) => {
            setData(prevData => ({
                ...prevData,
                postType: newPostType,
            }));
        },
        [setData]
    );

    const setGroupUID = useCallback((newGroupUID: Option) => {
        setData(prevData => ({
            ...prevData,
            groupUID: [...prevData.groupUID, newGroupUID],
        }));
    }, []);

    const removeGroupUID = useCallback(
        (removeUID: Option) => {
            setData(prevData => ({
                ...prevData,
                groupUID: prevData.groupUID.filter(type => type !== removeUID),
            }));
        },
        [setData]
    );

    const setImages = useCallback(
        (newUID: string) => {
            setData(prevData => ({
                ...prevData,
                images: [...prevData.images, newUID],
            }));
        },
        [setData]
    );

    const contextValue = useMemo(
        () => ({
            data,
            setValue,
            setPostType,
            removeGroupUID,
            setImages,
            setGroupUID,
        }),
        [data, setValue, setPostType, removeGroupUID, setImages, setGroupUID]
    );

    return (
        <Context.Provider value={contextValue}>
            <Wrapper>
                <div className="nav-bar">
                    <Title
                        title="tạo bài viết mới"
                        subTitle="Bạn muốn đăng gì nào?"
                    />
                    <Social />
                </div>
                <Content />
                <UploadImage />
                <CheckList />
                <DropButton
                    handlePost={handlePost}
                    contentBtn="Đăng bài viết"
                    haveMenu={true}
                />
            </Wrapper>
        </Context.Provider>
    );
});

PostPage.displayName = 'PostPage';

export default PostPage;

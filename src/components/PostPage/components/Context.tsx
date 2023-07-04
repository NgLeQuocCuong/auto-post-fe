import { useContext, createContext } from 'react';

interface Option {
    name: string;
    page_id: string;
    page_access_token: string;
}
export interface IContext {
    data: {
        title: string;
        value: string;
        loading: boolean;
        postType: string[];
        images: string[];
        groupUID: Option[];
    };
    setTitle: any;
    setValue: any;
    setLoading: any;
    setImages: any;
    setPostType: any;
    removePostType: any;
    setGroupUID: any;
    removeGroupUID: any;
    resetForm: any;
}

export const Context = createContext<IContext>({
    data: {
        title: '',
        value: '',
        loading: false,
        postType: [],
        images: [],
        groupUID: [],
    },
    setTitle: () => {},
    setValue: () => {},
    setLoading: () => {},
    setImages: () => {},
    setPostType: () => {},
    removePostType: () => {},
    setGroupUID: () => {},
    removeGroupUID: () => {},
    resetForm: () => {},
});

const usePostPageContext = () => useContext(Context);

export default usePostPageContext;

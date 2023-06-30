import { createContext, useContext } from 'react';

interface Option {
    name: string;
    page_id: string;
    page_access_token: string;
}
export interface IContext {
    data: {
        value: string;
        postType: string;
        images: string[];
        groupUID: Option[];
        // time:
    };
    setValue: any;
    setPostType: any;
    setImages: any;
    setGroupUID: any;
    removeGroupUID: any;
}

export const Context = createContext<IContext>({
    data: {
        value: '',
        postType: '',
        images: [],
        groupUID: [],
    },
    setValue: () => {},
    setPostType: () => {},
    setImages: () => {},
    setGroupUID: () => {},
    removeGroupUID: () => {},
});

const usePostPageContext = () => useContext(Context);

export default usePostPageContext;

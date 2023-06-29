import usePostPageContext from 'components/PostPage/components/Context';
import { modules } from 'components/PostPage/config';
import { FC, memo } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import '../style.scss';

const Content: FC = memo(() => {
    const { data, setValue } = usePostPageContext();

    return (
        <div className="contentwrapper">
            <ReactQuill
                modules={modules}
                theme="snow"
                value={data.value}
                onChange={setValue}
                className="contentwrapper__content"
                placeholder="Nhập nội dung ..."
            />
        </div>
    );
});

Content.displayName = 'ContentComponent';

export default Content;

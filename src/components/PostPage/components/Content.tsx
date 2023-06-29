import { memo, FC } from 'react';
import 'react-quill/dist/quill.snow.css';
import '../style.scss';
import { modules } from 'components/PostPage/config';
import usePostPageContext from 'components/PostPage/components/Context';
import ReactQuill from 'react-quill';

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

import { useState, memo, FC } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const Content: FC = memo(() => {
    return (
        return <ReactQuill theme="snow" value={value} onChange={setValue} />;
    )
});

Content.displayName = 'ContentComponent';

export default Content;
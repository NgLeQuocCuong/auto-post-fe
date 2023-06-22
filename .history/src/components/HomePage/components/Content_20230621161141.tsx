import { useState, memo, FC } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const Content: FC = memo(() => {
    const [value, setValue] 
    return (
        <ReactQuill theme="snow" value={value} onChange={setValue} />;
    )
});

Content.displayName = 'ContentComponent';

export default Content;
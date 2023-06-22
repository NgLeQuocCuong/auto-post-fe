import { useState, memo, FC } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const Content: FC = memo(() => {
    return (
        <div></div>
    )
});

Content.displayName = 'ContentComponent';

export default Content;
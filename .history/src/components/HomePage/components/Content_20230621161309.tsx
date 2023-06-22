import { useState, memo, FC } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const Content: FC = memo(() => {
    const [value, setValue] = useState('');
    return <ReactQuill theme="snow" value={value} onChange={setValue} className='contentWrapper'/>;
});

Content.displayName = 'ContentComponent';

export default Content;
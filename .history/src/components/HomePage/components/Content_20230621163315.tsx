import { useState, memo, FC } from 'react';
import ImageUpload from "components/image/ImageUpload"
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import '../style.scss';

const Content: FC = memo(() => {
    const [value, setValue] = useState('');
    return <ReactQuill theme="snow" value={value} onChange={setValue} className='contentwrapper'/>;
});

Content.displayName = 'ContentComponent';

export default Content;
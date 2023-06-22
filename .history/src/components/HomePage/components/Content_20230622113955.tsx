import { useState, memo, FC } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import '../style.scss';
// Quill.register("modules/imageUploader", ImageUploader);

const Content: FC = memo(() => {
    const [value, setValue] = useState('');
    const modules = {
        toolbar: [
            ['bold', 'italic', 'underline', 'strike', 'blockquote'],
            [{ list: 'ordered' }, { list: 'bullet' }],
            [{ header: [1, 2, 3, 4, 5, 6, false] }],
            ['link', 'image',],
        ],
    }
    const formats = [
        'header',
        'font',
        'size',
        'bold',
        'italic',
        'underline',
        'strike',
        'blockquote',
        'list',
        'bullet',
        'indent',
        'link',
        'image',
        'color',
        'size',
        'video',
        'align',
        'background',
        'direction',
        'code-block',
        'code',
        ];
    
    return (
        <div className = 'content'>
            <ReactQuill formats={formats} modules={modules} theme="snow" value={value} onChange={setValue} className='contentwrapper'/>
        </div>
    );
});

Content.displayName = 'ContentComponent';

export default Content;
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
            ['link', 'image'],
        ],
    }
    
    return (
        <div className='contentwrapper'>
            <ReactQuill 
                modules={modules} 
                theme="snow" 
                value={value} 
                onChange={setValue} 
                className='contentwrapper__content'
                placeholder='Nhập nội dung ...'
            />
        </div>
    );
});

Content.displayName = 'ContentComponent';

export default Content;
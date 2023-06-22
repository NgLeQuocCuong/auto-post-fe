import { useState, memo, FC } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import '../style.scss';
// Quill.register("modules/imageUploader", ImageUploader);

const Content: FC = memo(() => {
    const [value, setValue] = useState('');
    const modules = {
        toolbar: [
            [{ header: [1, 2, false] }],
            ['bold', 'italic', 'underline', 'strike', 'blockquote'],
            [{ list: 'ordered' }, { list: 'bullet' }],
            [{ align: '' }, { align: 'center' }, { align: 'right' }, { align: 'justify' }],
            ['link', 'image'],
          ],
    }
    const formats = [
        'header',
        'bold',
        'italic',
        'underline',
        'strike',
        'blockquote',
        'list',
        'indent',
        'align',
      ];
    
    return <ReactQuill formats={formats} modules={modules} theme="snow" value={value} onChange={setValue} className='contentwrapper'/>;
});

Content.displayName = 'ContentComponent';

export default Content;
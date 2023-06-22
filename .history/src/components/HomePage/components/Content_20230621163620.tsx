import { useState, memo, FC, useMemo } from 'react';
import ImageUploader from "quill-image-uploader";
import ReactQuill, {Quill} from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import '../style.scss';
Quill.register("modules/imageUploader", ImageUploader);

const Content: FC = memo(() => {
    const [value, setValue] = useState('');
    const modules = useMemo(
        () => ({
          toolbar: [
            ["bold", "italic", "underline", "strike"],
            ["blockquote"],
            [{ header: 1 }, { header: 2 }], // custom button values
            [{ list: "ordered" }, { list: "bullet" }],
            [{ header: [1, 2, 3, 4, 5, 6, false] }],
            ["link", "image"],
          ],
          imageUploader: {
            // imgbbAPI
            upload: async (file) => {
              const bodyFormData = new FormData();
              console.log("upload: ~ bodyFormData", bodyFormData);
              bodyFormData.append("image", file);
              const response = await axios({
                method: "post",
                url: "https://api.imgbb.com/1/upload?key=03b324873b509a85fe349d9a88c6c98d",
                data: bodyFormData,
                headers: {
                  "Content-Type": "multipart/form-data",
                },
              });
              return response.data.data.url;
            },
          },
        }),
        []
      );
    return <ReactQuill theme="snow" value={value} onChange={setValue} className='contentwrapper'/>;
});

Content.displayName = 'ContentComponent';

export default Content;
import { PlusOutlined } from '@ant-design/icons';
import { Modal, Upload } from 'antd';
import type { RcFile, UploadProps } from 'antd/es/upload';
import type { UploadFile } from 'antd/es/upload/interface';
import usePostPageContext from 'components/PostPage/components/Context';
import { BodyType } from 'modules/apis';
import React, { useState } from 'react';
import userService from 'services/userService';

const getBase64 = (file: RcFile): Promise<string> =>
    new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result as string);
        reader.onerror = error => reject(error);
    });

const App: React.FC = () => {
    const [previewOpen, setPreviewOpen] = useState(false);
    const [previewImage, setPreviewImage] = useState('');
    const [previewTitle, setPreviewTitle] = useState('');
    const [fileList, setFileList] = useState<UploadFile[]>([]);

    const handleCancel = () => setPreviewOpen(false);

    const handlePreview = async (file: UploadFile) => {
        if (!file.url && !file.preview) {
            file.preview = await getBase64(file.originFileObj as RcFile);
        }

        setPreviewImage(file.url || (file.preview as string));
        setPreviewOpen(true);
        setPreviewTitle(
            file.name || file.url!.substring(file.url!.lastIndexOf('/') + 1)
        );
    };

    const { setImages } = usePostPageContext();

    const handleChange: UploadProps['onChange'] = async ({
        fileList: newFileList,
    }) => {
        if (newFileList) {
            setFileList(newFileList);
            const lastFile = newFileList[newFileList.length - 1];
            if (lastFile.percent === 100 && lastFile.status === 'done') {
                const body = {
                    file: lastFile.originFileObj,
                };

                const response = await userService.upImg(body, {
                    bodyType: BodyType.FORM_DATA,
                });
                if (response.isSuccess) {
                    setImages(response.data.uid);
                }
            }
        }
    };

    const uploadButton = (
        <div>
            <PlusOutlined />
            <div style={{ marginTop: 8 }}>Upload</div>
        </div>
    );
    return (
        <div className="uploadwrapper">
            {/* <p className='uload'></p> */}
            <Upload
                action="http://192.168.30.109:8000/api/images/upload" //link server can change
                listType="picture-card"
                fileList={fileList}
                method="POST"
                onPreview={handlePreview}
                onChange={handleChange}
            >
                {uploadButton}
            </Upload>
            <Modal
                open={previewOpen}
                title={previewTitle}
                footer={null}
                onCancel={handleCancel}
            >
                <img
                    alt="example"
                    style={{ width: '100%' }}
                    src={previewImage}
                />
            </Modal>
        </div>
    );
};

export default App;

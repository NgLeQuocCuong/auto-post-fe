import { useState, FC, memo } from 'react';
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';
import { Modal, Upload, Image } from 'antd';
import Message from 'components/Message';
import type { UploadChangeParam } from 'antd/es/upload';
import { BodyType } from 'modules/apis';
import type { RcFile, UploadProps } from 'antd/es/upload';
import type { UploadFile } from 'antd/es/upload/interface';
import userService from 'services/userService';
import { FileItem } from 'components/CommonInput/type';
import './style.scss';

const getBase64 = (file: RcFile): Promise<string> =>
    new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result as string);
        reader.onerror = error => reject(error);
    });

const beforeUpload = (file: RcFile) => {
    const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
    if (!isJpgOrPng) {
        Message.sendError('Chỉ được upload file JPG/PNG!');
    }
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
        Message.sendError('Hình ảnh phải nhỏ hơn 2MB!');
    }
    return isJpgOrPng && isLt2M;
};

const FileInputAvatar: FC<FileItem> = memo(({ url }) => {
    const [previewOpen, setPreviewOpen] = useState(false);
    const [previewImage, setPreviewImage] = useState('');
    const [previewTitle, setPreviewTitle] = useState('');
    const [loading, setLoading] = useState(false);
    const [imageUrl, setImageUrl] = useState(url);

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

    const handleChange: UploadProps['onChange'] = async (
        info: UploadChangeParam<UploadFile>
    ) => {
        if (info.file.status === 'uploading') {
            setLoading(true);
            return;
        }
        if (info.file.status === 'done') {
            getBase64(info.file.originFileObj as RcFile);
            const body = {
                file: info.file.originFileObj,
            };

            const response = await userService.upImg(body, {
                bodyType: BodyType.FORM_DATA,
            });
            if (response.isSuccess) {
                setLoading(false);
                setImageUrl(response.data.url);
            }
        }
    };

    const uploadButton = (
        <div className="overlay-text">
            {loading ? <LoadingOutlined /> : <PlusOutlined />}
            <div style={{ marginTop: 8 }}>Thay ảnh</div>
        </div>
    );

    const API_URL = process.env.REACT_APP_API_URL + '/api/images/upload'; // TODO: CHANGE THIS
    return (
        <div className="input-avatar-wrapper">
            <Upload
                action={API_URL}
                name="avatar"
                listType="picture-circle"
                className="avatar-uploader"
                showUploadList={false}
                beforeUpload={beforeUpload}
                onChange={handleChange}
                onPreview={handlePreview}
            >
                <Image
                    preview={false}
                    width={94}
                    height={94}
                    src={imageUrl}
                    className="input-avatar-wrapper__avatar--round input-avatar-wrapper__avatar--fit"
                    alt="Avatar"
                />
                {uploadButton}
            </Upload>
            <Modal
                open={previewOpen}
                title={previewTitle}
                footer={null}
                onCancel={handleCancel}
            >
                <img
                    alt="Avatar"
                    style={{ width: '100%' }}
                    src={previewImage}
                />
            </Modal>
        </div>
    );
});

FileInputAvatar.displayName = 'FileInput';

export default FileInputAvatar;

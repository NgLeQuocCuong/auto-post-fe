import { useState, FC, memo, useCallback } from 'react';
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';
import { Modal, Upload, Image, UploadFile } from 'antd';
import type { UploadChangeParam } from 'antd/es/upload';
import Message from 'components/Message';
import './style.scss';

const getBase64 = (file: File, callback: (url: string) => void) => {
    const reader = new FileReader();
    reader.onload = () => callback(reader.result as string);
    reader.readAsDataURL(file);
};

interface Props {
    imgSrc: string;
    imgChange: Function;
}

const FileInputAvatar: FC<Props> = memo(({ imgSrc, imgChange }) => {
    const beforeUpload = (file: File) => {
        const isJpgOrPng =
            file.type === 'image/jpeg' || file.type === 'image/png';
        if (!isJpgOrPng) {
            Message.sendError('Ảnh phải là định dạng JPG hoặc PNG!');
        }
        const isLt2M = file.size / 1024 / 1024 < 2;
        if (isJpgOrPng && !isLt2M) {
            Message.sendError('Dung lượng ảnh phải nhỏ hơn 2MB!');
        }
        return isJpgOrPng && isLt2M;
    };

    const [previewOpen, setPreviewOpen] = useState(false);
    const [previewImage, setPreviewImage] = useState('');
    const [previewTitle, setPreviewTitle] = useState('');
    const [loading, setLoading] = useState(false);
    const [imageUrl, setImageUrl] = useState(imgSrc);

    const handleCancel = () => setPreviewOpen(false);

    const handlePreview = useCallback((file: UploadFile) => {
        setPreviewOpen(true);
        setPreviewTitle(file.name);
    }, []);

    const handleChange = useCallback(
        (info: UploadChangeParam) => {
            if (info.file.status === 'uploading') {
                setLoading(true);
                return;
            }
            if (info.file.status === 'done') {
                getBase64(info.file.originFileObj as File, url => {
                    setPreviewImage(url);
                    setLoading(false);
                    setImageUrl(url);
                });
                imgChange(info.file.originFileObj as File);
            }
        },
        [imgChange]
    );

    const uploadButton = (
        <div className="overlay-text">
            {loading ? <LoadingOutlined /> : <PlusOutlined />}
            <div style={{ marginTop: 8 }}>Thay ảnh</div>
        </div>
    );

    const customRequest = ({ onSuccess }: any) => {
        onSuccess();
    };

    return (
        <div className="input-avatar-wrapper">
            <Upload
                customRequest={customRequest}
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

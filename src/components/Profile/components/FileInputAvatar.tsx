import { useState, FC, memo } from 'react';
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';
import { Modal, Upload, Image } from 'antd';
import Message from 'components/Message';
import type { UploadChangeParam } from 'antd/es/upload';
import type { RcFile, UploadProps } from 'antd/es/upload';
import type { UploadFile } from 'antd/es/upload/interface';
import './style.scss';

const getBase64 = (file: RcFile, callback: (url: string) => void) => {
    const reader = new FileReader();
    reader.onload = () => callback(reader.result as string);
    reader.readAsDataURL(file);
};

interface Props {
    imgSrc: string;
    imgChange: any;
}

const FileInputAvatar: FC<Props> = memo(({ imgSrc, imgChange }) => {
    const beforeUpload = (file: RcFile) => {
        const isJpgOrPng =
            file.type === 'image/jpeg' || file.type === 'image/png';
        if (!isJpgOrPng) {
            Message.sendError('Chỉ được upload file JPG/PNG!');
        }
        const isLt2M = file.size / 1024 / 1024 < 2;
        if (!isLt2M) {
            Message.sendError('Hình ảnh phải nhỏ hơn 2MB!');
        }
        const isValid = isJpgOrPng && isLt2M;

        return isValid;
    };

    const [previewOpen, setPreviewOpen] = useState(false);
    const [previewImage, setPreviewImage] = useState('');
    const [previewTitle, setPreviewTitle] = useState('');
    const [loading, setLoading] = useState(false);
    const [imageUrl, setImageUrl] = useState(imgSrc);

    const handleCancel = () => setPreviewOpen(false);

    const handlePreview = async (file: UploadFile) => {
        setPreviewOpen(true);
        setPreviewTitle(file.name);
    };

    const handleChange: UploadProps['onChange'] = async (
        info: UploadChangeParam<UploadFile>
    ) => {
        if (info.file.status === 'uploading') {
            setLoading(true);
            return;
        }
        if (info.file.status === 'done') {
            getBase64(info.file.originFileObj as RcFile, url => {
                setPreviewImage(url);
                setLoading(false);
                setImageUrl(url);
            });
            imgChange(info.file.originFileObj as RcFile);
        }
    };

    const uploadButton = (
        <div className="overlay-text">
            {loading ? <LoadingOutlined /> : <PlusOutlined />}
            <div style={{ marginTop: 8 }}>Thay ảnh</div>
        </div>
    );
    const dummyRequest = ({ onSuccess }: any) => {
        setTimeout(() => {
            onSuccess('ok');
        }, 0);
    };
    return (
        <div className="input-avatar-wrapper">
            <Upload
                customRequest={dummyRequest} // Use customRequest instead of "action" to fix calling upload api twice
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

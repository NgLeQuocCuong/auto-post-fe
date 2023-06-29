import { Modal } from 'antd';

class Popup {
    public static sendSuccess = (
        title: string | undefined,
        content: string | undefined
    ) => {
        Modal.success({
            title: title,
            content: content,
        });
    };
    public static sendError = (
        title: string | undefined,
        content: string | undefined
    ) => {
        Modal.error({
            title: title,
            content: content,
        });
    };
    public static sendWarning = (
        title: string | undefined,
        content: string | undefined
    ) => {
        Modal.warning({
            title: title,
            content: content,
        });
    };
    public static sendInfo = (
        title: string | undefined,
        content: string | undefined
    ) => {
        Modal.info({
            title: title,
            content: content,
        });
    };
    public static sendConfirm = (
        title: string | undefined,
        content: string | undefined,
        handleOk?: () => void,
        handleCancel?: () => void
    ) => {
        Modal.confirm({
            title: title,
            content: content,
            onOk: handleOk,
            onCancel: handleCancel,
        });
    };
}

export default Popup;

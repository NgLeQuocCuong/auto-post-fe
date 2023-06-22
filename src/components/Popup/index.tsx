import { Modal } from 'antd';

class Popup {
    public static popupSuccess = (
        title: string | undefined,
        content: string | undefined,

    ) => {
        Modal.success({
            title: title,
            content: content,
        });
    };
    public static popupError = (
        title: string | undefined,
        content: string | undefined,
    ) => {
        Modal.error({
            title: title,
            content: content,
        });
    };
    public static popupWarning = (
        title: string | undefined,
        content: string | undefined,
    ) => {
        Modal.warning({
            title: title,
            content: content,
        });
    };
    public static popupConfirm = (
        title: string | undefined,
        content: string | undefined,
        handleOk?: () => void,
        handleCancel?: () => void,
    ) => {
        Modal.confirm({
            title: title,
            content: content,
            onOk: handleOk,
            onCancel: handleCancel,
        });
    }
}

export default Popup;
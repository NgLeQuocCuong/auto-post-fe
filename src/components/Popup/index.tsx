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
        { ...props }
    ) => {
        Modal.confirm({
            title: title,
            content: content,
            ...props,
        });
    };
}

export default Popup;

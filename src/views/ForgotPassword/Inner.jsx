import { Button, Form, Spin, Statistic } from 'antd';
import AccountLayout from 'layouts/Account';
import { memo, useMemo, useCallback, useState, useEffect } from 'react';
import AccountInput from 'layouts/Account/AccountInput';
import moment from 'moment';
import Message from 'components/Message';
const { Countdown } = Statistic;
const Inner = memo(({ handleForgotPassword, loading }) => {
    const COOLDOWN_TIME = 60; //In seconds
    const [isCooldown, setIsCooldown] = useState(false);
    // Validate rules
    const emailRules = useMemo(
        () => [
            {
                type: 'email',
                message: 'Định dạng email không hợp lệ.',
            },
        ],
        []
    );
    const startCooldown = useCallback(() => {
        localStorage.setItem('resendEmailCooldown', moment().format());
        setIsCooldown(true);
    }, []);
    const finishCooldown = useCallback(() => {
        localStorage.removeItem('resendEmailCooldown');
        setIsCooldown(false);
    }, []);
    const handleFinish = useCallback(
        values => {
            handleForgotPassword(values).then(res => {
                if (res.isSuccess) {
                    Message.sendSuccess('Vui lòng kiểm tra email của bạn.');
                    startCooldown();
                }
            });
        },
        [handleForgotPassword, startCooldown]
    );
    const initTime = useMemo(() => {
        if (isCooldown) {
            const storedTime = localStorage.getItem('resendEmailCooldown');
            if (storedTime) {
                const secondsPassed = moment().diff(storedTime, 'seconds');
                const diffTime = COOLDOWN_TIME - secondsPassed;
                if (diffTime > 0) {
                    return diffTime;
                }
                return 0;
            }
        }
        return 0;
    }, [isCooldown]);
    //Check condition when reload page
    useEffect(() => {
        const storedTime = localStorage.getItem('resendEmailCooldown');
        if (storedTime) {
            setIsCooldown(true);
        }
    }, [startCooldown]);
    return (
        <Spin spinning={loading} size="large">
            <AccountLayout title="Lấy lại mật khẩu">
                <Form
                    className="account-layout__input"
                    onFinish={handleFinish}
                    layout="vertical"
                >
                    <AccountInput
                        name="email"
                        label="Email đã đăng ký"
                        type="email"
                        placeholder="Email đã đăng ký"
                        rules={emailRules}
                        required
                    />
                    <Button
                        className="account-layout-button"
                        type="primary"
                        htmlType="submit"
                        disabled={initTime > 0}
                    >
                        Gửi email
                    </Button>
                    {initTime > 0 && (
                        <div className="resend-email">
                            <Countdown
                                className="resend-email__countdown"
                                value={moment().add(initTime, 'seconds')}
                                prefix="Bạn có thể gửi lại email sau "
                                suffix=" giây."
                                format="ss"
                                onFinish={finishCooldown}
                            />
                        </div>
                    )}
                </Form>
            </AccountLayout>
        </Spin>
    );
});

Inner.displayName = 'Forgot Password Inner';

export default Inner;

import { Button, Form, Spin, Statistic } from 'antd';
import AccountLayout from 'layouts/Account';
import { memo, useMemo, useCallback, useState, useEffect } from 'react';
import AccountInput from 'layouts/Account/AccountInput';

const { Countdown } = Statistic;
const Inner = memo(({ handleForgotPassword, onLoading }) => {
    const COOLDOWN_TIME = 60; //In seconds
    const [remainingTime, setRemainingTime] = useState(
        parseInt(localStorage.getItem('remainingTime')) || COOLDOWN_TIME
    );
    const [isCooldown, setIsCooldown] = useState(
        localStorage.getItem('isCooldown') === 'true' || false
    );
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

    const handleFinish = useCallback(
        values => {
            handleForgotPassword(values).then(res => {
                if (res.isSuccess) {
                    setIsCooldown(true);
                    setRemainingTime(COOLDOWN_TIME);
                    localStorage.setItem('remainingTime', COOLDOWN_TIME);
                    localStorage.setItem('isCooldown', true);
                }
            });
        },
        [handleForgotPassword]
    );

    useEffect(() => {
        let countdownId;
        if (isCooldown) {
            countdownId = setTimeout(() => {
                setRemainingTime(prevTime => prevTime - 1);
            }, 1000);
        }
        return () => clearTimeout(countdownId);
    }, [isCooldown, remainingTime]);

    useEffect(() => {
        if (remainingTime === 0) {
            setIsCooldown(false);
            localStorage.removeItem('remainingTime');
            localStorage.removeItem('isCooldown');
        } else {
            localStorage.setItem('remainingTime', remainingTime);
            localStorage.setItem('isCooldown', true);
        }
    }, [remainingTime]);

    return (
        <Spin spinning={onLoading} size="large">
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
                        disabled={isCooldown}
                    >
                        Gửi email
                    </Button>
                    {isCooldown && (
                        <div className="resend-email">
                            <span>Bạn có thể gửi lại email sau</span>
                            <Countdown
                                className="resend-email__countdown"
                                value={Date.now() + 1000 * remainingTime}
                                format="ss giây."
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

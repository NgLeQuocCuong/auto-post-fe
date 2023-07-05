import { Button, Form, Spin, Statistic } from 'antd';
import AccountLayout from 'layouts/Account';
import { memo, useMemo, useCallback, useState, useEffect } from 'react';
import AccountInput from 'layouts/Account/AccountInput';
import moment from 'moment';
const { Countdown } = Statistic;
const Inner = memo(({ handleForgotPassword, loading }) => {
    const COOLDOWN_TIME = 60; //In seconds
    const [remainingTime, setRemainingTime] = useState(COOLDOWN_TIME);
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
        setIsCooldown(true);
        localStorage.setItem('resendEmailCooldown', moment().format());
    }, []);
    const handleCooldownFinish = useCallback(() => {
        setIsCooldown(false);
        localStorage.removeItem('resendEmailCooldown');
    }, []);
    const handleFinish = useCallback(
        values => {
            handleForgotPassword(values).then(res => {
                if (res.isSuccess) {
                    startCooldown();
                }
            });
        },
        [handleForgotPassword, startCooldown]
    );

    useEffect(() => {
        const storedTime = localStorage.getItem('resendEmailCooldown');
        if (storedTime) {
            const secondsPassed = moment().diff(storedTime, 'seconds');
            const diffTime = COOLDOWN_TIME - secondsPassed;
            if (diffTime > 0) {
                setRemainingTime(diffTime);
                startCooldown();
            } else {
                setIsCooldown(false);
                localStorage.removeItem('resendEmailCooldown');
            }
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
                        disabled={isCooldown}
                    >
                        Gửi email
                    </Button>
                    {isCooldown && (
                        <div className="resend-email">
                            <Countdown
                                className="resend-email__countdown"
                                value={moment().add(remainingTime, 'seconds')}
                                prefix="Bạn có thể gửi lại email sau "
                                suffix=" giây."
                                format="ss"
                                onFinish={handleCooldownFinish}
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

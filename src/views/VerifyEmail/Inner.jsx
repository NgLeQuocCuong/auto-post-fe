import { Button, Form, Spin, Statistic } from 'antd';
import AccountLayout from 'layouts/Account';
import { memo, useCallback, useState, useEffect } from 'react';
import AccountInput from 'layouts/Account/AccountInput';
import userService from 'services/userService';
import { values } from 'lodash';
import routeConstants from 'route/routeConstant';
import { useNavigate } from 'react-router-dom';

const { Countdown } = Statistic;
const Inner = memo(
    ({ handleCheckVerifyEmail, handleSendVerifyEmail, onLoading }) => {
        const COOLDOWN_TIME = 60; //In seconds
        const [remainingVerifyTime, setremainingVerifyTime] = useState(
            parseInt(localStorage.getItem('remainingVerifyTime')) ||
                COOLDOWN_TIME
        );
        const [isVerifyCooldown, setIsVerifyCooldown] = useState(
            localStorage.getItem('isVerifyCooldown') === 'true' || false
        );
        useEffect(() => {
            let countdownId;
            if (isVerifyCooldown) {
                countdownId = setTimeout(() => {
                    setremainingVerifyTime(prevTime => prevTime - 1);
                }, 1000);
            }
            return () => clearTimeout(countdownId);
        }, [isVerifyCooldown, remainingVerifyTime]);

        useEffect(() => {
            if (remainingVerifyTime === 0) {
                setIsVerifyCooldown(false);
                localStorage.removeItem('verifyremainingVerifyTime');
                localStorage.removeItem('isVerifyCooldown');
            } else {
                localStorage.setItem(
                    'remainingVerifyTime',
                    remainingVerifyTime
                );
                localStorage.setItem('isVerifyCooldown', true);
            }
        }, [remainingVerifyTime]);
        const navigate = useNavigate();
        const handleFinish = useCallback(
            values => {
                handleCheckVerifyEmail(values).then(() => {
                    navigate(routeConstants.LOGIN);
                });
            },
            [handleCheckVerifyEmail, navigate]
        );
        const handleCooldown = useCallback(() => {
            setIsVerifyCooldown(true);
            setremainingVerifyTime(COOLDOWN_TIME);
            localStorage.setItem('remainingVerifyTime', COOLDOWN_TIME);
            localStorage.setItem('isVerifyCooldown', true);
            handleSendVerifyEmail(values);
        }, [handleSendVerifyEmail]);
        return (
            <Spin spinning={onLoading} size="large">
                <AccountLayout title="Xác thực email">
                    <Form
                        className="account-layout__input"
                        onFinish={handleFinish}
                        layout="vertical"
                    >
                        <AccountInput
                            name="token"
                            label="Mã xác thực"
                            type="text"
                            placeholder="Mã xác thực"
                            rules={[{}]}
                        />
                        <Button
                            className="account-layout-button"
                            type="primary"
                            htmlType="submit"
                        >
                            Xác nhận
                        </Button>

                        <div className="resend-email">
                            <Button
                                type="link"
                                onClick={handleCooldown}
                                disabled={isVerifyCooldown}
                                className={
                                    isVerifyCooldown ? 'button-hidden' : ''
                                }
                            >
                                Nhấn vào để gửi lại mã xác thực.
                            </Button>
                            {isVerifyCooldown && (
                                <>
                                    <span>Bạn có thể gửi lại mã sau</span>
                                    <Countdown
                                        className="resend-email__countdown"
                                        value={
                                            Date.now() +
                                            1000 * remainingVerifyTime
                                        }
                                        format="ss giây."
                                    />
                                </>
                            )}
                        </div>
                    </Form>
                </AccountLayout>
            </Spin>
        );
    }
);

Inner.displayName = 'Verify Email Inner';

export default Inner;

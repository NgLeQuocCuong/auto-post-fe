import FooterText from 'components/FooterText/FooterText';
import LargeLogo from 'icons/LargeLogo';
import { memo } from 'react';
import FormReset from 'views/ResetPassword/components/FormReset';

const Inner = memo(({ handleResetPassword }) => {
    return (
        <div className="forgot">
            <div className="forgot__left">
                <div>
                    <LargeLogo className="forgot__left--logo" />
                    <h2 className="forgot__left--title">Đặt lại mật khẩu</h2>
                    <FormReset handleResetPassword={handleResetPassword} />
                </div>
                <FooterText />
            </div>
            <div className="forgot__right"></div>
        </div>
    );
});

Inner.displayName = 'Reset Password Inner';

export default Inner;

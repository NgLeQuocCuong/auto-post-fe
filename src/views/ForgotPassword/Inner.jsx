import LargeLogo from 'icons/LargeLogo';
import { memo } from 'react';
import FooterText from 'components/FooterText/FooterText';
import FormForgot from 'views/ForgotPassword/components/FormForgot';

const ForgotPassword = memo(({ handleForgotPassword }) => {
    // TODO: Add AccountLayout
    return (
        <div className="forgot">
            <div className="forgot__left">
                <div>
                    <LargeLogo className="forgot__left--logo" />
                    <h2 className="forgot__left--title">Đặt lại mật khẩu</h2>
                    <FormForgot handleForgotPassword={handleForgotPassword} />
                </div>
                <FooterText />
            </div>
            <div className="forgot__right"></div>
        </div>
    );
});

ForgotPassword.displayName = 'Forgot Password Page';

export default ForgotPassword;

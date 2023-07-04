import { FC, memo } from 'react';
import './style.scss';

const FooterText: FC = memo(() => {
    return (
        <div className="forgot__left--footer">
            © 2023 AutoPost is a product of Horus Co., Ltd
        </div>
    );
});

FooterText.displayName = 'FooterText Component';

export default FooterText;

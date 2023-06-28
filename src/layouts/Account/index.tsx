import { FC, PropsWithChildren, memo } from 'react';
import './index.scss';
import AutopostLogo48 from 'assets/images/AutopostLogo48';
interface Props {
    title?: string;
    subTitle?: string;
}

const AccountLayout: FC<PropsWithChildren<Props>> = memo(
    ({ children, title, subTitle }) => {
        return (
            <div className="account-layout-container">
                <div className="account-layout__left">
                    <div className="account-layout__autopost-logo">
                        <AutopostLogo48 />
                    </div>
                    <div className="input__title">{title}</div>
                    {children}
                    <div className="account-layout__footer">
                        © 2023 AutoPost is a product of Horus Co., Ltd
                    </div>
                </div>
                <div className="account-layout__right">
                    <img
                        src={require('assets/images/AccountLayoutImage.png')}
                        alt="Account layout"
                    />
                </div>
            </div>
        );
    }
);
AccountLayout.displayName = 'AccountLayout';

export default AccountLayout;

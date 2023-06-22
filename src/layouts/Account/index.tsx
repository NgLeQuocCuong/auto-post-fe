import { FC, PropsWithChildren, memo, useEffect } from 'react';
import './index.scss';

interface Props {
    title: string;
    subTitle?: string;
}

const AccountLayout: FC<PropsWithChildren<Props>> = memo(
    ({ children, title, subTitle }) => {
        useEffect(() => {
            document.title = title;
            }, [title]);
        return children;
    }
);
AccountLayout.displayName = 'AccountLayout';

export default AccountLayout;

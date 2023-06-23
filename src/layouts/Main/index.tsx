import { FC, PropsWithChildren, memo } from 'react';
import './index.scss';
import Header from './Header';

interface Props {
    title?: string;
    subTitle?: string;
}

const MainLayout: FC<PropsWithChildren<Props>> = memo(({ children }) => {
    return (
        <div>
            <Header />
            {children}
        </div>
    );
});
MainLayout.displayName = 'MainLayout';

export default MainLayout;

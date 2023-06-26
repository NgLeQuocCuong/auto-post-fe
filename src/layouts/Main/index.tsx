import {
    FC,
    PropsWithChildren,
    memo,
    useCallback,
    useEffect,
    useState,
} from 'react';
import './index.scss';
import userService from 'services/userService';
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

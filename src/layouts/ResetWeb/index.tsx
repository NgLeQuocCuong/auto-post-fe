import { FC, PropsWithChildren, memo } from 'react';
import './index.scss';
import Header from './Header';

interface Props {
    title?: string;
    subTitle?: string;
}

const RSPLayout: FC<PropsWithChildren<Props>> = memo(
    ({ children, title, subTitle }) => {
        return (
            <div>
                <Header />
                {children}
            </div>
        );
    }
);
RSPLayout.displayName = 'RSPLayout';

export default RSPLayout;

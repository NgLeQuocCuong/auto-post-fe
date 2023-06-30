import { FC, PropsWithChildren, memo } from 'react';
import '../style.scss';

const Wrapper: FC<PropsWithChildren> = memo(({ children }) => {
    return (
        <div className="wrapper">
            <div className="wrapper__content">{children}</div>
        </div>
    );
});

Wrapper.displayName = 'WrapperLayout';

export default Wrapper;

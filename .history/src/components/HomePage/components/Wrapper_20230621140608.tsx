import {FC, PropsWithChildren, memo} from 'react';

const Wrapper: FC<PropsWithChildren> = memo(
    ({ children }) => {
        return (
            <div>
                {children}
            </div>
        )
    }
);

Wrapper.displayName = 'WrapperLayout';

export default Wrapper;
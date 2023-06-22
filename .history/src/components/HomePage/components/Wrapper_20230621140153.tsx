import {FC, PropsWithChildren, memo} from 'react';

const Wrapper: FC<PropsWithChildren> = memo(
    ({ children }) => {
        return children;
    }
);

Wrapper.displayName = 'WrapperLayout';

export default Wrapper;
import {FC, PropsWithChildren, memo} from 'react';

const Wrapper: FC<PropsWithChildren> = memo(
    ({ children, title, subTitle }) => {
        return children;
    }
);

export default Wrapper;
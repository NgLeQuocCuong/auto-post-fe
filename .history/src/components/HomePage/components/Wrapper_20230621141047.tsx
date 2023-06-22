import {FC, PropsWithChildren, memo} from 'react';


const Wrapper: FC<PropsWithChildren> = memo(
    ({ children }) => {
        return (
            <div className='wrapper'>
                {children}
            </div>
        )
    }
);

Wrapper.displayName = 'WrapperLayout';

export default Wrapper;
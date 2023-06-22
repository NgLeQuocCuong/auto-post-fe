import {FC, PropsWithChildren, memo} from 'react';
import '../style.scss';

const Wrapper: FC<PropsWithChildren> = memo(
    ({ children }) => {
        return (
            <div style={{padding: }}>
                <div className='wrapper'>
                    {children}
                </div>
            </div>
        )
    }
);

Wrapper.displayName = 'WrapperLayout';

export default Wrapper;
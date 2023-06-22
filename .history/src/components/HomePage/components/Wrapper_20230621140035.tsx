import {FC, PropsWithChildren, memo} from 'react';

const Wrapper: FC<PropsWithChildren> = memo (
    ({children}) => {
        return children;
    }    
) 

export default Wrapper;
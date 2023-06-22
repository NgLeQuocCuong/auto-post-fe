import {FC, PropsWithChildren, memo} from 'react';

const WebLayout: FC<PropsWithChildren> = memo(
    ({children}) => {
        return children;
    }
)

WebLayout.displayName = 'WebLayout';

export default
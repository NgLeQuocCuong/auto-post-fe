import {FC, PropsWithChildren, memo} from 'react';

const WebLayout: FC<PropsWithChildren> = memo(
    ({children}) => {
        return (
            <div></div>
        )
    }
)

WebLayout.displayName = 'WebLayout';

export default WebLayout;
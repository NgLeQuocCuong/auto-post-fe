import {FC, PropsWithChildren, memo} from 'react';
import { Outlet } from 'react-router-dom';

const WebLayout: FC<PropsWithChildren> = memo(
    ({children}) => {
        return children;
    }
)

WebLayout.displayName = 'WebLayout';

export default WebLayout;
import {FC, PropsWithChildren, memo} from 'react';
import './index.scss';
import Header from 'layouts/Web/components/Header';

const WebLayout: FC<PropsWithChildren> = memo(
    ({children}) => {
        return (
            <div className='container'>
                <div className='wrap--menu'>
                    <Header></Header>
                </div>
                {children}
            </div>
        )
    }
)

WebLayout.displayName = 'Web Layout';

export default WebLayout;
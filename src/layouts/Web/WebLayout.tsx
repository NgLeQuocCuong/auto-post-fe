import {FC, PropsWithChildren, memo} from 'react';
import './index.scss';
import Header from 'components/HomePage/components/Header';

const WebLayout: FC<PropsWithChildren> = memo(
    ({children}) => {
        return (
            <div className='wrap__header'>
                <div className='wrap__header--menu'>
                    <Header></Header>
                </div>
                {children}
            </div>
        )
    }
)

WebLayout.displayName = 'Web Layout';

export default WebLayout;
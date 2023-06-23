import WebLayout from 'layouts/Web/WebLayout';
import {FC, memo} from 'react';
import './style.scss';
import Interact from 'components/HomePage/components/Interact';
import PostInDate from 'components/HomePage/components/PostInDate';

const HomePage: FC = memo(
    () => {
        return (
            <WebLayout>
                <div className='homepage'>
                    <div className='homepage__top'>
                        <div className='homepage__graph'>

                        </div>
                        <Interact/>
                    </div>
                    <PostInDate />
                </div>
            </WebLayout>
        )
    }
)

HomePage.displayName = 'Home Page';

export default HomePage;
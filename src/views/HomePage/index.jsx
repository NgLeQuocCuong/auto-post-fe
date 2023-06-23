import { memo } from 'react';
import Inner from 'views/HomePage/Inner';

const Wrapper = memo(() => {
    return <Inner/>;
});
Wrapper.displayName = 'HomePage';

const HomePage = Wrapper;

export default HomePage;
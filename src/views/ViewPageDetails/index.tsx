import { memo } from 'react';
import Inner from 'views/ViewPageDetails/Inner';
import './style.scss';

const Wrapper = memo(() => {
    return <Inner />;
});
Wrapper.displayName = 'PageDetails';

const ViewPageDetails = Wrapper;

export default ViewPageDetails;

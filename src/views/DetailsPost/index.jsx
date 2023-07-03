import { memo } from "react";
import Inner from "views/DetailsPost/Inner";

const Wrapper = memo(() => {

    return <Inner />;
});
Wrapper.displayName = 'Details Post';

const DetailsPost = Wrapper;

export default DetailsPost;

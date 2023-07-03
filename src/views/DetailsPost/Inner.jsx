import WebLayout from "layouts/Web/WebLayout";
import { memo } from "react";

const Inner = memo(() => {
    return (
        <WebLayout>

        </WebLayout>
    );
});

Inner.displayName = 'Details Post Inner';

export default Inner;

import React, { FC, memo } from 'react';
import '../style.scss';

interface Props {
    interact: number;
    name: string;
}

const InteractData: FC<Props> = memo(({ interact, name }) => {
    return (
        <div className="wrapper__interact--data">
            <span className="wrapper__interact--like">{interact}</span>
            <span className="wrapper__interact--name">{name}</span>
        </div>
    );
});

InteractData.displayName = 'Interact Data Component';

export default InteractData;

import {FC, memo} from 'react';

const items = [
    {
        id: 1,
        name: 'Facebook',
    },
    {
        id: 2,
        name: 'Zalo',
    },
];

const Social: FC = memo(
    () => {
    return (
        {
            items.map((item) => (
                <div>
                    
                </div>
            ))
        }
    )
})


Social.displayName = 'SocialComponet';

export default Social;




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
        <div>
            {
                items.map((item) => (
                    <div key={item.id}>

                    </div>
                ))
            }
        </div>
    )
})


Social.displayName = 'SocialComponent';

export default Social;




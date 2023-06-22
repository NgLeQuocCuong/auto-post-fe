import {FC, memo} from 'react';
import { Button, Checkbox, Input } from 'antd';

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
            {items.map((item) => (
                    <Checkbox type='CHECKBOX' key={item.id}>
                        {item.name}
                    </Checkbox>
            ))}
        </div>
    )
})


Social.displayName = 'SocialComponent';

export default Social;




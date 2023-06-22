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
        <div className=''>
            <span>Nền tảng bạn muốn đăng bài:</span>
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




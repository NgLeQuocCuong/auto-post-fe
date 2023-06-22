import {FC, memo} from 'react';
import { Checkbox } from 'antd';
import '../style.scss';

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
        <div className='wrapper__social'>
            <span className='wrapper__social--title'>Nền tảng bạn muốn đăng bài:</span>
            {items.map((item) => (
                <Checkbox key={item.id}>
                    {item.name}
                </Checkbox>
            ))}
        </div>
    )
})


Social.displayName = 'SocialComponent';

export default Social;




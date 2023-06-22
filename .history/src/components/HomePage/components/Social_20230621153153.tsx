import Checkbox from 'components/CommonInput/components/Checkbox';
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
                        <Checkbox 
                            value="1,2,3"
                            onChange={(value) => console.log(value)}
                            options={[
                            { value: "1", label: "Option 1" },
                            { value: "2", label: "Option 2" },
                            { value: "3", label: "Option 3" },
                            ]}
                            gridOptionLayout={2}
                            dataSeparator=","
                        />
                    </div>
                ))
            }
        </div>
    )
})


Social.displayName = 'SocialComponent';

export default Social;




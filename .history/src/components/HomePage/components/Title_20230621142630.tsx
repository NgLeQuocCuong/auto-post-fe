import {FC, memo} from 'react';
import '../style.scss';
import PenIcon from 'components/HomePage/icons/PenIcon';

interface Props {
    title?: string;
    subTitle?: string;
}

const Title: FC<Props> = memo(
    ({title, subTitle}) => {
        return (
            <div>
                <PenIcon></PenIcon>
                <div>
                    <h2>{title}</h2>
                    <h4>{subTitle}</h4>
                </div>
            </div>
        )
    }
) 

Title.displayName = 'TitleComponent';

export default Title;
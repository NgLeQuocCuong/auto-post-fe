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
            <div className='wrapper__title'>
                <PenIcon></PenIcon>
                <div className='wrapper__title--wrap'>
                    <p className='wrapper__title--main'>{title}</p>
                    <p className='wrapper__title--sub'>{subTitle}</p>
                </div>
            </div>
        )
    }
) 

Title.displayName = 'TitleComponent';

export default Title;
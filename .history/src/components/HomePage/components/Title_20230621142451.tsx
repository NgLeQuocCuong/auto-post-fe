import {FC, memo} from 'react';
import '../style.scss';

interface Props {
    title?: string;
    subTitle?: string;
}

const Title: FC<Props> = memo(
    ({title, subTitle})
) 

export default Title;
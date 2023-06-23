import { FC, memo } from 'react';
import '../style.scss';
import PenIcon from 'components/PageDetails/icons/PenIcon';

interface Props {
    title?: string;
    subTitle?: string;
}

const Title: FC<Props> = memo(({ title, subTitle }) => {
    return (
        <div className="wrapper__title">
            <PenIcon></PenIcon>
            <div className="wrapper__title--wrap">
                <h2 className="wrapper__title--main">{title}</h2>
                <h4 className="wrapper__title--sub">{subTitle}</h4>
            </div>
        </div>
    );
});

Title.displayName = 'TitleComponent';

export default Title;

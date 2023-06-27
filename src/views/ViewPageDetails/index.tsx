import { memo, useEffect } from 'react';
import Inner from 'views/ViewPageDetails/Inner';
import { useState } from 'react';
import './style.scss';
import userService from 'services/userService';
import { useNavigate } from 'react-router-dom';
import { useToken } from 'reducers/token/function';
import routeConstants from 'route/routeConstant';
import { FC } from 'react';
import showdown from 'showdown';
declare module 'showdown';
interface Props {
    postType: string;
    createAt: string;
    uid: string;
}

const Wrapper: FC<Props> = memo(({ uid }) => {
    const navigate = useNavigate();
    const [postType, setpostType] = useState('');
    const [createAt, setcreateAt] = useState('');
    const [content, setContent] = useState('');
    const [imageurls, setImageurls] = useState<string[]>([]);
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const token = useToken();
    const fuid = 'acee37d4-4967-422e-8713-0f0e04644155';
    useEffect(() => {
        if (token) {
            userService.getdetails(fuid).then(res => {
                if (res.isSuccess) {
                    setpostType(res.data.postType);
                    setcreateAt(res.data.createdAt);
                    const converter = new showdown.Converter({
                        disableForced4SpacesIndentedSublists: true,
                    });
                    const formattedContent = converter.makeHtml(
                        res.data.content
                    );
                    setContent(formattedContent);
                    setImageurls(res.data.images);
                    const datetime = new Date(createAt);
                    if (!isNaN(datetime.getTime())) {
                        const dt = datetime.toISOString().split('T')[0];
                        const parts = dt.split('-');
                        setDate(`${parts[2]}/${parts[1]}/${parts[0]}`);
                        setTime(
                            datetime.toLocaleTimeString([], {
                                hour: '2-digit',
                                minute: '2-digit',
                            })
                        );
                    }
                } else {
                    navigate(routeConstants.MAINPAGE);
                }
            });
        } else {
            navigate(routeConstants.LOGIN);
        }
    }, [createAt, navigate, token]);
    return (
        <Inner
            postType={postType}
            date={date}
            time={time}
            content={content}
            uid={fuid}
            imageurls={imageurls}
        />
    );
});
Wrapper.displayName = 'PageDetails';

const ViewPageDetails = Wrapper;

export default ViewPageDetails;

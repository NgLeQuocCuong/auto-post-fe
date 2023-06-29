import { memo, useEffect } from 'react';
import Inner from 'views/ManagementDetail/Inner';
import { useState } from 'react';
import './style.scss';
import postService from 'services/postService';
import { useNavigate, useParams } from 'react-router-dom';
import { useToken } from 'reducers/token/function';
import routeConstants from 'route/routeConstant';
import { FC } from 'react';
import showdown from 'showdown';
declare module 'showdown';
interface Props {
    postType: string;
    createAt: string;
}

const Wrapper: FC<Props> = memo(() => {
    const navigate = useNavigate();
    const [createAt, setcreateAt] = useState('');
    const [content, setContent] = useState('');
    const [imageurls, setImageurls] = useState<string[]>([]);
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [platform, setPlatform] = useState('');
    const [reaction, setReaction] = useState(0);
    const [comment, setComment] = useState(0);
    const token = useToken();
    const { uid } = useParams();
    const fuid = uid ? uid : '';
    useEffect(() => {
        if (token) {
            postService.getManagementDetails(fuid).then(res => {
                if (res.isSuccess) {
                    setcreateAt(res.data.timePosting);
                    setPlatform(res.data.platform);
                    setReaction(res.data.reactions);
                    setComment(res.data.comments);
                    const converter = new showdown.Converter({
                        disableForced4SpacesIndentedSublists: true,
                    });
                    const formattedContent = converter.makeHtml(
                        res.data.content
                    );
                    setContent(formattedContent);
                    setImageurls(
                        res.data.images.map(
                            (item: { source: string }) => item.source
                        )
                    );
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
                    navigate(routeConstants.POSTS_MANAGEMENT);
                }
            });
        } else {
            navigate(routeConstants.LOGIN);
        }
    }, [createAt, navigate, token, fuid]);
    return (
        <Inner
            date={date}
            time={time}
            content={content}
            imageurls={imageurls}
            platform={platform}
            reaction={reaction}
            comment={comment}
        />
    );
});
Wrapper.displayName = 'PageDetails';

const ViewPageDetails = Wrapper;

export default ViewPageDetails;

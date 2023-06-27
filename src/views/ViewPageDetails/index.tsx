import { memo, useEffect } from 'react';
import Inner from 'views/ViewPageDetails/Inner';
import { useState } from 'react';
import './style.scss';
import userService from 'services/userService';
import { useNavigate } from 'react-router-dom';
import { useToken } from 'reducers/token/function';
import routeConstants from 'route/routeConstant';
import { FC } from 'react';
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
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const token = useToken();
    useEffect(() => {
        if (token) {
            userService
                .getdetails('b8e856b3-e41c-481b-b565-8463a0889dd1')
                .then(res => {
                    if (res.isSuccess) {
                        setpostType(res.data.postType);
                        setcreateAt(res.data.createdAt);
                        setContent(res.data.content);
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
    });
    return (
        <Inner postType={postType} date={date} time={time} content={content} />
    );
});
Wrapper.displayName = 'PageDetails';

const ViewPageDetails = Wrapper;

export default ViewPageDetails;

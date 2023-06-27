import { memo, useEffect } from 'react';
import Inner from 'views/ViewPageDetails/Inner';
import { useState } from 'react';
import './style.scss';
import userService from 'services/userService';
import { useNavigate } from 'react-router-dom';
import { getToken } from 'reducers/token/function';
import routeConstants from 'route/routeConstant';
import { FC } from 'react';
interface Props {
    postType: string;
    createAt: string;
}

const Wrapper: FC<Props> = memo(() => {
    const navigate = useNavigate();
    const [postType, setpostType] = useState('');
    const [createAt, setcreateAt] = useState('');
    const uid = '07cc67f4-45d6-494b-adac-09b5cbc7e2b5';
    useEffect(function effectFunction() {
        const token = getToken();
        if (token) {
            (async () => {
                const response = await userService.getdetails(uid);
                setpostType(await response.data.post_type);
                setcreateAt(await response.data.created_at);
            })();
        } else {
            navigate(routeConstants.LOGIN);
        }
    });
    return <Inner postType={postType} createAt={createAt} />;
});
Wrapper.displayName = 'PageDetails';

const ViewPageDetails = Wrapper;

export default ViewPageDetails;

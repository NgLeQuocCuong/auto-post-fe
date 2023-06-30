import { memo, useCallback } from 'react';
import { getToken } from 'reducers/token/function';
import userService from 'services/userService';
import Inner from 'views/HomePage/Inner';

const Wrapper = memo(() => {
    const token = getToken();

    useCallback(
        async data => {
            const headers = {
                Authorization: `Bearer ${token}`,
                'Content-Type': 'application/json',
            };
            const response = await userService.daypost(data, headers);

            return response;
        },
        [token]
    );

    return <Inner />;
});
Wrapper.displayName = 'HomePage';

const HomePage = Wrapper;

export default HomePage;

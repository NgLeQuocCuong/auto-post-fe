import routeConstants from 'route/routeConstant';
import { memo } from 'react';
import './index.scss';
import { NavLink } from 'react-router-dom';
import { Button } from 'antd';

const Logout = memo(() => {
    return (
        <NavLink className="Drop-item" to={routeConstants.LOGOUT}>
            <Button type="link" danger size={'large'}>
                <p id="logout">Đăng xuất</p>
            </Button>
        </NavLink>
    );
});
Logout.displayName = 'Logout';
export default Logout;

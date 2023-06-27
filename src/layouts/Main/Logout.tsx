import routeConstants from 'route/routeConstant';
import { memo } from 'react';
import './index.scss';
import { NavLink } from 'react-router-dom';

const Logout = memo(() => {
    return (
        <NavLink className="Drop-item" to={routeConstants.LOGOUT}>
            <p id="logout">Đăng xuất</p>
        </NavLink>
    );
});
Logout.displayName = 'Logout';
export default Logout;

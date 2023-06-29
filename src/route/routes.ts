import Loadable from 'react-loadable';
import LoadableLoading from 'route/components/LoadableLoading';
import routeConstants from 'route/routeConstant';

interface CommonRoute {
    name: string;
    path: string;
    authorization?: boolean;
    childRoutes?: Route[];
}

interface RedirectRoute extends CommonRoute {
    redirect: string;
}

interface ComponentRoute extends CommonRoute {
    Component: any;
}

type Route = RedirectRoute | ComponentRoute;

const commonLoadable = (loader: any) =>
    Loadable({
        loader,
        loading: LoadableLoading,
    });

const routes: Array<Route> = [
    {
        name: 'Login',
        path: routeConstants.LOGIN,
        Component: commonLoadable(() => import('views/Login')),
    },
    {
        name: 'Change Password',
        path: routeConstants.CHANGE_PASSWORD,
        Component: commonLoadable(() => import('views/ChangePassword')),
    },
    // {
    //     name: 'test',
    //     path: routeConstants.USER_SETTINGS,
    //     Component: commonLoadable(() => import('views/test')),
    // },
    {
        name: 'User Settings',
        path: routeConstants.USER_SETTINGS,
        Component: commonLoadable(() => import('views/UserSettings')),
    },
    {
        name: 'Management Detail',
        path: routeConstants.MANAGEMENT_DETAIL,
        Component: commonLoadable(() => import('views/ManagementDetail')),
    },
    {
        name: '404',
        path: '*',
        redirect: routeConstants.LOGIN,
    },
];

export default routes;

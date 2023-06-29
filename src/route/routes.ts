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
        name: 'PageDetails',
        path: routeConstants.PAGEDETAILS,
        Component: commonLoadable(() => import('views/ViewPageDetails')),
    },
    {
        name: 'Register',
        path: routeConstants.REGISTER,
        Component: commonLoadable(() => import('views/Register')),
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
        name: 'Reset Password',
        path: routeConstants.RESET_PASSWORD,
        Component: commonLoadable(() => import('views/ResetPassword')),
    },
    {
        name: 'Reset Password',
        path: routeConstants.RESET_PASSWORD,
        Component: commonLoadable(() => import('views/ResetPassword')),
    },
    {
        name: 'Reset Password',
        path: routeConstants.RESET_PASSWORD,
        Component: commonLoadable(() => import('views/ResetPassword')),
    },
    {
        name: 'User Settings',
        path: routeConstants.USER_SETTINGS,
        authorization: true,
        Component: commonLoadable(() => import('views/UserSettings')),
    },
    {
        name: 'Management Detail',
        path: routeConstants.MANAGEMENT_DETAIL,
        Component: commonLoadable(() => import('views/ManagementDetail')),
    },
    {
        name: 'Forgot Password',
        path: routeConstants.FORGOT_PASSWORD,
        Component: commonLoadable(() => import('views/ForgotPassword')),
    },
    {
        name: '404',
        path: '*',
        redirect: routeConstants.LOGIN,
    },
];

export default routes;

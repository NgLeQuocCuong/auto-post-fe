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
        name: 'POST_DETAILS',
        path: routeConstants.POST_DETAILS,
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
        authorization: true,
    },
    {
        name: 'Reset Password',
        path: routeConstants.RESET_PASSWORD,
        Component: commonLoadable(() => import('views/ResetPassword')),
    },
    {
        name: 'User Settings',
        path: routeConstants.USER_SETTINGS,
        Component: commonLoadable(() => import('views/UserSettings')),
        authorization: true,
    },
    {
        name: 'Logout',
        path: routeConstants.LOGOUT,
        Component: commonLoadable(() => import('views/Logout')),
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
        name: 'User Update',
        path: routeConstants.USER_UPDATE,
        Component: commonLoadable(() => import('views/UserUpdate')),
        authorization: true,
    },
    {
        name: 'All Posts',
        path: routeConstants.ALL_POSTS,
        Component: commonLoadable(() => import('views/AllPosts')),
        authorization: true,
    },
    {
        name: 'Post Management Of Post',
        path: routeConstants.POST_MANAGEMENT_OF_POST,
        Component: commonLoadable(() => import('views/PostManagementOfPost')),
        authorization: true,
    },
    {
        name: 'Post Management Matrix',
        path: routeConstants.POST_MANAGEMENT_ALL,
        Component: commonLoadable(() => import('views/PostManagementMatrix')),
        authorization: true,
    },
    {
        name: 'Post Page',
        path: routeConstants.POST_PAGE,
        Component: commonLoadable(() => import('views/PostPage')),
        authorization: true,
    },
    {
        name: 'Home Page',
        path: routeConstants.HOME_PAGE,
        Component: commonLoadable(() => import('views/HomePage')),
        authorization: true,
    },
    {
        name: '404',
        path: '*',
        redirect: routeConstants.LOGIN,
    },
];

export default routes;

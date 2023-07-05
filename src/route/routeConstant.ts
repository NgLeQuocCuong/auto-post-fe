const routeConstants = {
    LOGIN: '/login',
    REGISTER: '/register',
    FORGOT_PASSWORD: '/forgot-password',
    ALL_POSTS: '/posts',
    POST_DETAILS: `/posts/:uid`,
    USER_SETTINGS: '/user/settings',
    POST_MANAGEMENT_ALL: '/posts/management', //TODO
    POST_MANAGEMENT_OF_POST: '/posts/management/:uid', //TODO
    UPDATE_POST: '/posts/update/:uid',
    LOGOUT: '/logout',
    CHANGE_PASSWORD: '/user/change-password',
    POST_PAGE: '/post-page',
    USER_UPDATE: '/user/update',
    POSTS_MANAGEMENT: '/posts-management',
    MANAGEMENT_DETAIL: '/posts/management/detail/:uid',
    RESET_PASSWORD: '/reset-password/:slug',
    HOME_PAGE: '/',
    USER: '/user',
};

export default routeConstants;

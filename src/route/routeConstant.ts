const routeConstants = {
    LOGIN: '/login',
    REGISTER: '/register',
    FORGOT_PASSWORD: '/forgot-password',
    ALL_POSTS: '/posts',
    POST_DETAILS: `/post-details/:uid`,
    USER_SETTINGS: '/user-settings',
    POST_MANAGEMENT_ALL: '/post-management', //TODO
    POST_MANAGEMENT_OF_POST: '/post-management/:uid', //TODO
    UPDATE_POST: '/update-post/:uid',
    LOGOUT: '/logout',
    CHANGE_PASSWORD: '/change-password',
    POST_PAGE: '/post-page',
    USER_UPDATE: '/user-update',
    DETAILS_POSTS: '/details-post/:uid',
    POSTS_MANAGEMENT: '/posts-management',
    MANAGEMENT_DETAIL: '/posts-management/detail/:uid',
    RESET_PASSWORD: '/reset-password/:slug',
    HOME_PAGE: '/',
};

export default routeConstants;

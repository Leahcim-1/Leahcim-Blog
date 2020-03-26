export const SHOW_ROUTE = 'SHOW_ROUTE';

export const CHECK_AUTH = 'CHECK_AUTH';

export const GET_USER = 'GET_USER';

export const Auth = {
    IS_Auth: true,
    NOT_AUTH: false
}

export const showRouteName = (routeName) => {
    return {
        type: SHOW_ROUTE,
        routeName,
    }
}

export const checkAuth = (isAuth) => {
    return {
        type: CHECK_AUTH,
        isAuth
    }
}

export const getUser = (user) => {
    return {
        type: CHECK_AUTH,
        user
    }
}
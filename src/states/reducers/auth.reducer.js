import { authConstants } from '../_constants';

let storedUser = JSON.parse(localStorage.getItem('user'))
// 저장된 토큰이 있다면 loggedIn을 true로 하여 PrivateRoute를 통과하도록 한다.
// loggedIn이 false라면 다시 로그인 해야 한다.
const initialState = storedUser ? {  loggedIn: false, data: storedUser } : {loggedIn: false};


export function auth(state = initialState, action){
    switch(action.type){
        case authConstants.LOGIN_REQUEST:
            return {
                loggingIn: true,
                data: action.user
            };
        case authConstants.LOGIN_SUCCESS:
            return {
                loggedIn: true,
                data: action.user
            };
        case authConstants.LOGIN_FAILURE:
            return {
                logInFailed: true,
            };
        case authConstants.LOGOUT:
            return {};
        case authConstants.GET_PROFILE_REQUEST:
            return {
                loading: true
            };
        case authConstants.GET_PROFILE_SUCCESS:
            return {
                loaded: true,
                loggedIn: true,
                data: action.user
            };
        case authConstants.GET_PROFILE_FAILURE:
            return {
                data: state
            };
        case authConstants.UPD_PROFILE_REQUEST:
            return {
                updating: true,
                data: action.user
            };
        case authConstants.UPD_PROFILE_SUCCESS:
            return {
                updated: true,
                data: action.user
            };
        case authConstants.UPD_PROFILE_FAILURE:
            return {
                data: state
            };
        default:
            return state;
    }
}

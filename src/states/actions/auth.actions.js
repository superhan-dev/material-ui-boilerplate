import { authConstants } from '../_constants';
import { authService } from '../_services';
import { alertActions } from '.';
import { history } from '../_helpers';

export const authActions = {
    login,
    logout,
    getMyProfile,
    updateMyProfile,
    updatePassword
};

function login(username, password, from){
    return dispatch => {
        dispatch(reqeust({ username }));

        authService.login(username, password)
            .then(
                user => {
                    console.log("auth login success===============>",user);
                    dispatch(success(user.contents));
                    history.push(from);
                },
                error => {
                    dispatch(failure(error.toString()));
                    dispatch(alertActions.error(error.toString()));
                }
            );
    };

    function reqeust(user) { return { type: authConstants.LOGIN_REQUEST, user}}
    function success(user) { return {type: authConstants.LOGIN_SUCCESS, user}}
    function failure(error) { return {type: authConstants.LOGIN_FAILURE, error}}
}

function logout(){
    authService.logout();
    return { type: authConstants.LOGOUT};
}

function getMyProfile(){
    return dispatch => {
        dispatch(request());

        authService.getMyProfile()
            .then(
                user => {
                    return dispatch(success(user))
                },
                error => dispatch(failure(error.toString()))
            );
    };

    function request() { return { type: authConstants.GET_PROFILE_REQUEST}}
    function success(user) { return { type: authConstants.GET_PROFILE_SUCCESS, user}}
    function failure(error) { return { type: authConstants.GET_PROFILE_FAILURE, error}}
}

function updateMyProfile(formData){
    return dispatch => {
        dispatch(request(formData));

        authService.updateMyProfile(formData)
            .then(
                user => dispatch(success(user.contents)),
                error => dispatch(failure(error.toString()))
            );
    };

    function request(updSomeProf) { return { type: authConstants.UPD_PROFILE_REQUEST}}
    function success(user) { return { type: authConstants.UPD_PROFILE_SUCCESS, user}}
    function failure(error) { return { type: authConstants.UPD_PROFILE_FAILURE, error}}
}


function updatePassword(currentPassword, updatedPassword){
    return dispatch => {
        dispatch(request(currentPassword, updatedPassword));

        authService.updateProfile(currentPassword, updatedPassword)
            .then(
                profile => dispatch(success()),
                error => dispatch(failure(error.toString()))
            );
    };

    function request(updSomeProf) { return { type: authConstants.UPD_PASSWORD_REQUEST}}
    function success() { return { type: authConstants.UPD_PASSWORD_SUCCESS}}
    function failure(error) { return { type: authConstants.UPD_PASSWORD_FAILURE, error}}
}

// import config from 'config';
import { authApi, handleResponse} from '../_apis'

export const authService = {
    login,
    logout,
    getMyProfile,
    updateMyProfile,
    getMyDashboard,
    updatePassword
};


function login(username, password){
    return authApi
        .login(username, password)
        .then(handleResponse)
        .then( user => {
            localStorage.setItem('user', JSON.stringify(user.contents));
            return user;
        });
}

function logout(){
    localStorage.removeItem('user');
}


function getMyProfile(){
    return authApi
        .getMyProfile()
        .then(handleResponse)
        .then( msg => {
            let user = JSON.parse(localStorage.getItem('user'));
            user.userProfile = msg.contents.userProfile;
            localStorage.setItem('user', JSON.stringify(user));
            return user;
        });
}


function updateMyProfile(formData){
    return authApi
        .updateMyProfile(formData)
        .then(handleResponse)
        .then( profile => {
            let user = JSON.parse(localStorage.getItem('user'));
            user.userProfile = profile;
            localStorage.setItem('user', JSON.stringify(user));
            return user;
        });
}

function getMyDashboard(){
    return authApi
        .getMyDashboard()
        .then(handleResponse)
        .then( dashboard => {   
            return dashboard;
        });
}

function updatePassword(currentPassword, updatedPassword){
    return authApi
        .updatePassword(currentPassword, updatedPassword)
        .then(handleResponse)
        .then( content => {
            // 암호 변경 결과가 성공이면 Empty Object가 반환되므로,
            // 다른 처리를 할 것은 없다.
            return content;
        });
}
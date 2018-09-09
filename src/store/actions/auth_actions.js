import { LOGIN, LOGGEDIN, LOGIN_ERROR, LOGOUT } from '../types'

export function login(credentials, history) {
    console.log(credentials);
    return async (dispatch, getState, getFirebase) => {
        const firebase = getFirebase();
        console.log('c', credentials);
        dispatch({type: LOGIN});
        firebase
                .login({ email: credentials.email, password: credentials.password })
                .then((auth) => {
                    dispatch({
                        type: LOGGEDIN
                    });
                    history.push('/students');
                })
                .catch(err => {
                    dispatch({
                        type: LOGIN_ERROR
                    })
                    console.log(err);
                })
    }
}

export function logout(history) {
    return async (dispatch, getState, getFirebase) => {
        const firebase = getFirebase();
        firebase
        .logout()
        .then(() => {
            dispatch({
                type:LOGOUT
            });
            history.push('/')
        });
    }
}
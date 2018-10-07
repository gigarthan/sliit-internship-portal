import { LOGIN, LOGGEDIN, LOGIN_ERROR, LOGOUT } from '../types'

export function login(credentials, history) {
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

                    if(credentials.email.indexOf('sliit.lk')) {
                        history.push('/students');
                    } else {
                        history.push('/company');
                    }

                    
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
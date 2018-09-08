import { LOGIN, LOGGEDIN, LOGIN_ERROR } from '../types'

export function login(credentials) {
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
                })
                .catch(err => {
                    dispatch({
                        type: LOGIN_ERROR
                    })
                    console.log(err);
                })
    }
}
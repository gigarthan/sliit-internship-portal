import { REGISTER_COMPANY } from '../types';

export function registerCompany (regNo, values, history) {
    return async (dispatch, getState, getFirebase) => {
        const firebase = getFirebase();
        firebase
            .update('students/0', { company: values, status: 'submitI1Form' })
            .then(() => {
                console.log('ADDED');
                dispatch({
                    type: REGISTER_COMPANY
                });
                history.push('/student');
            });
    };
}


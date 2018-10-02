import { REGISTER_COMPANY, SUBMIT_I1 } from '../types';

export function registerCompany (index, values, history) {
    return async (dispatch, getState, getFirebase) => {
        const firebase = getFirebase();
        firebase
            .update(`students/${index}`, { company: values, status: 'submitI1Form' })
            .then(() => {
                console.log('ADDED');
                dispatch({
                    type: REGISTER_COMPANY
                });
                history.push('/students');
            });
    };
}

export function submitI1Form (index, values, history) {
    return async (dispatch, getState, getFirebase) => {
        const firebase = getFirebase();
        firebase
            .update(`students/${index}`, { formI1: values, status: 'i1FormSubmitted' })
            .then(() => {
                console.log('ADDED');
                dispatch({
                    type: SUBMIT_I1
                });
                history.push('/students');
            });
    };
}




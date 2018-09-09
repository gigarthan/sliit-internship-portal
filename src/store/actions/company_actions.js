import { REGISTER_COMPANY, SUBMIT_I1 } from '../types';
import Swal from 'sweetalert2';


export function submitI1Form (index, values, history) {
    return async (dispatch, getState, getFirebase) => {
        const firebase = getFirebase();
        firebase
            .update(`students/${index}`, { formI1Comp: values, status: 'i1FormSubmitted' })
            .then(() => {
                console.log('ADDED');
                dispatch({
                    type: SUBMIT_I1
                });
               Swal('Form Submitted');
            });
    };
}
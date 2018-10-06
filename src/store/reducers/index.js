import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { firebaseReducer } from 'react-redux-firebase';
import { allocationReducer } from './allocationReducer';

const rootReducer = combineReducers({
    form: formReducer,
    firebase: firebaseReducer,
    allocation: allocationReducer
});

export default rootReducer;
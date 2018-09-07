import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { firebaseReducer } from 'react-redux-firebase';

const rootReducer = combineReducers({
    form: formReducer,
    firebase : firebaseReducer
});

export default rootReducer;
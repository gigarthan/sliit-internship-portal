import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './reducers/index';
import ReduxPromise from 'redux-promise';
import ReduxThunk from 'redux-thunk';

export function configStore(initialState) {
    return createStore(
        rootReducer,
        initialState,
        composeWithDevTools(
            applyMiddleware(
                ReduxPromise,
                ReduxThunk
            )
        )        
    );
}
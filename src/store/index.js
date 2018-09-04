import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './reducers/index';
import ReduxThunk from 'redux-thunk';

export function configStore(initialState) {
    return createStore(
        rootReducer,
        initialState,
        composeWithDevTools(
            applyMiddleware(
                ReduxThunk
            )
        )        
    );
}
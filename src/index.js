import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import { configStore } from './store/index';
// import FormCompany from './form_company.js'

const state = {
   
};

const store = configStore(state);


ReactDOM.render(
    <Provider store={store}>
        <App />
       
    </Provider>,
     document.getElementById('root')
);

registerServiceWorker();

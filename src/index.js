import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import 'bulma/css/bulma.css';
import './styles.scss';

import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { reducer, initialState } from './reducers/reducer';

const store = createStore(reducer, initialState)

const rootElement = document.getElementById('root');
ReactDOM.render(
<Provider store={store}>
  <App />
</Provider>,
 rootElement);


 //line 12 - createStore is a function, and we are calling that function. That function takes an argument which is the reducer. THIS IS CREATING THE STORE.
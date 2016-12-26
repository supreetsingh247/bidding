import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import configureStore from './store/configureStore';
import {Provider} from 'react-redux';
import {compose, createStore} from 'redux';
import { Router, browserHistory } from 'react-router';
import routes from './routes';
import './styles/styles.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/toastr/build/toastr.min.css';
import persistState from 'redux-localstorage';

const enhancer = compose(
    persistState(),
)

const store = configureStore(enhancer);


render(
<Provider store = {store}>
    <Router history={browserHistory} routes={routes} />
    </Provider>,
    document.getElementById('app')
);

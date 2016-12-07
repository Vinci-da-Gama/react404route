import 'whatwg-fetch';
require('../style/index.scss');
// import '../style/index.scss';
// import '../style/entryIdx/idxJs.scss';

import 'react-fastclick';
// class Example: <div className = {entryIdxCss.commentBox}></div>
import entryIdxCss from '../style/entryIdx/idxJs.scss';
// import YtSearch  from 'youtube-api-search';

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import _ from 'lodash';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Router, browserHistory } from 'react-router';

import rxPromise from 'redux-promise';
import reducers from './reducers';
import routes from './routes.js';

const createStoreWithMiddleware = applyMiddleware(rxPromise)(createStore);

// import reducers from './reducers';
const utensil = document.querySelector('div.container');

ReactDOM.render(
    <Provider store = { createStoreWithMiddleware(reducers) } >
        <Router history = { browserHistory } routes = { routes }/>
    </Provider>, utensil
);

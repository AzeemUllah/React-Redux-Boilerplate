import React from 'react';
import ReactDOM from 'react-dom';
import './assets/css/index/index.css';
import registerServiceWorker from './registerServiceWorker';

import { Provider } from "react-redux"
import store from "./redux/store/store"

import HomePage from './components/main-comonents/home-page/home-page';


ReactDOM.render(<Provider store={store}>
                    <HomePage />
                </Provider>, document.getElementById('root'));
registerServiceWorker();

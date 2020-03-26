import React from 'react';
import ReactDOM from 'react-dom'
import App from './app'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { blogReducers } from './redux/reducers'
import './index.css'

const store = createStore(blogReducers);

ReactDOM.render(
    <Provider store={store}>
            <App /> 
    </Provider>
    , 
    document.getElementById('root')
)
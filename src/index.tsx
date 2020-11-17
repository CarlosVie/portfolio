import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import { HashRouter } from 'react-router-dom';
import { App } from './containers/App';
import history from './utils/history';
import configureStore from './utils/configureStore';
import { Provider } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.css';

const initialState = {};
const store = configureStore(initialState, history);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <HashRouter>
        <body className={'appBody'}>
        <App/>
        </body>
      </HashRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

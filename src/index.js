import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, compose } from 'redux';

import { rootReducer } from './redux/reducer/rootReducer';
import App from './App';

import './index.scss';
import { Provider } from 'react-redux';

const store = createStore(
  rootReducer,
  compose(
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

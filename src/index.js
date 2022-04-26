import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';

import {Provider} from 'react-redux';

import {createStore} from 'redux';
import reducers from './reducers';

// import * as actions from './actions';

const STORE = createStore(reducers);

// console.log(STORE.getState());
// STORE.subscribe(() => {console.log(STORE.getState())});
// STORE.dispatch(actions.increment());
// STORE.dispatch(actions.increment());
// STORE.dispatch(actions.increment());
// STORE.dispatch(actions.decrement());
// STORE.dispatch(actions.setColor([0, 0 ,0]));


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={STORE}>
    <App />
  </Provider>
);


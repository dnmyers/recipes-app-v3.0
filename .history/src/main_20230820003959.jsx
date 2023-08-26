import React from 'react';
import ReactDOM from 'react-dom/client';

import { App } from './App.jsx';
import { store } from './app/store';

import './index.css';

const render = () => {
  // Pass `state` and `dispatch` props to <App />
  ReactDOM.render(
    <App
      state={store.getState()}
      dispatch={store.dispatch}
    />,
    document.getElementById('root')
  )
}

render();
store.subscribe(render);

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
// )

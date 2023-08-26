import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';

import { App } from './app/App';
import { store } from './app/store';

import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
    <Provider store={store}>
        <React.StrictMode>
            <App />
        </React.StrictMode>
    </Provider>
);

// const root = ReactDOM.createRoot(document.getElementById('root'));

// const render = () => {
// 	// Pass `state` and `dispatch` props to <App />
// 	root.render(
// 		<React.StrictMode>
// 			<App
// 				state={store.getState()}
// 				dispatch={store.dispatch}
// 			/>
// 		</React.StrictMode>
// 	);
// };

// render();
// store.subscribe(render);
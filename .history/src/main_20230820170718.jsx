import React from 'react';
import ReactDOM from 'react-dom/client';

import { App } from './src/app/App';
import { store } from './app/store';

import './index.css';

const render = () => {
	// Pass `state` and `dispatch` props to <App />
	ReactDOM.createRoot(
		document.getElementById('root')
	).render(
		<React.StrictMode>
			<App
				state={store.getState()}
				dispatch={store.dispatch}
			/>
		</React.StrictMode>
	);
};

render();
store.subscribe(render);
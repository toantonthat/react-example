import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import { store } from './reducers';
import { App } from './App/App';

// setup fake backend
// import { configureFakeBackend } from './reducers';
// configureFakeBackend();

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('app')
);
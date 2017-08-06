import React from 'react';
import {App} from 'v1-status-web-ui';
import {AppContainer} from 'react-hot-loader';
import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import {render} from 'react-dom';
import configureStore from '../configureStore';

const renderApp = (store) => {
    render((
        <AppContainer>
            <Provider store={store}>
                <BrowserRouter>
                    <App />
                </BrowserRouter>
            </Provider>
        </AppContainer>
    ), document.getElementById('root'));
};

const store = configureStore({});
renderApp(store);

if (module.hot) {
    module.hot.accept(() => {
        renderApp(store);
    });
}

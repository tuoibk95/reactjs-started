import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom';
import App from './views/App';
import registerServiceWorker from './worker.js';
import {I18nextProvider} from 'react-i18next';
import {i18next} from './actions/i18n.js';

// Run react JS
ReactDOM.render(
    <Router>
        <I18nextProvider i18n={i18next}>
            <App/>
        </I18nextProvider>
    </Router>
    , document.getElementById('root'));
registerServiceWorker();


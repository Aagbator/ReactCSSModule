import React from 'react';
import ReactDOM from 'react-dom';
import Main from './app/Main';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import {BrowserRouter} from "react-router-dom";

const App = () => (

    <BrowserRouter>
        <Main />
    </BrowserRouter>
)


ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

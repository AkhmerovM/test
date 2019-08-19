import React from 'react';
import ReactDOM from 'react-dom';
import './style.less';
import {App} from "./App";
import {Modal} from "./modules/module/containers/Modal";

const root = document.getElementById('root');

ReactDOM.render(<App />, root);

if (module.hot) {
    module.hot.accept('App', () => {
        ReactDOM.render(<App />, root);
    });
}
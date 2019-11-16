import React, {Component} from 'react';
import {Provider} from "react-redux";
import initStore from "./store";
import {FirstContainer} from "./modules/module/containers/FirstContainer";

const store = initStore();

class App extends Component {
    render () {
        return (
            <Provider store={store} >
                <FirstContainer />
            </Provider >
        )
    }
}
export {App}

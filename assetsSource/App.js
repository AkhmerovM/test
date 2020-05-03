import React, {Component} from 'react';
import {Provider} from "react-redux";
import initStore from "./store";
import {FirstContainer} from "./modules/module/containers/FirstContainer";

const store = initStore();
const MyContext = React.createContext();
class App extends Component {
    constructor (props) {
        super(props);
    }

    render () {
        return (
            <FirstContainer />
        )
    }
}
export {App, MyContext}

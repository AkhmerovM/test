import React, {Component} from 'react';
import {Provider} from "react-redux";
import initStore from "./store";
import {SomeContainer} from "./modules/module/containers/Container";
import {myContext} from './context';
// const store = initStore();

class App extends Component {
    constructor() {
        super();
        this.onHandleClick = () => {
            this.setState({
                text: 'lavanda',
            })
        };
        this.state = {
            text: 'davalka',
            onHandleClick: this.onHandleClick,
        };
    }
    render () {
        return (
            <myContext.Provider value={this.state}>
            {/*<Provider store={store} >*/}
                <SomeContainer />
            {/*</Provider >*/}
            </myContext.Provider>
        )
    }
}
export {App}
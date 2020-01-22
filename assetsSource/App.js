import React, {Component} from 'react';
import {Provider} from "react-redux";
import initStore from "./store";
import {FirstContainer} from "./modules/module/containers/FirstContainer";

const store = initStore();
const MyContext = React.createContext();
class App extends Component {
    constructor (props) {
        super(props);
        this.state = {
            'money' : 1000,
        }
    }
    updateMoney= () => {
        this.setState({
            money: '2000'
        })
    }
    render () {
        console.log('===================== render app');
        return (
            <MyContext.Provider value={this.state} >
                <FirstContainer updateMoney={this.updateMoney} asd={{'dsa': 'das'}} />
            </MyContext.Provider >
        )
    }
}
export {App, MyContext}

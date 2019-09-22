import React, {Component} from 'react';
import {observer} from 'mobx-react';

@observer
class App extends Component {
    handleClick = () => {
        console.log(this.props);
    };
    render () {
        return (
            <button onClick={this.handleClick}>Click</button>
        )
    }
}
export {App}
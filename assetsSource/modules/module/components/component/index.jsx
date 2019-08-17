import React, {Component} from 'react';
import {myContext} from "../../../../context";

class Component1 extends Component {
    render () {
        return (
            <div>
                <button onClick={this.context.onHandleClick}>{this.context.text}</button>
            </div>
        )
    }
}
Component1.contextType = myContext;
export {Component1}
// function Component1 (){
//         return (
//             <div>
//                 <myContext.Consumer>
//                     {({text, onHandleClick}) => <button onClick={onHandleClick}>{text}</button>}
//                 </myContext.Consumer>
//             </div>
//         )
//     }
// export {Component1}
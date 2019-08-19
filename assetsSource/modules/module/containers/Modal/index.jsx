import React, {Component} from 'react';
import './style.less';
import ReactDOM from "react-dom";

class Modal extends Component {
    render() {
        const modal = document.getElementById('modal');
        return  ReactDOM.createPortal(<div className='modal'>
            <div className="modal__modal">
                {this.props.children}
            </div>
        </div>, modal);
    }
}
export {Modal}

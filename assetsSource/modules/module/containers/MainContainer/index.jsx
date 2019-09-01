import React from 'react';
import {connect} from "react-redux";
import {actionSetData} from "../../actions";

class MainContainerWrapper extends  React.Component {
    componentDidMount() {
        // console.log(this.props);
    }
    render() {
        return (
                <div className='main-container'>
                    <button>{}</button>
                </div>
        )
    }
}
function mapStateToProps (state) {
    console.log(state);
    return {}
}
function mapDispatchToProps () {
    return {}
}
const MainContainer= connect(mapStateToProps, mapDispatchToProps)(MainContainerWrapper );
export {MainContainer}
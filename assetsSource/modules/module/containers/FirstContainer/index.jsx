import React, {Component} from 'react';
import {connect} from 'react-redux';

function mapStateToProps(state) {
    return {
        // options: selectAutoFillModuleData(state),
    }
}
function mapDipatchToProps(dispatch) {
    return {
        // getDataSet,
    }
}
class FirstContainerWrapper extends Component {

    componentDidMount() {
        // const {getDataSet} = this.props;
        // getDataSet();
    }
    render() {
        return 'FirstContainerWrapper';
    }
}
const FirstContainer = connect(mapStateToProps, mapDipatchToProps())(FirstContainerWrapper);
export {FirstContainer}

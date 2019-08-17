import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Component1} from "../../components/component";

function mapStateToProps(state) {
    return {
    }
}
function mapDipatchToProps(dispatch) {
    return {
    }
}
class SomeContainer extends Component {

    componentDidMount() {
    }
    render() {
        console.log('mda');
        return <Dada/>
    }
}
// const Container = connect(mapStateToProps, mapDipatchToProps())(SomeContainer);
export {SomeContainer}

function Dada() {
    console.log('ratata');
    return <Component1 />
}
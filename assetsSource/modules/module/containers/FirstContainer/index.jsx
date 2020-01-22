import React, {Component, useEffect, useState, PureComponent} from 'react';
import {connect, useDispatch} from 'react-redux';
import {getDataSet, setDataSet} from "modules/module/actions";
import {SecondContainer} from "modules/module/containers/SecondContainer";

class FirstContainer extends PureComponent{
    render () {
        console.log('===================== first render');
        return (
            <div className="first-container">
                {() => <h1>AHAHSHDS</h1>}
            </div>
        )
    }
}

export {FirstContainer}

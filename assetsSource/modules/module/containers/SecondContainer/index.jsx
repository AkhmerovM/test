import React, {Component, useEffect, useState} from 'react';
import {connect, useDispatch} from 'react-redux';
import {getDataSet, setDataSet} from "modules/module/actions";
import {MyContext} from "App";

class SecondContainer extends Component{
    render () {
        console.log('===================== second render');
        return (
            <MyContext.Consumer>
                {value => {
                    console.log(value);
                    return (
                        <div style={{backgroundColor: '#aeaeae'}} onClick={this.props.updateMoney}>{value['money']}</div>
                    )
                }
                }
            </MyContext.Consumer>
        )
    }
}

export {SecondContainer}

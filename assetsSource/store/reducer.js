import {Module1Reducer} from "../modules/module/reducers";
import {combineReducers} from "redux";
import {Module1Name} from "../modules/module/constansts";

const mainReducer = combineReducers({[Module1Name]: Module1Reducer});
export {mainReducer}
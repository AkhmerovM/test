import {combineReducers} from "redux";
import {autofillReducer} from "../modules/module/reducers";
import {autofillModuleName} from "../modules/module/constansts";

export default combineReducers({
    [autofillModuleName]: autofillReducer,
})
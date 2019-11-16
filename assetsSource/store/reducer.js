import {combineReducers} from "redux";
import {moduleReducer} from "../modules/module/reducers";
import {moduleName} from "../modules/module/constansts";

export default combineReducers({
    [moduleName]: moduleReducer,
})

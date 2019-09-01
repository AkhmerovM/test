import {applyMiddleware, createStore} from 'redux';
import {mainReducer} from "./reducer";
import thunk from "redux-thunk";
import {myMiddleware} from "./my-middleware";
import {actionSetData} from "../modules/module/actions";
const extraArgument = {pidors: 'da'};


const store = createStore(mainReducer, applyMiddleware(myMiddleware, thunk.withExtraArgument(extraArgument)));
console.log(store);
store.dispatch(actionSetData('thunk is super'));
console.log(store.getState());

export {store}

import React from 'react';
import {Provider} from 'react-redux'
import {MainContainer} from "./modules/module/containers/MainContainer";
import {store} from "./store";

const App = () => {
    return (
        <Provider store={store} >
            <MainContainer />
        </Provider>
    )
};
export {App}
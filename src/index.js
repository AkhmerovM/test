import React from 'react';
import ReactDOM from 'react-dom';
import {SearchPanel} from "./components/search-panel";
import {TodoList} from "./components/todo-list";
import {AppHeader} from "./components/app-header";

const App = () => {
    const data = [
        {label:'fanana', important:true},
        {label:'fanana', important:true},
        {label:'fanana', important:true},
        {label:'fanana', important:true}
    ];
    return (<div>
        <AppHeader />
        <SearchPanel />
        <TodoList todos={data} />
    </div>)
};

ReactDOM.render(<App/>, document.querySelector('#root'));


function f () {
    console.log(this);
}
f();
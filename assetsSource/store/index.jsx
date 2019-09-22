import {observable} from 'mobx';

const appState = observable({
    count: 0
});
appState.resetTimer = action(function reset() {
    appState.timer = 0;
});
export {appState}
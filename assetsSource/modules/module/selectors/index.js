import {moduleName} from "modules/module/constansts";

function selectAutoFillModuleName (state) {
    return state[moduleName];
}
function selectAutoFillModuleData (state) {
    return selectAutoFillModuleName(state).data;
}
export {selectAutoFillModuleData}

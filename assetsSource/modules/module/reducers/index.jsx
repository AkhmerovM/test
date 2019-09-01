import {Module1Name} from "../constansts";

const initialState = {
  data: [],
};
const Module1Reducer = (state = initialState, action) => {
    switch (action.type) {
        case ('MODULE1_SET_DATA') :
            return {
                ...state,
                data: action.payload
            };
        default:
            return {
                ...state
            }
    }
};
export {Module1Reducer}
import {MainApi} from 'api/main-api'

const actionSetDataSet = (data) => {
    return {
        payload: data,
        type: "SET_DATA_SET"
    }
};

const getDataSet = (url) => {
    return async (dispatch) => {
        const {data, errors} = await MainApi.getDataSet(url);
        if (!errors.length) {
            dispatch(actionSetDataSet(data))
        }
    }
};
const setDataSet = (data) => {
    return async (dispatch) => {
        dispatch(actionSetDataSet(data))
    }
};
export {getDataSet, setDataSet}

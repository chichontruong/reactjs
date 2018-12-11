import * as types from './../Constants/ActionTypes';

var initState = {
    id: "",
    name: "",
    status: false
};

const myReducer = (state = initState, action) => {
    switch (action.type) {
        case types.GET_TASK:
            return action.task;

        case types.CLEAN_FORM:
            return action.task;

        default:
            return state;
    }
}

export default myReducer;
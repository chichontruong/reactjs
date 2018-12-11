import * as types from './../Constants/ActionTypes';

var initState = false;
const myReducer = (state = initState, action) => {
    switch (action.type) {
        case types.TOGGLE_FORM:
            state = !action.isDisplayForm;
            return state;
        case types.CLOSE_FORM:
            state = false;
            return state;
        case types.SHOW_FORM:
            state = true;
            return state;
        default:
            return state;
    }
}

export default myReducer;
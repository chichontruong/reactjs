import * as types from './../Constants/ActionTypes';
import {CreateOrUpdate, UpdateStatus, DeleteTask} from './../CommonFunc/TaskBusiness';
import {dataSource} from './../Model/dataInit';

var getData = () => {
    return JSON.parse(localStorage.getItem("tasks"));
}

var data = getData();

if (data === '' || data === null) {
    var dataInit = dataSource;
    localStorage.setItem("tasks", JSON.stringify(dataInit));
    data = dataInit;
}

var initState = data ? data : [];
// var initState = [];

const myReducer = (state = initState, action) => {
    switch (action.type) {
        case types.LIST_ALL:
            return state;

        case types.ADD_TASK:
            let taskNew = {
                id: "",
                name: action.task.name,
                status: action.task.status
            }
            CreateOrUpdate(state, taskNew);
            return [...state];

        case types.UPDATE_SATUS:
            let taskStatus = action.task;
            UpdateStatus(state, taskStatus.id);
            return [...state];

        case types.DELETE_TASK:
            let taskDelete = action.task;
            DeleteTask(state, taskDelete.id);
            return [...state];

        case types.UPDATE_TASK:
            let taskUpdate = action.task;
            CreateOrUpdate(state, taskUpdate);
            return [...state];

        case types.GET_TASK_FROM_API:
            state = action.tasks;
            return [...state];
        
        case types.SEARCH_TASK:
            if(action.search === "" || action.search === null){
                return state = getData();
            } 
            let resultSearch = [...state.filter(item=>item.name.startsWith(action.search))];
            return resultSearch;
        default:
            return state;
    }
}

export default myReducer;
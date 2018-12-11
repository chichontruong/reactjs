import * as types from './../Constants/ActionTypes';

import * as api from '../Model/TaskModel';

export const getAllTask = () => {
    return (callback) => {
        return api.getTasks((data) => {
            callback(getAllTasksFromApi(data));
        });
    }
}

export const ToggleStatus = (id) => {
    return (callback) => {
        return api.getById(id, (data) => {
            callback(updateStatus(data))
        })
    }
}

export const getAllTasksFromApi = tasks => {
    return {
        type: types.GET_TASK_FROM_API,
        tasks
    }
}

export const listAll = () => {
    return {
        type: types.LIST_ALL
    }
}

export const addTask = task => {
    return {
        type: types.ADD_TASK,
        task
    }
}

export const toggleForm = isDisplay => {
    return {
        type: types.TOGGLE_FORM,
        isDisplayForm: isDisplay
    }
}

export const showFrom = () => {
    return {
        type: types.SHOW_FORM,
        isDisplayForm: true
    }
}

export const closeFrom = () => {
    return {
        type: types.CLOSE_FORM,
        isDisplayForm: false
    }
}

export const updateStatus = task => {
    return {
        type: types.UPDATE_SATUS,
        task
    }
}

export const updateTask = task => {
    return {
        type: types.UPDATE_TASK,
        task
    }
}

export const deleteTask = task => {
    return {
        type: types.DELETE_TASK,
        task
    }
}

export const getTask = task => {
    return {
        type: types.GET_TASK,
        task
    }
}

export const cleanForm = () => {
    return {
        type: types.CLEAN_FORM,
        task: {
            id: "",
            name: "",
            status: false
        }
    }
}

export const searchTask = (search) => {
    return {
        type: types.SEARCH_TASK,
        search
    }
}
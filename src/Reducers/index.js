import { combineReducers } from 'redux';
import tasks from './tasks';
import displayform from './displayform';
import taskedit from './taskedit';

const myReducer = combineReducers({
    tasks: tasks,
    isDisplayForm: displayform,
    taskedit
});

export default myReducer;
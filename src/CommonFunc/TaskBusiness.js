import {generateId, findIndex} from './Common';
export const CreateOrUpdate = (tasks, task) => {
    if (task.id === "") {
        task.id = generateId();
        tasks.push(task);
    } else {
        var index = findIndex(tasks, task.id);
        tasks[index] = task;
    }
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

export const UpdateStatus = (tasks, id) => {
    var index = findIndex(tasks, id);
    if (index !== -1) {
        let obUpdate = {...tasks[index]};
        obUpdate.status = !obUpdate.status;
        tasks[index] = obUpdate;
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }
}

export const DeleteTask = (tasks, id) => {
    var index = findIndex(tasks, id);
    if (index !== -1) {
        tasks.splice(index, 1);
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }
}
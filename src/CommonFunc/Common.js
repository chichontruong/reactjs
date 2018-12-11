export const s4 =() => {
    return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
}

export const generateId = () => {
    return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + '-' + s4() + s4();
}

export const findIndex = (tasks, id) => {
    var indexResult = -1;
    tasks.forEach((task, index) => {
      if (task.id === id) {
        indexResult = index;
      }
    });
    return indexResult;
}

export const sum = (a, b) => {
    return a + b;
}
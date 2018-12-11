import { CreateOrUpdate, UpdateStatus, DeleteTask } from './../CommonFunc/TaskBusiness';
import { dataSource } from './data/DataSource';
import { findIndex } from './../CommonFunc/Common';

describe('TaskBusiness', () => {
    it('CreateOrUpdate => Add New Task', () => {
        let newTask = {
            id: "",
            name: "ItemNew",
            status: true
        };
        CreateOrUpdate(dataSource, newTask);
        let index = findIndex(dataSource, newTask.id);
        expect(index).toBeGreaterThan(-1);
    });

    it('CreateOrUpdate => update a task', () => {
        let index = findIndex(dataSource, "1");
        let taskUpdate = dataSource[index];
        taskUpdate.name = "Lập Trình Java";
        taskUpdate.status = false;
        CreateOrUpdate(dataSource, taskUpdate);

        let afterUpdate = dataSource[index];
        expect(afterUpdate.name).toBe("Lập Trình Java");
        expect(afterUpdate.status).toBe(false);
    });

    it('UpdateStatus => true to false', () => {
        let datas = [
            {
                id: "1",
                name: "Lập trình C#",
                status: true
            },
            {
                id: "2",
                name: "Lập trình C++",
                status: true
            }
        ]
        UpdateStatus(datas, "1");
        let index = findIndex(datas, "1");
        let afterUpdate = datas[index];
        expect(afterUpdate.status).toBe(false);
    });

    it('DeleteTask index = 1', () => {
        let datas = [
            {
                id: "1",
                name: "Lập trình C#",
                status: true
            },
            {
                id: "2",
                name: "Lập trình C++",
                status: true
            }
        ]

        DeleteTask(datas, "1");
        let index = findIndex(datas, "1");
        expect(index).toBe(-1);
    });
});
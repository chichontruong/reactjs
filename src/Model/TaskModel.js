import axios from 'axios';
import * as config from '../Config/urlconfig';

export const getTasks = (success) => {
    return axios({
        method: 'GET',
        url: `${config.URL_API}${config.EP_TASKS}`,
        data: {}
    }).then(res=>{
        success(res.data);
    }, err=>{
        console.log("err=>", err);
    });
}

export const getById = (id, success) => {
    return axios({
        method: 'GET',
        url: `${config.URL_API}${config.EP_TASKS}/${id}`,
        data: {}
    }).then(res=>{
        success(res.data);
    }, err=>{
        console.log("err=>", err);
    });
}
export const createTask = (param, success)=>{
    return axios({
        method: 'POST',
        url: `${config.URL_API}${config.EP_TASKS}`,
        data: param
    }).then(res=>{
        success(res.data);
    }, err=>{
        console.log("err=>", err);
    });
}

export const updateTask = (param, success)=>{
    return axios({
        method: 'PUT',
        url: `${config.URL_API}${config.EP_TASKS}`,
        data: param
    }).then(res=>{
        success(res.data);
    }, err=>{
        console.log("err=>", err);
    });
}

export const DeleteTask = (id, success) => {
    return axios({
        method: 'POST',
        url: `${config.URL_API}${config.EP_TASKS}/${id}`,
        data: {}
    }).then(res=>{
        success(res.data);
    }, err=>{
        console.log("err=>", err);
    });
}
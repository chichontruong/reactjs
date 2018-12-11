import React from 'react'
import Contact from './Contact';
import TaskList from './TableTask/TaskList';
import NotFount from './NotFount';

export const Menus = [
    {label: "Trang chủ", path : "/", exact: true, main : () => <TaskList/>},
    {label: "Liên hệ", path : "/contact", exact: false, main : () => <Contact/>},
    {label: null, path : null, exact: false, main : () => <NotFount/>}
];
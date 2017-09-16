import React from 'react';
import ReactDOM from 'react-dom';
import {Todo} from './components/main';
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.css';


var tasksList = ["Task 1", "Task 2"]

var tasks = localStorage.getItem('storedTasks');
if(tasks){
    tasksList = JSON.parse(tasks);
}

ReactDOM.render(
    <Todo tasks={tasksList} />,
    document.getElementById('root'));
    registerServiceWorker();
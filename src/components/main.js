import React from 'react';
import { AddNewTask } from './addtask';
import { ToDoAppList } from './applist';
import './style.css';
import { Container, Row, Col, Badge } from 'reactstrap';

export class Todo extends React.Component {
    constructor(props) {
        super();
        this.state = { tasks: props.tasks };
        this.updateList = this.updateList.bind(this);
        this.removeTask = this.removeTask.bind(this);
    }
    updateList(text) {
        var updatedTasks = this.state.tasks;
        updatedTasks.unshift(text);
        this.setState({ tasks: updatedTasks });
        this.updateLocalStorage(updatedTasks);
    }
    removeTask(text) {
        var updatedTasks = this.state.tasks;
        updatedTasks.splice(updatedTasks.indexOf(text), 1);
        this.setState({ tasks: updatedTasks });
        this.updateLocalStorage(updatedTasks);
    }

    updateLocalStorage(updatedTasks) {
        console.log('tasks updated');
        localStorage.setItem('storedTasks', JSON.stringify(updatedTasks));
    }

    render() {
        return (
            <div>
                <Col sm={{ size: 3}}>
                    <Col sm={{ size: 'auto', offset: 3}}>
                        <h1><Badge color="info" pill>ToDo App</Badge></h1>
                    </Col>
                    <AddNewTask updateList={this.updateList} />
                    <ToDoAppList tasks={this.props.tasks} remove={this.removeTask} />
                </Col>
            </div>
        );
    }
}
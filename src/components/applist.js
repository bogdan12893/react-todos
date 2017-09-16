import React from 'react';
import { ListGroup, ListGroupItem, Button } from 'reactstrap';
import './style.css';

export class ToDoAppList extends React.Component {
    constructor() {
        super();
        this.remove = this.remove.bind(this);
    }

    remove(elem) {
        var value = elem.target.parentNode.querySelector('span').innerText;
        this.props.remove(value);
    }

    render() {
        var items = this.props.tasks.map((elem, i) => {
            return <ListGroupItem key={i}><span>{elem}</span><Button className='delete-task' outline color="danger" size="sm" onClick={this.remove}>Delete</Button></ListGroupItem>
        });

        return (
            <ul>
                {items}
            </ul>
        );
    }
}
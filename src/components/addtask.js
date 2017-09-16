import React from 'react';
import { Form, FormGroup, Label, Input, FormText } from 'reactstrap';

export class AddNewTask extends React.Component {
    constructor(){
        super();
        this.justSubmitted = this.justSubmitted.bind(this);
    }

    justSubmitted(event){
        event.preventDefault();
        var input = event.target.querySelector('input');
        var value = input.value;
        input.value = '';
        this.props.updateList(value);
    }

    render() {
        return(
            <form onSubmit = {this.justSubmitted}>
                <FormGroup>
                    <Input type="text" name="text" id="text" placeholder="enter ToDo's" />
                </FormGroup>
            </form>
        );
    }
}
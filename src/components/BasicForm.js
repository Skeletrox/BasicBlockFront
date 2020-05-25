import React, { Component } from 'react';
import { Button, Checkbox, Form, Input, Segment } from 'semantic-ui-react';

class BasicForm extends Component {
    constructor(props) {
        super(props);
    }

    handleNameChange(e) {
        this.setState({ name : e.target.value });
    }

    handleCommentChange(e) {
        this.setState({ comment : e.target.value });
    }

    handleSubmit() {
        if (!this.state.comment || !this.state.name) {
            alert("Name or comment missing!");
            return;
        }

        
    }

    render() {
        return (
            <Segment>
                <Form>
                    <Form.Group widths="equal">
                        <Form.Field>
                            <label>Name</label>
                            <Input placeholder="Name" />
                        </Form.Field>
                        <Form.Field>
                            <Form.TextArea label="Comment" placeholder="Enter comment..."/>
                        </Form.Field>
                    </Form.Group>
                    <Button color="linkedin">Submit comment</Button>
                </Form>
            </Segment>
        )
    }
}

export default BasicForm;
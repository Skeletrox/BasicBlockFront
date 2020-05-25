import React, {Component} from 'react';
import BasicDisplay from './BasicDisplay';
import { getComments } from '../actions/actions';

class DisplayGroup extends Component {


    componentDidMount() {
        getComments((val, err) => {
            console.log("Value:", val);
            console.log("Err:", err);
        });
    }

    render() {
        return (
            <div>
                <BasicDisplay />
            </div>
        )
    }
}

export default DisplayGroup;
import React, { Component } from 'react';
import { Segment, Header, Divider } from 'semantic-ui-react';

class BasicDisplay extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div>
                <Segment align='left'>
                    <Header as={'h5'}>Example header</Header>
                    <Divider />
                    <Segment raised>
                        Example text. This text is my poor excuse for a Lorem Ipsum because I ca-ha-nnot be like the others for some damn reason. Guten Tag, mein Freund, wie geht's? Ich trinke das Wasser. How many roads must a man walk down, before you call him a man?
                    </Segment>
                </Segment>

            </div>
        )
    }
}

export default BasicDisplay;
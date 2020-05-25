import React, {Component} from 'react';
import { Segment, Header, Divider } from 'semantic-ui-react';


class PageHeader extends Component {

    render() {
        return (
            <div>
                <Segment>
                    <Header as={'h1'}>Simple BlockChain</Header>
                    <Divider />
                    <Header as={'h3'}>Guten Tag</Header>
                </Segment>    
            </div>
        )
    }
}

export default PageHeader;
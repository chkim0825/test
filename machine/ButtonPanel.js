import React from 'react';
import {Button, Icon, Segment} from 'semantic-ui-react';

class ButtonPanel extends React.Component {

    render() {
        return (
            <Segment inverted color='blue'>
                <Button icon color='blue'>
                    <Icon name='caret left'/>
                </Button>
                <Button icon labelPosition='left' color='red'>
                    <Icon name='check' />
                    GET
                </Button>
                <Button icon color='blue'>
                    <Icon name='caret right'/>
                </Button>
            </Segment>
        );
    }
}

export default ButtonPanel;
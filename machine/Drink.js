import React from 'react';
import { Segment, Card, Icon, Image, Label } from 'semantic-ui-react';
import sodaImage from './soda.png';

class Drink extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            name: 'Coke',
            price: 1000,
            quantity: 1
        }
    }

    render() {

        const { name, price, quantity } = this.state;

        return (
            <Segment>
                <Image src={sodaImage} size='mini' centered />
                <Card.Content>
                    <Card.Header textAlign='center'>{name}</Card.Header>
                    <Card.Meta textAlign='center'>₩ {price}</Card.Meta>
                </Card.Content>
                <Card.Content extra>
                    <Card.Header textAlign='center'>
                        <Icon name='cubes'/><Label content={quantity}/>
                    </Card.Header>
                </Card.Content>
            </Segment>
        );
    }
}

export default Drink;
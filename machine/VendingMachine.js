import React from 'react';
import {Button, Segment, SegmentGroup} from 'semantic-ui-react';
import Drink from "./Drink";
import ExitShelf from "./ExitShelf";
import ButtonPanel from "./ButtonPanel";

class VendingMachine extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <SegmentGroup size='small'>
                <Segment inverted color='blue' floated='left'>
                    <SegmentGroup vertical>
                        <SegmentGroup horizontal>
                            <Drink/><Drink/><Drink/><Drink/>
                        </SegmentGroup>
                        <SegmentGroup horizontal>
                            <Drink/><Drink/><Drink/><Drink/>
                        </SegmentGroup>
                    </SegmentGroup>
                    <ButtonPanel />
                    <SegmentGroup>
                            <ExitShelf />
                    </SegmentGroup>
                </Segment>
            </SegmentGroup>
        )
    }
}

export default VendingMachine;
import React from 'react';
import { Button, Item, Label, Segment } from 'semantic-ui-react';
import { Specializimi } from '../../../app/models/specializimi';

interface Props {
    specializimet: Specializimi[];
    selectSpecializimi: (id: string) => void;
    deleteSpecializimi: (id: string) => void;
}

export default function SpecializimiList({ specializimet, selectSpecializimi, deleteSpecializimi }: Props) {
    return (
        <Segment>
            <Item.Group divided>
                {specializimet.map(specializimi => (
                    <Item key={specializimi.id}>
                        <Item.Content>
                            <Item.Header as='a'>{specializimi.emriInstitucionit}</Item.Header>    
                            <Item.Meta>{specializimi.titulli}</Item.Meta>
                            <Item.Description>
                                <div>{specializimi.lokacioni}</div>
                                <div>{specializimi.dataFillestare}, {specializimi.dataPerfundimtare}</div>
                            </Item.Description>   
                            <Item.Extra>
                                <Button onClick={() => selectSpecializimi(specializimi.id)} floated='right' content='View' color='blue'/>
                                <Button onClick={() => deleteSpecializimi(specializimi.id)} floated='right' content='Delete' color='red'/>
                                <Label basic content={specializimi.lokacioni}/>
                            </Item.Extra>
                        </Item.Content>
                    </Item>
                ))}
            </Item.Group>
        </Segment>
    )
}
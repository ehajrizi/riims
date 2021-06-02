import React from 'react';
import { Button, Item, Segment } from 'semantic-ui-react';
import { Edukimi } from '../../../app/models/edukimi';

interface Props {
    edukimet: Edukimi[];
    selectEdukimi: (id: string) => void;
    deleteEdukimi: (id: string) => void;
}

export default function EdukimiList({edukimet, selectEdukimi, deleteEdukimi}: Props) {
    return (
        <Segment>
            <Item.Group divided>
                {edukimet.map(edukimi => (
                    <Item key={edukimi.id}>
                        <Item.Content>
                            <Item.Header as='a'>{edukimi.emri_i_Institucionit}</Item.Header>
                            <Item.Meta>{edukimi.titulli} - {edukimi.fusha_e_Studimit}</Item.Meta>
                            <Item.Description>
                                <div>{edukimi.pershkrimi}</div>
                                <div>{edukimi.lokacioni}</div>
                                <div>{edukimi.dataFillestare} - {edukimi.dataPerfundimtare}</div>
                            </Item.Description>
                            <Item.Extra>
                                <Button onClick={() => selectEdukimi(edukimi.id)} floated='right' content='View' color='blue' />
                                <Button onClick={() => deleteEdukimi(edukimi.id)} floated='right' content='Delete' color='red' />
                                {/* <Label basic content={edukimi.category} /> */}
                            </Item.Extra>
                        </Item.Content>
                    </Item>
                ))}
            </Item.Group>
        </Segment>
    )
}
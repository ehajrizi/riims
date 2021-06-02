import React from 'react';
import { Button, Item, Label, Segment } from 'semantic-ui-react';
import { Publikimi } from '../../../app/models/publikimi';

interface Props {
    publikimet: Publikimi[];
    selectPublikimi: (id: string) => void;
    deletePublikimi: (id: string) => void;
}

export default function PublikimetList({publikimet, selectPublikimi, deletePublikimi}: Props) {
    return (
        <Segment>
            <Item.Group divided>
                {publikimet.map(publikimi => (
                    <Item key={publikimi.id}>
                        <Item.Content>
                            <Item.Header as='a'>{publikimi.titulli}</Item.Header>
                            <Item.Meta>{publikimi.data}</Item.Meta>
                            <Item.Description>
                                <div>{publikimi.statusi}, {publikimi.llojiPublikimit} </div>
                                <div>{publikimi.lenda}, {publikimi.kategoria} </div>
                                <div>{publikimi.departamenti}, {publikimi.institucioni}</div>
                            </Item.Description>
                            <Item.Extra>
                                <Button onClick={() => selectPublikimi(publikimi.id)} floated='right' content='View' color='blue' />
                                <Button onClick={() => deletePublikimi(publikimi.id)} floated='right' content='Delete' color='red' />
                                <Label basic content={publikimi.referenca} />
                            </Item.Extra>
                        </Item.Content>
                    </Item>
                ))}
            </Item.Group>
        </Segment>
    )
}
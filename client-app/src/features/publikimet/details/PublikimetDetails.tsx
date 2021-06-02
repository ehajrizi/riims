import React from 'react';
import { Button, Card } from 'semantic-ui-react';
import { Publikimi } from '../../../app/models/publikimi';

interface Props {
    publikimi: Publikimi;
    cancelSelectPublikimi: () => void;
    openFormPublikimi: (id: string) => void;
}

export default function PublikimetDetails({publikimi, cancelSelectPublikimi, openFormPublikimi}: Props) {
    return (
        <Card fluid>
            <Card.Content>
                <Card.Header>{publikimi.titulli}</Card.Header>
                <Card.Meta>
                    <span>{publikimi.vendi}, {publikimi.emertimiEvent}, {publikimi.volumiFaqeve}</span>
                    <span>{publikimi.data}</span>
                </Card.Meta>
                <Card.Description>
                   {publikimi.statusi}, {publikimi.llojiPublikimit} <br/>
                    {publikimi.lenda}, {publikimi.kategoria} <br/>
                    {publikimi.departamenti}, {publikimi.institucioni}
          </Card.Description>
          <Card.Meta>
                    <span>{publikimi.referenca}</span>
                    <span>{publikimi.linkuPublikimit}</span>
                </Card.Meta>
            </Card.Content>
            <Card.Content extra>
                <Button.Group widths='2'>
                    <Button onClick={() => openFormPublikimi(publikimi.id)} basic color='blue' content='Edit'/>
                    <Button onClick={cancelSelectPublikimi} basic color='grey' content='Cancel'/>
                </Button.Group>
            </Card.Content>
        </Card>
    )
}
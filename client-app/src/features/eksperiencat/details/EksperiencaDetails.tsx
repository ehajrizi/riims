import React from 'react'
import { Button, Card} from 'semantic-ui-react'
import { Eksperienca } from '../../../app/models/eksperienca'


interface Props{
    eksperienca: Eksperienca;
    cancelSelectEksperienca: () => void;
    openFormEksperienca: (id:string) => void;
}

export default function EksperiencaDetails({ eksperienca,cancelSelectEksperienca,openFormEksperienca } : Props){
    return(
        <Card fluid>
            <Card.Content>
                <Card.Header>{eksperienca.titulli}</Card.Header>
                <Card.Meta>
                    <span>{eksperienca.dataFillestare},{eksperienca.dataPerfundimtare}</span>
                </Card.Meta>
                <Card.Description>
                    {eksperienca.pershkrimi}
                </Card.Description>
            </Card.Content>
            <Card.Content extra>
                <Button.Group widths='2'>
                    <Button onClick={() => openFormEksperienca(eksperienca.id)}basic color='blue' content='Edit'/>
                    <Button onClick={cancelSelectEksperienca} basic color='grey' content='Cancel'/>
                </Button.Group>
            </Card.Content>
        </Card>
    )
}
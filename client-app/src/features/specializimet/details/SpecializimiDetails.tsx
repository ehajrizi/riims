import React from 'react';
import { Button, Card} from 'semantic-ui-react';
import { Specializimi } from '../../../app/models/specializimi';

interface Props {
    specializimi: Specializimi;
    cancelSelectSpecializimi: () => void;
    openFormSpecializimi: (id: string) => void;
}

export default function SpecializimiDetails({ specializimi, cancelSelectSpecializimi, openFormSpecializimi }: Props) {
    return (
        <Card fluid>
            {/* <Image src={`/assets/categoryImages/${activity.category}.jpg`}/> */}
            <Card.Content>
            <Card.Header>{specializimi.emriInstitucionit}</Card.Header>
            <Card.Meta>
                <span>{specializimi.titulli}</span>
            </Card.Meta>
            <Card.Description>
                {specializimi.lokacioni}
            </Card.Description>
            </Card.Content>
            <Card.Content extra>
                <Button.Group width='2'>
                    <Button onClick={() => openFormSpecializimi(specializimi.id)} basic color='blue' content='Edit'/>
                    <Button onClick={cancelSelectSpecializimi} basic color='grey' content='Cancel'/>
                </Button.Group>
            </Card.Content>
        </Card>
    )
}
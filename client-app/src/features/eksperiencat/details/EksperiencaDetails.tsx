import React, { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom';
import { Button, Card} from 'semantic-ui-react'
import LoadingComponent from '../../../app/layout/LoadingComponents';
import { useStore } from '../../../app/stores/store';

export default function EksperiencaDetails(){
    const {eksperiencaStore} = useStore();
    const {selectedEksperienca: eksperienca, loadEksperienca, loadingInitial} = eksperiencaStore;
    const {id} = useParams<{id: string}>();
    //mos me specifiku se njeh id si string po si objekt e 
    //id'ja se ka tipin objekt

    useEffect(() => {
        if(id) loadEksperienca(id);
    },[id,loadEksperienca])
    //se varet prej tyne

    if(loadingInitial || !eksperienca) return <LoadingComponent/>;
     //ok

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
                    <Button as={Link} to={`/manage/${eksperienca.id}`} basic color='blue' content='Edit'/>
                    <Button as={Link} to='/eksperiencat' basic color='grey' content='Cancel'/>
                </Button.Group>
            </Card.Content>
        </Card>
    )
}
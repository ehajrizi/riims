import React, { useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import { Link, useParams } from 'react-router-dom';
import { Button, Card} from 'semantic-ui-react'
import LoadingComponent from '../../../app/layout/LoadingComponents';
import { useStore } from '../../../app/stores/store';

export default observer(function PublikimetDetails(){
    const {publikimiStore} = useStore();
    const {selectedPublikimi: publikimi, loadPublikimi, loadingInitial} = publikimiStore;
    const {id} = useParams<{id: string}>();
   

    useEffect(() => {
        if(id) loadPublikimi(id);
    },[id,loadPublikimi]);
    

    if(loadingInitial || !publikimi) return <LoadingComponent/>;
     

    return(
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
                    <Button as={Link} to={`/managePublikimi/${publikimi.id}`} basic color='blue' content='Edit'/>
                    <Button as={Link} to='/publikimet' basic color='grey' content='Cancel'/>
                </Button.Group>
            </Card.Content>
        </Card>
    )
})
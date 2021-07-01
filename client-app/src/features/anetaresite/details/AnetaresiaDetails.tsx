import { observer } from 'mobx-react-lite';
import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Button, Card } from 'semantic-ui-react';
import LoadingComponent from '../../../app/layout/LoadingComponents';
import { useStore } from '../../../app/stores/store';

export default observer(function AnetaresiaDetails() {
    const {anetaresiaStore} = useStore();
    const {selectedAnetaresia: anetaresia, loadAnetaresia, loadingInitial} = anetaresiaStore;
    const {id} = useParams<{id: string}>();

    useEffect(() => {
        if (id) loadAnetaresia(id);
    }, [id, loadAnetaresia]);

    
    if (loadingInitial || !anetaresia) return <LoadingComponent/>;

    return (
        <Card fluid>
            <Card.Content>
            <Card.Header>{anetaresia.emriInstOrg}</Card.Header>
            <Card.Description>
                <div>{anetaresia.pozita}</div>
                <div>{anetaresia.pershkrimi}</div>
            </Card.Description>
            </Card.Content>
            <Card.Content extra>
                <Button.Group widths='2'>
                    <Button as={Link} to={`/manageAnetaresia/${anetaresia.id}`} basic color='blue' content='Edit'/>
                    <Button as={Link} to='/anetaresia' basic color='grey' content='Cancel'/>
                </Button.Group>
            </Card.Content>
        </Card>
    )
})
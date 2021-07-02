import format from "date-fns/format";
import { observer } from 'mobx-react-lite';
import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Button, Card } from 'semantic-ui-react';
import LoadingComponent from '../../../app/layout/LoadingComponents';
import { useStore } from '../../../app/stores/store';

export default observer(function SpecializimiDetails() {
    const {specializimiStore} = useStore();
    const {selectedSpecializimi: specializimi, loadSpecializimi, loadingInitial} = specializimiStore;
    const {id} = useParams<{id: string}>();

    useEffect(() => {
        if (id) loadSpecializimi(id);
    }, [id, loadSpecializimi]);

    
    if (loadingInitial || !specializimi) return <LoadingComponent/>;

    return (
        <Card fluid>
            <Card.Content>
            <Card.Header>{specializimi.titulli}</Card.Header>
            <Card.Meta>
                <span>{specializimi.emriInstitucionit}</span>
            </Card.Meta>
            <Card.Description>
                <div>{specializimi.pershkrimi}</div>
		        <div>{format(specializimi.dataFillestare!,'dd MMM yyyy')} - {format(specializimi.dataPerfundimtare!,'dd MMM yyyy')}</div>
		        <div>{specializimi.lokacioni}</div>
            </Card.Description>
            </Card.Content>
            <Card.Content extra>
                <Button.Group widths='2'>
                    <Button as={Link} to={`/manageSpecializimi/${specializimi.id}`} basic color='blue' content='Edit'/>
                    <Button as={Link} to='/specializimet' basic color='grey' content='Cancel'/>
                </Button.Group>
            </Card.Content>
        </Card>
    )
})
import { observer } from "mobx-react-lite";
import React, { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom';
import { Button, Card} from 'semantic-ui-react'
import LoadingComponent from '../../../app/layout/LoadingComponents';
import { Profili } from '../../../app/models/profili'
import { useStore } from '../../../app/stores/store';

export default function ProfiliDetails(){
    const {profiliStore} = useStore();
    const {selectedProfili: profili, loadProfili, loadingInitial} = profiliStore;
    const {id} = useParams<{id: string}>();
    
    useEffect(() => {
        if(id) loadProfili(id);
    },[id,loadProfili])


    if(loadingInitial || !profili) return <LoadingComponent/>;


    return(
        <Card fluid>
            <Card.Content>
                <Card.Header> {profili.emri} - {profili.emriIMesem} - {profili.mbiemri} </Card.Header>
                <Card.Meta>
                    <span>{profili.titulliShkencor}</span>
                </Card.Meta>
                <Card.Description>
				<div> 
                    {profili.dataELindjes}
				</div>
				<div> 
                    {profili.vendiILindjes}
				</div>
				<div> 
                    {profili.shtetiILindjes}
				</div>
				<div> 
                    {profili.nrTelefonit}
				</div>
				<div> 
                    {profili.gjinia}
				</div>
                </Card.Description>
            </Card.Content>
            <Card.Content extra>
                <Button.Group widths='2'>
                    <Button as={Link} to={`/manageProfili/${profili.id}`} basic color='blue' content='Edit'/>
                    <Button as={Link} to='/profili' basic color='grey' content='Cancel'/>
                </Button.Group>
            </Card.Content>
        </Card>
    )
}
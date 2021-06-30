import { observer } from 'mobx-react-lite';
import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Button, Card } from 'semantic-ui-react';
import LoadingComponent from '../../../app/layout/LoadingComponents';
import { useStore } from '../../../app/stores/store';


export default observer (function HonorandAwardDetails(){
  const {honorandawardStore}= useStore();
  const {selectedHonorandAward:honorandaward,loadHonorandAward,loadingInitial}= honorandawardStore;
  const {id}= useParams<{id:string}>();

  useEffect (()=> {
    if (id) loadHonorandAward(id);
  },[id, loadHonorandAward]);

if(loadingInitial || !honorandaward) return <LoadingComponent/>;

  return(
    <Card fluid>
    <Card.Content>
      <Card.Header>{honorandaward.titulli}</Card.Header>
      <Card.Description>
        {honorandaward.muaji}
      </Card.Description>
      <Card.Description>
        {honorandaward.viti}
      </Card.Description>
      <Card.Description>
        {honorandaward.institucioni}
      </Card.Description>
      <Card.Description>
        {honorandaward.pozita}
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
     <Button.Group widths='2'>
        <Button as={Link} to={`/managehonorandaward/${honorandaward.id}`} basic color='blue' content='Edit'/>
        <Button as={Link} to='/honorandaward' basic color='grey' content='Cancel'/>
     </Button.Group>
    </Card.Content>
  </Card>
   ) 
})
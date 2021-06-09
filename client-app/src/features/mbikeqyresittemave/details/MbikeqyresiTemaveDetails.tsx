import { observer } from 'mobx-react-lite';
import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Button, Card } from 'semantic-ui-react';
import LoadingComponent from '../../../app/layout/LoadingComponents';
import { useStore } from '../../../app/stores/store';


export default observer (function MbikeqyresiTemaveDetails(){
  const {mbikeqyresitemaveStore}= useStore();
  const {selectedMbikeqyresiTemave:mbikeqyresitemave,loadMbikeqyresiTemave,loadingInitial}= mbikeqyresitemaveStore;
  const {id}= useParams<{id:string}>();

  useEffect (()=> {
    if (id) loadMbikeqyresiTemave(id);
  },[id, loadMbikeqyresiTemave]);

if(loadingInitial || !mbikeqyresitemave) return <LoadingComponent/>;

  return(
    <Card fluid>
    <Card.Content>
      <Card.Header>{mbikeqyresitemave.titulliTemes}</Card.Header>
      <Card.Meta>
        <span >{mbikeqyresitemave.studenti}</span>
      </Card.Meta>
      <Card.Description>
        {mbikeqyresitemave.muaji}
      </Card.Description>
      <Card.Description>
        {mbikeqyresitemave.viti}
      </Card.Description>
      <Card.Description>
        {mbikeqyresitemave.departamenti}
      </Card.Description>
      <Card.Description>
        {mbikeqyresitemave.niveliAkademik}
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
     <Button.Group widths='2'>
        <Button as={Link} to={`/managembikeqyresitemave/${mbikeqyresitemave.id}`} basic color='blue' content='Edit'/>
        <Button as={Link} to='/mbikeqyresitemave' basic color='grey' content='Cancel'/>
     </Button.Group>
    </Card.Content>
  </Card>
   ) 
})
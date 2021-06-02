
import React from 'react';
import { Button, Card } from 'semantic-ui-react';
import {MbikeqyresiTemave } from '../../../app/models/mbikeqyresitemave';

interface Props {
    mbikeqyresitemave :MbikeqyresiTemave;
    cancelSelectMbikeqyresiTemave:()=> void;
    openFormMbikeqyresiTemave:(id:string)=> void;
}

export default function MbikeqyresiTemaveDetails({mbikeqyresitemave,cancelSelectMbikeqyresiTemave, openFormMbikeqyresiTemave}:Props){
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
        <Button onClick={()=>openFormMbikeqyresiTemave(mbikeqyresitemave.id)} basic color='blue' content='Edit'/>
        <Button onClick={cancelSelectMbikeqyresiTemave} basic color='grey' content='Cancel'/>
     </Button.Group>
    </Card.Content>
  </Card>
   ) 
}
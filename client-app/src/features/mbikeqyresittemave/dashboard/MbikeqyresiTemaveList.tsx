
import React from 'react';
import { Button, Item, Label, Segment } from 'semantic-ui-react';
import {MbikeqyresiTemave } from '../../../app/models/mbikeqyresitemave';


interface Props {
    mbikeqyresittemave: MbikeqyresiTemave[];
    
    selectMbikeqyresiTemave: (id: string) => void;
    deleteMbikeqyresiTemave:(id:string) => void;
}

export default function MbikeqyresiTemaveList({mbikeqyresittemave, selectMbikeqyresiTemave,deleteMbikeqyresiTemave}:Props){
    return (
        <Segment>
            <Item.Group divided>
                {mbikeqyresittemave.map(mbikeqyresitemave =>(
                    <Item key={mbikeqyresitemave.id}>
                        <Item.Content>
                            <Item.Header as='a'>{mbikeqyresitemave.titulliTemes}</Item.Header>
                            <Item.Meta>{mbikeqyresitemave.studenti}</Item.Meta>
                            <Item.Description>
                        <div>{mbikeqyresitemave.muaji},{mbikeqyresitemave.viti} </div>  
                        <div>{mbikeqyresitemave.departamenti}</div>      
                        <div>{mbikeqyresitemave.niveliAkademik}</div>      
                            </Item.Description>
                            <Item.Extra>
                                <Button onClick={() => selectMbikeqyresiTemave(mbikeqyresitemave.id)} floated='right' content='View' color='blue'/>
                                <Button onClick={() => deleteMbikeqyresiTemave(mbikeqyresitemave.id)} floated='right' content='delete' color='red'/>
                                
                            </Item.Extra>
                        </Item.Content>
                    </Item>
                ))}
            </Item.Group>
        </Segment>
    )
}
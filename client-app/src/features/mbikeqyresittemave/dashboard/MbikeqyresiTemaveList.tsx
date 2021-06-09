import { observer } from 'mobx-react-lite';
import React, { SyntheticEvent, useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, Item, Segment } from 'semantic-ui-react';
import { useStore } from '../../../app/stores/store';


export default observer (function MbikeqyresiTemaveList()
{
    const{ mbikeqyresitemaveStore}= useStore();
    const{deleteMbikeqyresiTemave,loading,mbikeqyresitemaveByStudenti}= mbikeqyresitemaveStore;
    
    const[target, setTarget]= useState('');

    function handleMbikeqyresiTemaveDelete(e: SyntheticEvent<HTMLButtonElement>, id:string){
        setTarget(e.currentTarget.name);
        deleteMbikeqyresiTemave(id);
    }
    
    

    return (
        <Segment>
            <Item.Group divided>
                {mbikeqyresitemaveByStudenti.map(mbikeqyresitemave =>(
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
                                <Button as={Link} to={`/mbikeqyresitemave/${mbikeqyresitemave.id}`}floated='right' content='View' color='blue'/>
                                <Button 
                                    name={mbikeqyresitemave.id}
                                    loading={loading && target ===mbikeqyresitemave.id}
                                    onClick={(e) => handleMbikeqyresiTemaveDelete(e,mbikeqyresitemave.id)}
                                    floated='right' 
                                    content='delete' 
                                    color='red'/>
                            </Item.Extra>
                        </Item.Content>
                    </Item>
                ))}
            </Item.Group>
        </Segment>
    )
})
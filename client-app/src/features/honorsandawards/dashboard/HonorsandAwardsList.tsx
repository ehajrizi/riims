import { observer } from 'mobx-react-lite';
import React, { SyntheticEvent, useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, Item, Segment } from 'semantic-ui-react';
import { useStore } from '../../../app/stores/store';


export default observer (function HonorandAwardList()
{
    const{ honorandawardStore}= useStore();
    const{DeleteHonorandAward,loading,honorsandawardsByTitulli}= honorandawardStore;
    
    const[target, setTarget]= useState('');

    function handleHonorandAwardDelete(e: SyntheticEvent<HTMLButtonElement>, id:string){
        setTarget(e.currentTarget.name);
        DeleteHonorandAward(id);
    }
    
    

    return (
        <Segment>
            <Item.Group divided>
                {honorsandawardsByTitulli.map(honorandaward =>(
                    <Item key={honorandaward.id}>
                        <Item.Content>
                            <Item.Header >{honorandaward.titulli}</Item.Header>
                            <Item.Description>
                        <div>{honorandaward.muaji},{honorandaward.viti} </div>  
                        <div>{honorandaward.institucioni}</div>       
                        <div>{honorandaward.pozita}</div>       
                            </Item.Description>
                            <Item.Extra>
                                <Button as={Link} to={`/honorandaward/${honorandaward.id}`}floated='right' content='View' color='blue'/>
                                <Button 
                                    name={honorandaward.id}
                                    loading={loading && target ===honorandaward.id}
                                    onClick={(e) => handleHonorandAwardDelete(e,honorandaward.id)}
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
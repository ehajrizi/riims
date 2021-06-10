import { observer } from 'mobx-react-lite';
import React, { SyntheticEvent, useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, Checkbox, Item, Segment } from 'semantic-ui-react';
import { useStore } from '../../../app/stores/store';

export default observer( function ProfiliList()
{
    const {profiliStore} = useStore();
    const {deleteProfili, profiletByDate, loading} = profiliStore;
   
    const [target, setTarget] = useState('');

    function handleProfiliDelete(e: SyntheticEvent<HTMLButtonElement>, id:string){
        
        setTarget(e.currentTarget.name);
        deleteProfili(id);
    }

    return(
        <Segment>
            <Item.Group divided>
                {profiletByDate.map(profili =>(
                    <Item key={profili.id}>
                        <Item.Content>
                            <Item.Header as='a'>{profili.emri} - {profili.emriIMesem} - {profili.mbiemri}</Item.Header>
                 
                            
                            <Item.Meta>{profili.titulliShkencor}</Item.Meta>
                            
                            <Item.Description>
                                <div>{profili.dataELindjes}</div>
                                <div>{profili.vendiILindjes}</div>
                                <div>{profili.shtetiILindjes}</div>
								<div>{profili.nrTelefonit}</div>
								<div>{profili.gjinia}</div>
								
                            </Item.Description>
                            <Item.Extra>
                                <Button as={Link} to={`/profili/${profili.id}`} floated='right' content='View' color='blue'/>
                                <Button 
                                    name = {profili.id} 
                                    loading={loading && target === profili.id} 
                                    onClick={(e) => handleProfiliDelete(e,profili.id)} 
                                    floated='right' 
                                    content='Delete' 
                                    color='red'/>
                            </Item.Extra>
                        </Item.Content>
                    </Item>
                ))}
            </Item.Group>
        </Segment>
    )
})

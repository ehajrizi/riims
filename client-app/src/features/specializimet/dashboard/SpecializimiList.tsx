import { observer } from 'mobx-react-lite';
import React, { SyntheticEvent, useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, Item, Label, Segment } from 'semantic-ui-react';
import { useStore } from '../../../app/stores/store';

export default observer(function SpecializimiList() {
    const {specializimiStore} = useStore();
    const {deleteSpecializimi, specializimetByDate, loading} = specializimiStore;
   
    const [target, setTarget] = useState('');

   function handleSpecializimiDelete(e: SyntheticEvent<HTMLButtonElement>, id: string) {
        setTarget(e.currentTarget.name);
        deleteSpecializimi(id);
    }

    return (
        <Segment>
            <Item.Group divided>
                {specializimetByDate.map(specializimi => (
                    <Item key={specializimi.id}>
                         <Item.Content>
                            <Item.Header as='a'>{specializimi.titulli}</Item.Header>    
                            <Item.Meta>{specializimi.emriInstitucionit}</Item.Meta>
                            <Item.Description>
                                <div>{specializimi.pershkrimi}</div>
				<div>{specializimi.dataFillestare} - {specializimi.dataPerfundimtare}</div>
				<div>{specializimi.lokacioni}</div>
                            </Item.Description>   
                            <Item.Extra>
                                <Button as={Link} to={`/specializimet/${specializimi.id}`} floated='right' content='View' color='blue'/>
                                <Button 
                                    name = {specializimi.id}
                                    loading={loading && target === specializimi.id} 
                                    onClick={(e) => handleSpecializimiDelete(e,specializimi.id)} 
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
import { observer } from 'mobx-react-lite';
import React, { SyntheticEvent, useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, Item, Segment } from 'semantic-ui-react';
import { useStore } from '../../../app/stores/store';


export default observer(function EdukimiList() {

    const {edukimiStore} = useStore();
    const {deleteEdukimi, edukimetByDate, loading} = edukimiStore;
   
    const [target, setTarget] = useState('');

    function handleEdukimiDelete(e: SyntheticEvent<HTMLButtonElement>, id:string){
        setTarget(e.currentTarget.name);
        deleteEdukimi(id);
    }

    return (
        <Segment>
            <Item.Group divided>
                {edukimetByDate.map(edukimi => (
                    <Item key={edukimi.id}>
                        <Item.Content>
                            <Item.Header as='a'>{edukimi.emri_i_Institucionit}</Item.Header>
                            <Item.Meta>{edukimi.titulli} - {edukimi.fusha_e_Studimit}</Item.Meta>
                            <Item.Description>
                                <div>{edukimi.pershkrimi}</div>
                                <div>{edukimi.lokacioni}</div>
                                <div>{edukimi.dataFillestare} - {edukimi.dataPerfundimtare}</div>
                            </Item.Description>
                            <Item.Extra>
                                <Button as={Link} to={`/edukimet/${edukimi.id}`} floated='right' content='View' color='blue'/>
                                <Button 
                                    name = {edukimi.id} 
                                    loading={loading && target === edukimi.id} 
                                    onClick={(e) => handleEdukimiDelete(e,edukimi.id)} 
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
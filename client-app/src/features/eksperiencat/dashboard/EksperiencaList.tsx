import { observer } from 'mobx-react-lite';
import React, { SyntheticEvent, useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, Checkbox, Item, Segment } from 'semantic-ui-react';
import { Eksperienca } from '../../../app/models/eksperienca';
import { useStore } from '../../../app/stores/store';

export default observer( function EksperiencaDashboard()
{
    const {eksperiencaStore} = useStore();
    const {deleteEksperienca, eksperiencatByDate, loading} = eksperiencaStore;
   
    const [target, setTarget] = useState('');

    function handleEksperiencaDelete(e: SyntheticEvent<HTMLButtonElement>, id:string){
        //e eshte eventi/klikimi 
        setTarget(e.currentTarget.name);
        deleteEksperienca(id);
    }

    return(
        <Segment>
            <Item.Group divided>
                {eksperiencatByDate.map(eksperienca =>(
                    <Item key={eksperienca.id}>
                        <Item.Content>
                            <Item.Header as='a'>{eksperienca.titulli}</Item.Header>
                            <Item.Meta>{eksperienca.emriInstitucionit},{eksperienca.lokacioni}</Item.Meta>
                            <Checkbox label='Pune primare' />
                            <Item.Meta>{eksperienca.dataFillestare}</Item.Meta>
                            <Item.Meta>{eksperienca.dataPerfundimtare}</Item.Meta>
                            <Item.Description>
                                <div>{eksperienca.pershkrimi}</div>
                                <div>{eksperienca.personiKontaktues}</div>
                                <div>{eksperienca.numriTelefonit}</div>
                            </Item.Description>
                            <Item.Extra>
                                <Button as={Link} to={`/eksperiencat/${eksperienca.id}`} floated='right' content='View' color='blue'/>
                                <Button 
                                    name = {eksperienca.id} //se po bohen load krejt butonat delete 
                                    loading={loading && target === eksperienca.id} 
                                    onClick={(e) => handleEksperiencaDelete(e,eksperienca.id)} 
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

 
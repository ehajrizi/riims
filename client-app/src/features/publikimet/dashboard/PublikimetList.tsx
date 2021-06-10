import { observer } from 'mobx-react-lite';
import React, { SyntheticEvent, useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, Checkbox, Item, Segment } from 'semantic-ui-react';
import { useStore } from '../../../app/stores/store';

export default observer(function PublikimetList()
{
    const {publikimiStore} = useStore();
    const {deletePublikimi, publikimetByDate, loading} = publikimiStore;
   
    const [target, setTarget] = useState('');

    function handlePublikimiDelete(e: SyntheticEvent<HTMLButtonElement>, id:string){
        //e eshte eventi/klikimi 
        setTarget(e.currentTarget.name);
        deletePublikimi(id);
    }

    return(
        <Segment>
            <Item.Group divided>
                {publikimetByDate.map(publikimi =>(
                    <Item key={(publikimi.id)}>
                        <Item.Content>
                            <Item.Header as='a'>{publikimi.titulli}</Item.Header>
                            <Item.Meta>{publikimi.data}</Item.Meta>
                            <Item.Description>
                                <div>{publikimi.statusi}, {publikimi.llojiPublikimit} </div>
                                <div>{publikimi.lenda}, {publikimi.kategoria} </div>
                                <div>{publikimi.departamenti}, {publikimi.institucioni}</div>
				<Checkbox label='Autor kryesor' />
                            </Item.Description>
                            <Item.Extra>
                                <Button as={Link} to={`/publikimet/${publikimi.id}`} floated='right' content='View' color='blue'/>
                                <Button 
                                    name = {publikimi.id}
                                    loading={loading && target === publikimi.id} 
                                    onClick={(e) => handlePublikimiDelete(e,publikimi.id)} 
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

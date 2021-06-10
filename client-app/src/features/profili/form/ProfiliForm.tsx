import React, { ChangeEvent, useEffect, useState } from 'react';
import { Button, Checkbox, Form, Segment } from 'semantic-ui-react';
import {v4 as uuid} from 'uuid';
import { Link, useHistory, useParams } from 'react-router-dom';
import { useStore } from '../../../app/stores/store';
import { observer } from 'mobx-react-lite';
import LoadingComponent from '../../../app/layout/LoadingComponents';



export default observer(function ProfiliForm(){
    const history = useHistory();

    const {profiliStore} = useStore();
    const {loadProfili,createProfili,updateProfili,loading, loadingInitial} = profiliStore;
    const {id} = useParams<{id: string}>();

    const [profili, setProfili] = useState({
        id: '',
        titulliShkencor: '',
        emri: '',
        emriIMesem:'',
        mbiemri: '',
        dataELindjes: '',
        vendiILindjes: '',
        shtetiILindjes: '',
        nrTelefonit: '',
        gjinia: '',
        fotoUrl: ''
    
    }); 

    useEffect(() => {
        if(id) loadProfili(id).then(profili => setProfili(profili!))
    
    },[id, loadProfili]);

    function handleSubmitProfili(){
        if(profili.id.length === 0){
            let newProfili = { 
                ...profili,
                id: uuid()
            };
            createProfili(newProfili).then(() => history.push(`/profili/${newProfili.id}`))
      
        }else{
            updateProfili(profili).then(() => history.push(`/profili/${profili.id}`))
        }
    }

    function handleInputChangeProfili(event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>){
        const {name,value} = event.target;
        setProfili({...profili,[name]: value})
    }

    if(loadingInitial) return <LoadingComponent content='Loading profili...'/>


    return(
        <Segment clearing>
            <Form onSubmit={handleSubmitProfili} autoComplete='off'> 
                <Form.Input placeholder = 'Titulli Shkencor'value={profili.titulliShkencor} name='titulliShkencor' onChange={handleInputChangeProfili}/>
                <Form.Input placeholder = 'Emri'value={profili.emri} name='emri' onChange={handleInputChangeProfili}/>
                <Form.Input placeholder = 'Emri I Mesem'value={profili.emriIMesem} name='emriIMesem' onChange={handleInputChangeProfili}/>
                <Form.Input placeholder = 'Mbiemri'value={profili.mbiemri} name='mbiemri' onChange={handleInputChangeProfili}/>
                <Form.Input placeholder = 'Data E Lindjes'value={profili.dataELindjes} name='dataELindjes' onChange={handleInputChangeProfili}/>
                <Form.Input placeholder = 'Vendi I Lindjes'value={profili.vendiILindjes} name='vendiILindjes' onChange={handleInputChangeProfili}/>
                <Form.Input placeholder = 'Shteti I Lindjes'value={profili.shtetiILindjes} name='shtetiILindjes' onChange={handleInputChangeProfili}/>
                <Form.Input placeholder = 'Nr. i Telefonit'value={profili.nrTelefonit} name='nrTelefonit' onChange={handleInputChangeProfili}/>
                <Form.Input placeholder = 'Gjinia'value={profili.gjinia} name='gjinia' onChange={handleInputChangeProfili}/>

                <Button floated='right' positive type ='submit' content='Submit'/>
                <Button as={Link} to='/profili' floated='right' type='button' content='Cancel'/>
                
            </Form>
        </Segment>
    )
})
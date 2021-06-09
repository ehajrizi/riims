import React, { ChangeEvent, useEffect, useState } from 'react';
import { Button, Checkbox, Form, Segment } from 'semantic-ui-react';
import { Eksperienca } from '../../../app/models/eksperienca';
import {v4 as uuid} from 'uuid';
import { useStore } from '../../../app/stores/store';
import LoadingComponent from '../../../app/layout/LoadingComponents';
import { observer } from 'mobx-react-lite';
import { Link, useHistory, useParams } from 'react-router-dom';



export default observer(function EksperiencaForm(){
    const history = useHistory();

    const {eksperiencaStore} = useStore();
    const {loadEksperienca,createEksperienca,updateEksperienca,loading, loadingInitial} = eksperiencaStore;
    //na nimon mi marr krejt props te activityStore
    //pa pas nevoje me shkru activityStore.prop... gjithkun
    const {id} = useParams<{id: string}>();

    const [eksperienca, setEksperienca] = useState({
        id: '',
        emriInstitucionit: '',
        titulli: '',
        punePrimare: true,
        lokacioni: '',
        dataFillestare: '',
        dataPerfundimtare: '',
        pershkrimi: '',
        personiKontaktues: '',
        email: '',
        numriTelefonit: '',
    }); //id ka me ekzistu gjithqysh se mrena useState

    useEffect(() => {
        if(id) loadEksperienca(id).then(eksperienca => setEksperienca(eksperienca!))
        //jem sig qe sktheht undefines
    },[id, loadEksperienca]);
    //masi qe ka states duhet gjithqysh me add dependencies qe mos me render
    //ton kohen pldh po veq kur ndryshon diqka

    function handleSubmitEksperienca(){
        if(eksperienca.id.length === 0){
            let newEksperienca = { //spread the activity
                ...eksperienca,
                id: uuid()
            };
            createEksperienca(newEksperienca).then(() => history.push(`/eksperiencat/${newEksperienca.id}`))
            //mi push nnew location
        }else{
            updateEksperienca(eksperienca).then(() => history.push(`/eksperiencat/${eksperienca.id}`))
        }
    }

    function handleInputChangeEksperienca(event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>){
        const {name,value} = event.target;
        setEksperienca({...eksperienca,[name]: value})
    }

    if(loadingInitial) return <LoadingComponent content='Loading activity...'/>


    return(
        <Segment clearing>
            <Form onSubmit={handleSubmitEksperienca} autoComplete='off'>
                <Form.Input placeholder='Titulli' value={eksperienca.titulli} name='titulli' onChange={handleInputChangeEksperienca}/>
                <Checkbox label='Pune primare' />
                <Form.Input placeholder='Emri i institucionit' value={eksperienca.emriInstitucionit} name='emriInstitucionit' onChange={handleInputChangeEksperienca}/>
                <Form.Input placeholder='Lokacioni' value={eksperienca.lokacioni} name='lokacioni' onChange={handleInputChangeEksperienca}/>
                <Form.TextArea placeholder='Pershkrimi' value={eksperienca.pershkrimi} name='pershkrimi' onChange={handleInputChangeEksperienca}/>
                <Form.Input placeholder='Data e fillimit' value={eksperienca.dataFillestare} name='dataFillestare' onChange={handleInputChangeEksperienca}/>
                <Form.Input placeholder='Data e perfundimit' value={eksperienca.dataPerfundimtare} name='dataPerfundimtare' onChange={handleInputChangeEksperienca}/>
                <Form.Input placeholder='Personi kontaktues' value={eksperienca.personiKontaktues} name='personiKontaktues' onChange={handleInputChangeEksperienca}/>
                <Form.Input placeholder='Email' value={eksperienca.email} name='email' onChange={handleInputChangeEksperienca}/>
                <Form.Input placeholder='Numri i Telefonit'value={eksperienca.numriTelefonit} name='numriTelefonit' onChange={handleInputChangeEksperienca}/>
                <Button floated='right' positive type='submit' content='Submit'/>
                <Button as={Link} to='/eksperiencat' floated='right' type='button' content='Cancel'/>
            </Form>
        </Segment>
    )
})
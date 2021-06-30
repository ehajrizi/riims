import React, { ChangeEvent, useEffect, useState } from 'react';
import { Button, Form, Segment } from 'semantic-ui-react';
import {v4 as uuid} from 'uuid';
import { Link, useHistory, useParams } from 'react-router-dom';
import { useStore } from '../../../app/stores/store';
import { observer } from 'mobx-react-lite';
import LoadingComponent from '../../../app/layout/LoadingComponents';

export default observer(function EdukimiForm(){

    const history = useHistory();

    const {edukimiStore} = useStore();
    const {loadEdukimi,createEdukimi,updateEdukimi,loading, loadingInitial} = edukimiStore;
    const {id} = useParams<{id: string}>();

    const [edukimi, setEdukimi] = useState({
        id: '',
        emri_i_Institucionit: '',
        titulli: '',
        fusha_e_Studimit: '',
        lokacioni: '',
        dataFillestare: '',
        dataPerfundimtare: '',
        pershkrimi: ''
    }); 

    useEffect(() => {
        if(id) loadEdukimi(id).then(edukimi => setEdukimi(edukimi!))
    },[id, loadEdukimi]);

    function handleSubmitEdukimi(){
        if(edukimi.id.length === 0){
            let newEdukimi = {
                ...edukimi,
                id: uuid()
            };
            createEdukimi(newEdukimi).then(() => history.push(`/edukimet/${newEdukimi.id}`))
        }else{
            updateEdukimi(edukimi).then(() => history.push(`/edukimet/${edukimi.id}`))
        }
    }

    function handleInputChangeEdukimi(event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>){
        const {name,value} = event.target;
        setEdukimi({...edukimi,[name]: value})
    }

    if(loadingInitial) return <LoadingComponent content='Loading Edukimi...'/>



    return (
        <Segment clearing>
            <Form onSubmit={handleSubmitEdukimi} autoComplete='off' >
                <Form.Input placeholder='Emri i institucionit' value={edukimi.emri_i_Institucionit} name='emri_i_Institucionit' onChange={handleInputChangeEdukimi} />
                <Form.Input placeholder='Titulli' value={edukimi.titulli} name='titulli' onChange={handleInputChangeEdukimi} />
                <Form.TextArea placeholder='Pershkrimi' value={edukimi.pershkrimi} name='pershkrimi' onChange={handleInputChangeEdukimi} />
                <Form.Input placeholder='Fusha e studimit' value={edukimi.fusha_e_Studimit} name='fusha_e_Studimit' onChange={handleInputChangeEdukimi} />
                <Form.Input placeholder='Lokacioni' value={edukimi.lokacioni} name='lokacioni' onChange={handleInputChangeEdukimi} />
                <Form.Input placeholder='Data fillestare' value={edukimi.dataFillestare} name='dataFillestare' onChange={handleInputChangeEdukimi} />
                <Form.Input placeholder='Data perfundimtare' value={edukimi.dataPerfundimtare} name='dataPerfundimtare' onChange={handleInputChangeEdukimi} />
                <Button floated='right' positive type='submit' content='Submit'/>
                <Button as={Link} to='/edukimet' floated='right' type='button' content='Cancel'/>
            </Form>
        </Segment>
    )
})


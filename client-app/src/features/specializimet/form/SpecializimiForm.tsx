import { observer } from 'mobx-react-lite';
import React, { ChangeEvent, useEffect, useState } from 'react';
import { Link, useHistory, useParams } from 'react-router-dom';
import { Button, Form, Segment } from 'semantic-ui-react';
import LoadingComponent from '../../../app/layout/LoadingComponents';
import { useStore } from '../../../app/stores/store';
import {v4 as uuid} from 'uuid';

export default observer(function SpecializimiForm() {
    const history = useHistory();
    const {specializimiStore} = useStore();
    const {createSpecializimi, updateSpecializimi, loading,
             loadSpecializimi, loadingInitial} = specializimiStore;
    const {id} = useParams<{id: string}>();

    const [specializimi, setSpecializimi] = useState({
        id: '' ,
        emriInstitucionit: '' ,
        titulli: '' ,
        lokacioni: '' ,
        dataFillestare: '' ,
        dataPerfundimtare: '',
        pershkrimi: '' 
    })

    useEffect(() => {
        if (id) loadSpecializimi(id).then(specializimi => setSpecializimi(specializimi!))
    }, [id, loadSpecializimi]);

    function handleSubmitSpecializimi() {
        if (specializimi.id.length === 0) {
            let newSpecializimi = {
                ...specializimi,
                id: uuid()
            };
            createSpecializimi(newSpecializimi).then(() => history.push(`/specializimet/${newSpecializimi.id}`))
        } else {
            updateSpecializimi(specializimi).then(() => history.push(`/specializimet/${specializimi.id}`))
        }
    }
    
    function handleInputChangeSpecializimi(event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
        const {name, value} = event.target;
        setSpecializimi({...specializimi, [name]: value})
    }

    if(loadingInitial) return <LoadingComponent content='Loading specializimi...'/>

    return (
        <Segment clearing>
            {<Form onSubmit={handleSubmitSpecializimi} autoComplete='off'>
                <Form.Input placeholder='Emri i institucionit' value={specializimi.emriInstitucionit} name='emriInstitucionit' onChange={handleInputChangeSpecializimi}/>
                <Form.TextArea placeholder='Titulli' value={specializimi.titulli} name='titulli' onChange={handleInputChangeSpecializimi}/>
                <Form.Input placeholder='Lokacioni' value={specializimi.lokacioni} name='lokacioni' onChange={handleInputChangeSpecializimi}/>
                <Form.Input placeholder='Data Fillestare' value={specializimi.dataFillestare} name='dataFillestare' onChange={handleInputChangeSpecializimi}/>
                <Form.Input placeholder='Data Perfundimtare' value={specializimi.dataPerfundimtare} name='dataPerfundimtare' onChange={handleInputChangeSpecializimi}/>
                <Form.Input placeholder='Pershkrimi' value={specializimi.pershkrimi} name='pershkrimi' onChange={handleInputChangeSpecializimi}/>
                <Button floated='right' positive type='submit' content='Submit'/>
            </Form> }
        </Segment>
    )
})
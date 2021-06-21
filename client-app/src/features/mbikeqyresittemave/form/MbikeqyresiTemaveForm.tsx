import { observer } from 'mobx-react-lite';
import React, { ChangeEvent, useEffect, useState } from 'react';
import { Link, useHistory, useParams } from 'react-router-dom';
import { Button, Form, Segment } from 'semantic-ui-react';
import { useStore } from '../../../app/stores/store';
import {v4 as uuid} from 'uuid';
import LoadingComponent from '../../../app/layout/LoadingComponents';


export default observer (function MbikeqyresiTemaveForm(){
const history= useHistory();

    const {mbikeqyresitemaveStore}= useStore();
    const {loadingInitial,createMbikeqyresiTemave, loadMbikeqyresiTemave,updateMbikeqyresiTemave,loading}= mbikeqyresitemaveStore;
    const {id}= useParams<{id: string}>();

    const [mbikeqyresitemave, setMbikeqyresiTemave]= useState({
        id:'',
        titulliTemes: '',
        studenti:  '',
        muaji: '' ,
        viti: '' ,
        institucioni: '',
        fakulteti: '',
        niveliAkademik:''

    });

    useEffect (() => {
        if(id) loadMbikeqyresiTemave(id).then(mbikeqyresitemave => setMbikeqyresiTemave(mbikeqyresitemave!))
    },[id, loadMbikeqyresiTemave])

    function handleSubmitMbikeqyresiTemave(){
        if (mbikeqyresitemave.id.length ===0){
            let newMbikeqyresiTemave = {
                ...mbikeqyresitemave,
                id:uuid()
            };
            createMbikeqyresiTemave(newMbikeqyresiTemave).then(() =>history.push(`/mbikeqyresitemave/${newMbikeqyresiTemave.id}`))
        }else{
            updateMbikeqyresiTemave(mbikeqyresitemave).then(()=> history.push(`/mbikeqyresitemave/${mbikeqyresitemave.id}`))
        }
    }



    function handleImputChangeMbikeqyresiTemave(event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>){
        const {name, value}= event.target;
        setMbikeqyresiTemave({...mbikeqyresitemave,[name]:value})
    }
    if(loadingInitial) return <LoadingComponent content ='Loading...'/>
    return (
        <Segment clearing>
            <Form onSubmit={handleSubmitMbikeqyresiTemave} autoComplete='off' >
                <Form.Input placeholder='TitulliTemes' value={mbikeqyresitemave.titulliTemes} name='titulliTemes' onChange={handleImputChangeMbikeqyresiTemave}/>
                <Form.Input placeholder='Studenti' value={mbikeqyresitemave.studenti} name='studenti' onChange={handleImputChangeMbikeqyresiTemave}/>
                <Form.Input placeholder='Muaji' value={mbikeqyresitemave.muaji} name='muaji' onChange={handleImputChangeMbikeqyresiTemave}/>
                <Form.Input placeholder='Viti' value={mbikeqyresitemave.viti} name='viti' onChange={handleImputChangeMbikeqyresiTemave}/>
                <Form.Input placeholder='Institucioni' value={mbikeqyresitemave.institucioni} name='institucioni' onChange={handleImputChangeMbikeqyresiTemave}/>
                <Form.Input placeholder='Fakulteti' value={mbikeqyresitemave.fakulteti} name='fakulteti' onChange={handleImputChangeMbikeqyresiTemave}/>
                <Form.Input placeholder='NiveliAkademik' value={mbikeqyresitemave.niveliAkademik} name='niveliAkademik' onChange={handleImputChangeMbikeqyresiTemave}/>
                <Button floated='right' positive type='submit' content='Submit'/>
                <Button as={Link} to='/mbikeqyresitemave' floated='right' type='button' content='Cancel'/>
            </Form>
        </Segment>
    
    )
})
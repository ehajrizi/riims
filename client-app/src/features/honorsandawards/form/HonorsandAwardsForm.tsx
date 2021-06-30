import { observer } from 'mobx-react-lite';
import React, { ChangeEvent, useEffect, useState } from 'react';
import { Link, useHistory, useParams } from 'react-router-dom';
import { Button, Form, Segment } from 'semantic-ui-react';
import { useStore } from '../../../app/stores/store';
import {v4 as uuid} from 'uuid';
import LoadingComponent from '../../../app/layout/LoadingComponents';


export default observer (function HonorandAwardForm(){
const history= useHistory();

    const {honorandawardStore}= useStore();
    const {loadingInitial,createHonorandAward, loadHonorandAward,updateHonorandAward,loading}= honorandawardStore;
    const {id}= useParams<{id: string}>();

    const [honorandaward, setHonorandAward]= useState({
        id:'',
        titulli: '',
        muaji: '' ,
        viti: '' ,
        institucioni: '',
        pozita: '' ,

    });

    useEffect (() => {
        if(id) loadHonorandAward(id).then(honorandaward => setHonorandAward(honorandaward!))
    },[id, loadHonorandAward])

    function handleSubmitHonorandAward(){
        if (honorandaward.id.length ===0){
            let newHonorandAward = {
                ...honorandaward,
                id:uuid()
            };
            createHonorandAward(newHonorandAward).then(() =>history.push(`/honorandaward/${newHonorandAward.id}`))
        }else{
            updateHonorandAward(honorandaward).then(()=> history.push(`/honorandaward/${honorandaward.id}`))
        }
    }



    function handleImputChangeHonorandAward(event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>){
        const {name, value}= event.target;
        setHonorandAward({...honorandaward,[name]:value})
    }
    if(loadingInitial) return <LoadingComponent content ='Loading...'/>
    return (
        <Segment clearing>
            <Form onSubmit={handleSubmitHonorandAward} autoComplete='off' >
                <Form.Input placeholder='Titulli' value={honorandaward.titulli} name='titulli' onChange={handleImputChangeHonorandAward}/>
                <Form.Input placeholder='Muaji' value={honorandaward.muaji} name='muaji' onChange={handleImputChangeHonorandAward}/>
                <Form.Input placeholder='Viti' value={honorandaward.viti} name='viti' onChange={handleImputChangeHonorandAward}/>
                <Form.Input placeholder='Institucioni' value={honorandaward.institucioni} name='institucioni' onChange={handleImputChangeHonorandAward}/>
                <Form.Input placeholder='Pozita' value={honorandaward.pozita} name='pozita' onChange={handleImputChangeHonorandAward}/>
                <Button floated='right' positive type='submit' content='Submit'/>
                <Button as={Link} to='/honorandaward' floated='right' type='button' content='Cancel'/>
            </Form>
        </Segment>
    
    )
})
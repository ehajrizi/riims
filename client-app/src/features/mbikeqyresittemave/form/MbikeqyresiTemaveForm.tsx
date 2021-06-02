
import React, { ChangeEvent, useState } from 'react';
import { Button, Form, Segment } from 'semantic-ui-react';
import {MbikeqyresiTemave } from '../../../app/models/mbikeqyresitemave';

interface Props {
    mbikeqyresitemave: MbikeqyresiTemave | undefined;
    closeFormMbikeqyresiTemave:() => void;
    createOrEditMbikeqyresiTemave:(mbikeqyresitemave: MbikeqyresiTemave)=> void;
}

export default function MbikeqyresiTemaveForm({mbikeqyresitemave: selectedMbikeqyresiTemave,closeFormMbikeqyresiTemave,createOrEditMbikeqyresiTemave}:Props){
    
    const initialState = selectedMbikeqyresiTemave ?? {
        id:'',
        titulliTemes: '',
        studenti:  '',
        muaji: '' ,
        viti: '' ,
        departamenti: '',
        niveliAkademik:''
    }

    const [mbikeqyresitemave, setMbikeqyresiTemave]= useState(initialState);

    function handleSubmitMbikeqyresiTemave(){
        createOrEditMbikeqyresiTemave(mbikeqyresitemave);
    }

    function handleImputChangeMbikeqyresiTemave(event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>){
        const {name, value}= event.target;
        setMbikeqyresiTemave({...mbikeqyresitemave,[name]:value})
    }
    return (
        <Segment clearing>
            <Form onSubmit={handleSubmitMbikeqyresiTemave} autoComplete='off' >
                <Form.Input placeholder='TitulliTemes' value={mbikeqyresitemave.titulliTemes} name='titulliTemes' onChange={handleImputChangeMbikeqyresiTemave}/>
                <Form.Input placeholder='Studenti' value={mbikeqyresitemave.studenti} name='studenti' onChange={handleImputChangeMbikeqyresiTemave}/>
                <Form.Input placeholder='Muaji' value={mbikeqyresitemave.muaji} name='muaji' onChange={handleImputChangeMbikeqyresiTemave}/>
                <Form.Input placeholder='Viti' value={mbikeqyresitemave.viti} name='viti' onChange={handleImputChangeMbikeqyresiTemave}/>
                <Form.Input placeholder='Departamenti' value={mbikeqyresitemave.departamenti} name='departamenti' onChange={handleImputChangeMbikeqyresiTemave}/>
                <Form.Input placeholder='NiveliAkademik' value={mbikeqyresitemave.niveliAkademik} name='niveliAkademik' onChange={handleImputChangeMbikeqyresiTemave}/>
                
                <Button floated='right' positive type='submit' content='Submit'/>
                <Button onClick={closeFormMbikeqyresiTemave} floated='right' type='button' content='Cancel'/>
            </Form>
        </Segment>
    
    )
}
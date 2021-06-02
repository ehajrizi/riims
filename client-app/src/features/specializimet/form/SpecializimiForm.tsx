import React, { ChangeEvent, useState } from 'react';
import { Button, Form, Segment } from 'semantic-ui-react';
import { Specializimi } from '../../../app/models/specializimi';

interface Props {
    specializimi: Specializimi | undefined;
    closeFormSpecializimi: () => void;
    createOrEditSpecializimi: (specializimi: Specializimi) => void;
}


export default function SpecializimiForm({specializimi: selectedSpecializimi, closeFormSpecializimi, createOrEditSpecializimi} : Props) {
    
    const initialState = selectedSpecializimi ?? {
        id: '' ,
        emriInstitucionit: '' ,
        titulli: '' ,
        lokacioni: '' ,
        dataFillestare: '' ,
        dataPerfundimtare: '',
        pershkrimi: '' 
    }

    const [specializimi, setSpecializimi] = useState(initialState);

    function handleSubmitSpecializimi() {
        createOrEditSpecializimi(specializimi);
    }
    
    function handleInputChangeSpecializmi(event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
        const {name, value} = event.target;
        setSpecializimi({...specializimi, [name]: value})
    }
    
    return (
        <Segment clearing>
            {<Form onSubmit={handleSubmitSpecializimi} autoComplete='off'>
                <Form.Input placeholder='Emri i institucionit' value={specializimi.emriInstitucionit} name='emriInstitucionit' onChange={handleInputChangeSpecializmi}/>
                <Form.TextArea placeholder='Titulli' value={specializimi.titulli} name='titulli' onChange={handleInputChangeSpecializmi}/>
                <Form.Input placeholder='Lokacioni' value={specializimi.lokacioni} name='lokacioni' onChange={handleInputChangeSpecializmi}/>
                <Form.Input placeholder='Data Fillestare' value={specializimi.dataFillestare} name='dataFillestare' onChange={handleInputChangeSpecializmi}/>
                <Form.Input placeholder='Data Perfundimtare' value={specializimi.dataPerfundimtare} name='dataPerfundimtare' onChange={handleInputChangeSpecializmi}/>
                <Form.Input placeholder='Pershkrimi' value={specializimi.pershkrimi} name='pershkrimi' onChange={handleInputChangeSpecializmi}/>
                <Button floated='right' positive type='submit' content='Submit'/>
                <Button onClick={closeFormSpecializimi} floated='right' type='button' content='Cancel'/>
            </Form> }
        </Segment>
    )
}
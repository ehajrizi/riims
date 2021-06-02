import React, { ChangeEvent, useState } from 'react';
import { Button, Checkbox, Form, Segment } from 'semantic-ui-react';
import { Eksperienca } from '../../../app/models/eksperienca';



interface Props{
    eksperienca: Eksperienca | undefined;
    closeFormEksperienca: () => void;
    createOrEditEksperienca: (eksperienca: Eksperienca) => void;
}
export default function EksperiencaForm({eksperienca: selectedEksperienca,closeFormEksperienca,createOrEditEksperienca} : Props){

    const initialState = selectedEksperienca ?? {
        id: '',
        emriInstitucionit: '',
        titulli: '',
        punePrimare: false,
        lokacioni: '',
        dataFillestare: '',
        dataPerfundimtare: '',
        pershkrimi: '',
        personiKontaktues: '',
        email: '',
        numriTelefonit: ''
    }
    
    const[eksperienca, setEksperienca] = useState(initialState);

    function handleSubmitEksperienca(){
        createOrEditEksperienca(eksperienca);
    }

    function handleInputChangeEksperienca(event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>){
        const {name,value} = event.target;
        setEksperienca({...eksperienca,[name]: value})
    }

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
                <Button onClick={closeFormEksperienca} floated='right' type='button' content='Cancel'/>
            </Form>
        </Segment>
    )
}
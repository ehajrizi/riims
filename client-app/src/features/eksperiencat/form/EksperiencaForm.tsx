import React, { ChangeEvent, useState } from 'react';
import { Button, Checkbox, Form, Segment } from 'semantic-ui-react';
import { Eksperienca } from '../../../app/models/eksperienca';



interface Props{
    eksperienca: Eksperienca | undefined;
    closeForm: () => void;
    createOrEdit: (eksperienca: Eksperienca) => void;
}
export default function EksperiencaForm({eksperienca: selectedEksperienca,closeForm,createOrEdit} : Props){

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

    function handleSubmit(){
        createOrEdit(eksperienca);
    }

    function handleInputChange(event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>){
        const {name,value} = event.target;
        setEksperienca({...eksperienca,[name]: value})
    }

    return(
        <Segment clearing>
            <Form onSubmit={handleSubmit} autoComplete='off'>
                <Form.Input placeholder='Titulli' value={eksperienca.titulli} name='titulli' onChange={handleInputChange}/>
                <Checkbox label='Pune primare' />
                <Form.Input placeholder='Emri i institucionit' value={eksperienca.emriInstitucionit} name='emriInstitucionit' onChange={handleInputChange}/>
                <Form.Input placeholder='Lokacioni' value={eksperienca.lokacioni} name='lokacioni' onChange={handleInputChange}/>
                <Form.TextArea placeholder='Pershkrimi' value={eksperienca.pershkrimi} name='pershkrimi' onChange={handleInputChange}/>
                <Form.Input placeholder='Data e fillimit' value={eksperienca.dataFillestare} name='dataFillestare' onChange={handleInputChange}/>
                <Form.Input placeholder='Data e perfundimit' value={eksperienca.dataPerfundimtare} name='dataPerfundimtare' onChange={handleInputChange}/>
                <Form.Input placeholder='Personi kontaktues' value={eksperienca.personiKontaktues} name='personiKontaktues' onChange={handleInputChange}/>
                <Form.Input placeholder='Email' value={eksperienca.email} name='email' onChange={handleInputChange}/>
                <Form.Input placeholder='Numri i Telefonit'value={eksperienca.numriTelefonit} name='numriTelefonit' onChange={handleInputChange}/>
                <Button floated='right' positive type='submit' content='Submit'/>
                <Button onClick={closeForm} floated='right' type='button' content='Cancel'/>
            </Form>
        </Segment>
    )
}
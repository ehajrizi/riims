import React, { ChangeEvent, useState } from 'react';
import { Button, Form, Segment } from 'semantic-ui-react';
import { Publikimi } from '../../../app/models/publikimi';

interface Props {
    publikimi: Publikimi | undefined;
    closeFormPublikimi: () => void;
    createOrEditPublikimi: (publikimi: Publikimi) => void;
}

export default function PublikimetForm({publikimi: selectedPublikimi, closeFormPublikimi, createOrEditPublikimi}: Props) {

    const initialState = selectedPublikimi ?? {
        id: '',
        titulli: '',
        emertimiEvent: '',
        data: '',
        vendi: '',
        statusi: '',
        llojiPublikimit: '',
        institucioni: '',
        departamenti: '',
        lenda: '',
        kategoria: '',
        linkuPublikimit: '',
        volumiFaqeve: '',
        referenca: '',
        autorKryesor: ''
    }

    const [publikimi, setPublikimi] = useState(initialState);

    function handleSubmit() {
        createOrEditPublikimi(publikimi);
    }

    function handleInputChange(event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
        const {name, value} = event.target;
        setPublikimi({...publikimi, [name]: value})
    }

    return (
        <Segment clearing>
            <Form onSubmit = {handleSubmit} autoComplete='off'>
                <Form.Input placeholder='Titulli' value={publikimi.titulli} name='titulli' onChange={handleInputChange} />
                <Form.Input placeholder='Emertimi i Eventit' value={publikimi.emertimiEvent} name='emertimiEvent' onChange={handleInputChange} />
                <Form.Input placeholder='Data' value={publikimi.data} name='data' onChange={handleInputChange} />
                <Form.Input placeholder='Vendi' value={publikimi.vendi} name='vendi' onChange={handleInputChange} />
                <Form.Input placeholder='Statusi' value={publikimi.statusi} name='statusi' onChange={handleInputChange} />
                <Form.Input placeholder='Lloji i Publikimit' value={publikimi.llojiPublikimit} name='llojiPublikimit' onChange={handleInputChange} />
                <Form.Input placeholder='Institucioni' value={publikimi.institucioni} name='institucioni' onChange={handleInputChange} />
                <Form.Input placeholder='Lenda' value={publikimi.lenda} name='lenda' onChange={handleInputChange} />
                <Form.Input placeholder='Kategoria' value={publikimi.kategoria} name='kategoria' onChange={handleInputChange} />
                <Form.Input placeholder='Linku i Publikimit' value={publikimi.linkuPublikimit} name='linkuPublikimit' onChange={handleInputChange} />
                <Form.Input placeholder='Volumi i Faqeve' value={publikimi.volumiFaqeve} name='volumiFaqeve' onChange={handleInputChange} />
                <Form.Input placeholder='Referenca' value={publikimi.referenca} name='referenca' onChange={handleInputChange} />
                <Form.Input placeholder='Autori Kryesor' value={publikimi.autorKryesor} name='autorKryesor' onChange={handleInputChange} />
                <Button floated='right' positive type='submit' content='Submit' />
                <Button onClick={closeFormPublikimi} floated='right' type='button' content='Cancel' />
            </Form>
        </Segment>
    )
}
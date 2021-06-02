import React, { ChangeEvent, useState } from "react";
import { Button, Form, Segment } from "semantic-ui-react";
import { Edukimi } from "../../../app/models/edukimi";

interface Props {
    edukimi: Edukimi | undefined;
    closeFormEdukimi: () => void;
    createOrEditEdukimi: (edukimi: Edukimi) => void;
}

export default function EdukimiForm({edukimi: selectedEdukimi, closeFormEdukimi, createOrEditEdukimi}: Props) {

    const initialState = selectedEdukimi ?? {
        id: '',
        emri_i_Institucionit: '',
        titulli: '',
        fusha_e_Studimit: '',
        lokacioni: '',
        dataFillestare: '',
        dataPerfundimtare: '',
        pershkrimi: ''
    }

    const [edukimi, setEdukimi] = useState(initialState); 

    function handleSubmitEdukimi() {
        createOrEditEdukimi(edukimi);
    }

    function handleInputChangeEdukimi(event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
        const {name, value} = event.target;
        setEdukimi({...edukimi, [name]: value})
    }

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
                <Button floated='right' positive type='submit' content="Submit" />
                <Button onClick={closeFormEdukimi} floated='right' type='button' content="Cancel" />
            </Form>
        </Segment>
    )
}
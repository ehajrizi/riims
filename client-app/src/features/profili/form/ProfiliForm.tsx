import react, { ChangeEvent, useState } from 'react';
import { Button, Form, Segment } from 'semantic-ui-react';
import { Profili } from '../../../app/models/profili';

interface Props {
   profili: Profili |undefined;
   closeFormProfili: () => void;
   createOrEditProfili: (profili:Profili) => void;
   
}

export default function ProfiliForm({profili:selectedProfili, closeFormProfili, createOrEditProfili}:Props) {
    const initialState= selectedProfili ??{

        id: '',
        titulliShkencor: '',
        emri:'',
        emriIMesem: '',
        mbiemri: '',
        dataELindjes: '',
        vendiILindjes: '',
        shtetiILindjes: '',
        nrTelefonit: '',
        gjinia: '',
        fotoUrl: ''

    }
    const [profili,setProfili] = useState(initialState);

    function handleSubmit() {
       createOrEditProfili(profili);


    }
    function handleInputChange(event: ChangeEvent<HTMLInputElement| HTMLTextAreaElement>){
        const {name,value} = event.target;
        setProfili({...profili,[name]:value})

    }
    return(

        <Segment clearing>
            <Form onSubmit={handleSubmit} autoComplete='off'> 
                <Form.Input placeholder = 'Titulli Shkencor'value={profili.titulliShkencor} name='titulliShkencor' onChange={handleInputChange}/>
                <Form.Input placeholder = 'Emri'value={profili.emri} name='emri' onChange={handleInputChange}/>
                <Form.Input placeholder = 'Emri I Mesem'value={profili.emriIMesem} name='emriIMesem' onChange={handleInputChange}/>
                <Form.Input placeholder = 'Mbiemri'value={profili.mbiemri} name='mbiemri' onChange={handleInputChange}/>
                <Form.Input placeholder = 'Data E Lindjes'value={profili.dataELindjes} name='dataELindjes' onChange={handleInputChange}/>
                <Form.Input placeholder = 'Vendi I Lindjes'value={profili.vendiILindjes} name='vendiILindjes' onChange={handleInputChange}/>
                <Form.Input placeholder = 'Shteti I Lindjes'value={profili.shtetiILindjes} name='shtetiILindjes' onChange={handleInputChange}/>
                <Form.Input placeholder = 'Nr. i Telefonit'value={profili.nrTelefonit} name='nrTelefonit' onChange={handleInputChange}/>
                <Form.Input placeholder = 'Gjinia'value={profili.gjinia} name='gjinia' onChange={handleInputChange}/>

                <Button floated='right' positive type ='submit' content='Submit'/>
                <Button onClick={closeFormProfili} floated='right'  type ='button' content='Cancel'/>
                
            </Form>
        </Segment>
    )
}
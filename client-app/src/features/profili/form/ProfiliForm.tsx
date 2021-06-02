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
        TitulliShkencor: '',
        Emri:'',
        EmriIMesem: '',
        Mbiemri: '',
        DataELindjes: '',
        VendiILindjes: '',
        ShtetiILindjes: '',
        NrTelefonit: '',
        Gjinia: '',
        FotoUrl: ''

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
                <Form.Input placeholder = 'Titulli Shkencor'value={profili.TitulliShkencor} name='TitulliShkencor' onChange={handleInputChange}/>
                <Form.Input placeholder = 'Emri'value={profili.Emri} name='Emri' onChange={handleInputChange}/>
                <Form.Input placeholder = 'Emri I Mesem'value={profili.EmriIMesem} name='EmriIMesem' onChange={handleInputChange}/>
                <Form.Input placeholder = 'Mbiemri'value={profili.Mbiemri} name='Mbiemri' onChange={handleInputChange}/>
                <Form.Input placeholder = 'Data E Lindjes'value={profili.DataELindjes} name='DataELindjes' onChange={handleInputChange}/>
                <Form.Input placeholder = 'Vendi I Lindjes'value={profili.VendiILindjes} name='VendiILindjes' onChange={handleInputChange}/>
                <Form.Input placeholder = 'Shteti I Lindjes'value={profili.ShtetiILindjes} name='ShtetiILindjes' onChange={handleInputChange}/>
                <Form.Input placeholder = 'Nr. i Telefonit'value={profili.NrTelefonit} name='NrTelefonit' onChange={handleInputChange}/>
                <Form.Input placeholder = 'Gjinia'value={profili.Gjinia} name='Gjinia' onChange={handleInputChange}/>

                <Button floated='right' positive type ='submit' content='Submit'/>
                <Button onClick={closeFormProfili} floated='right'  type ='button' content='Cancel'/>
                
            </Form>
        </Segment>
    )
}
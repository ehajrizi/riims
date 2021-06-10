import React, { ChangeEvent, useEffect, useState } from 'react';
import { Button, Form, Segment } from 'semantic-ui-react';
import {v4 as uuid} from 'uuid';
import { Link, useHistory, useParams } from 'react-router-dom';
import { useStore } from '../../../app/stores/store';
import { observer } from 'mobx-react-lite';
import LoadingComponent from '../../../app/layout/LoadingComponents';

export default observer(function PublikimetForm(){
    const history = useHistory();

    const {publikimiStore} = useStore();
    const {loadPublikimi, createPublikimi, updatePublikimi, loading, loadingInitial} = publikimiStore;
    const {id} = useParams<{id: string}>();

    const [publikimi, setPublikimi] = useState({
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
        autorKryesor: '',
    });

    useEffect(() => {
        if(id) loadPublikimi(id).then(publikimi => setPublikimi(publikimi!))
        
    },[id, loadPublikimi]);

    function handleSubmitPublikimi(){
        if(publikimi.id.length === 0){
            let newPublikimi = { 
                ...publikimi,
                id: uuid()
            };
            createPublikimi(newPublikimi).then(() => history.push(`/publikimet/${newPublikimi.id}`))
        }else{
            updatePublikimi(publikimi).then(() => history.push(`/publikimet/${publikimi.id}`))
        }
    }

    function handleInputChangePublikimi(event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>){
        const {name,value} = event.target;
        setPublikimi({...publikimi,[name]: value})
    }

    if(loadingInitial) return <LoadingComponent content='Loading publikimin...'/>


    return(
        <Segment clearing>
            <Form onSubmit = {handleSubmitPublikimi} autoComplete='off'>
                <Form.Input placeholder='Titulli' value={publikimi.titulli} name='titulli' onChange={handleInputChangePublikimi} />
                <Form.Input placeholder='Emertimi i Eventit' value={publikimi.emertimiEvent} name='emertimiEvent' onChange={handleInputChangePublikimi} />
                <Form.Input placeholder='Data' value={publikimi.data} name='data' onChange={handleInputChangePublikimi} />
                <Form.Input placeholder='Vendi' value={publikimi.vendi} name='vendi' onChange={handleInputChangePublikimi} />
                <Form.Input placeholder='Statusi' value={publikimi.statusi} name='statusi' onChange={handleInputChangePublikimi} />
                <Form.Input placeholder='Lloji i Publikimit' value={publikimi.llojiPublikimit} name='llojiPublikimit' onChange={handleInputChangePublikimi} />
                <Form.Input placeholder='Institucioni' value={publikimi.institucioni} name='institucioni' onChange={handleInputChangePublikimi} />
                <Form.Input placeholder='Lenda' value={publikimi.lenda} name='lenda' onChange={handleInputChangePublikimi} />
                <Form.Input placeholder='Kategoria' value={publikimi.kategoria} name='kategoria' onChange={handleInputChangePublikimi} />
                <Form.Input placeholder='Linku i Publikimit' value={publikimi.linkuPublikimit} name='linkuPublikimit' onChange={handleInputChangePublikimi} />
                <Form.Input placeholder='Volumi i Faqeve' value={publikimi.volumiFaqeve} name='volumiFaqeve' onChange={handleInputChangePublikimi} />
                <Form.Input placeholder='Referenca' value={publikimi.referenca} name='referenca' onChange={handleInputChangePublikimi} />
                <Form.Input placeholder='Autori Kryesor' value={publikimi.autorKryesor} name='autorKryesor' onChange={handleInputChangePublikimi} />
                {/* <Checkbox label='Autor kryesor' /> */}
                <Button floated='right' positive type='submit' content='Submit' />
                <Button as={Link} to='/publikimet' floated='right' type='button' content='Cancel'/>
            </Form>
        </Segment>
    )
})
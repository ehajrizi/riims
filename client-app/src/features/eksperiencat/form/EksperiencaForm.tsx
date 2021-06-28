import React, { ChangeEvent, useEffect, useState } from 'react';
import { Button, Checkbox, Form, Header, Segment } from 'semantic-ui-react';
import {v4 as uuid} from 'uuid';
import { useStore } from '../../../app/stores/store';
import LoadingComponent from '../../../app/layout/LoadingComponents';
import { observer } from 'mobx-react-lite';
import { Link, useHistory, useParams } from 'react-router-dom';
import ReactDOM from 'react-dom';
import { Backdrop, CloseButton, FormClass, StyledModal, Wrapper } from '../../modal.style';

export interface ModalProps{
    isShown: boolean;
    hide: () => void;
}

export default observer(function EksperiencaForm({isShown, hide} : ModalProps){
    const history = useHistory();

    const {eksperiencaStore} = useStore();
    const {loadEksperienca,createEksperienca,updateEksperienca,loadingInitial} = eksperiencaStore;
    const {id} = useParams<{id: string}>();

    const [eksperienca, setEksperienca] = useState({
        id: '',
        emriInstitucionit: '',
        titulli: '',
        punePrimare: true,
        lokacioni: '',
        dataFillestare: '',
        dataPerfundimtare: '',
        pershkrimi: '',
        personiKontaktues: '',
        email: '',
        numriTelefonit: '',
    }); 

    useEffect(() => {
        if(id) loadEksperienca(id).then(eksperienca => setEksperienca(eksperienca!))
    },[id, loadEksperienca]);

    function handleSubmitEksperienca(){
        if(eksperienca.id.length === 0){
            let newEksperienca = {
                ...eksperienca,
                id: uuid()
            };
            createEksperienca(newEksperienca).then(() => history.push(`/eksperiencat/${newEksperienca.id}`))
        }else{
            updateEksperienca(eksperienca).then(() => history.push(`/eksperiencat/${eksperienca.id}`))
        }   
    }

    function handleInputChangeEksperienca(event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>){
        const {name,value} = event.target;
        setEksperienca({...eksperienca,[name]: value})
    }

    if(loadingInitial) return <LoadingComponent content='Loading activity...'/>

    const modal =(
            <Segment>
                <Backdrop/>
                <Wrapper>
                    <StyledModal>
                        <Header>
                            <CloseButton onClick={hide} as={Link} to='/eksperiencat'>X</CloseButton>
                        </Header>
                        <FormClass>
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
                                <Button onClick={handleSubmitEksperienca} floated='right' positive type='submit' content='Submit'/>
                                <Button onClick={hide} as={Link} to='/eksperiencat' floated='right' content='Cancel'/>
                            </Form>
                        </FormClass>
                    </StyledModal>
                </Wrapper>
            </Segment>
    );
    return isShown ? ReactDOM.createPortal(modal, document.body) : null;
})
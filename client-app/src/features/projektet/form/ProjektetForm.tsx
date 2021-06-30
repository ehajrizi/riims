import { observer } from 'mobx-react';
import React, { ChangeEvent, FunctionComponent, useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import { Link, useHistory, useParams } from 'react-router-dom';
import { Button, Form, Modal, Segment } from 'semantic-ui-react';
import LoadingComponent from '../../../app/layout/LoadingComponents';
import { useStore } from '../../../app/stores/store';
import { v4 as uuid } from 'uuid';
import {
    Wrapper,
    Header,
    StyledModal,
    CloseButton,
    Backdrop,
    FormClass,
} from '../../modal.style';

export interface ModalProps {
    isShown: boolean;
    hide: () => void;
}

export default observer(function ProjektetForm({ isShown, hide }: ModalProps) {
    const history = useHistory();

    const { projektiStore } = useStore();
    const { loadProjekti, createProjekti, updateProjekti, loading, loadingInitial } = projektiStore;
    const { id } = useParams<{ id: string }>();

    const [projekti, setProjekti] = useState({
        id: '',
        emriProjektit: '',
        pershkrimi: '',
        lokacioni: '',
        dataFillimit: '',
        dataMbarimit: '',
        buxheti: 0,
        emriKlientit: '',
        institucioni: ''
    });

    useEffect(() => {
        if (id) loadProjekti(id).then(projekti => setProjekti(projekti!))
    }, [id, loadProjekti]);

    function handleSubmitProjekti() {
        if (projekti.id.length === 0) {
            let newProjekti = {
                ...projekti,
                id: uuid()
            };
            createProjekti(newProjekti).then(() => history.push(`/projektet/${newProjekti.id}`))
        } else {
            updateProjekti(projekti).then(() => history.push(`/projektet/${projekti.id}`))
        }
    }

    function handleInputChangeProjekti(event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
        const { name, value } = event.target;
        setProjekti({ ...projekti, [name]: value })
    }

    if (loadingInitial) return <LoadingComponent content='Loading publikimin...' />

    const modal = (
        <Segment>
            <Backdrop />
            <Wrapper>
                <StyledModal>
                    <Header>
                        <CloseButton onClick={hide} as={Link} to='/projektet'>X</CloseButton>
                    </Header>
                    <FormClass>
                        <Form onSubmit={handleSubmitProjekti} autoComplete='off'>
                            <Form.Input placeholder='Emri i projektit' value={projekti.emriProjektit} name='emriProjektit' onChange={handleInputChangeProjekti} />
                            <Form.TextArea placeholder='Pershkrimi' value={projekti.pershkrimi} name='pershkrimi' onChange={handleInputChangeProjekti} />
                            <Form.Input placeholder='Lokacioni' value={projekti.lokacioni} name='lokacioni' onChange={handleInputChangeProjekti} />
                            <Form.Input type='date' placeholder='Prej Dates' value={projekti.dataFillimit} name='dataFillimit' onChange={handleInputChangeProjekti} />
                            <Form.Input placeholder='Deri me' value={projekti.dataMbarimit} name='dataMbarimit' onChange={handleInputChangeProjekti} />
                            <Form.Input placeholder='Buxheti' value={projekti.buxheti} name='buxheti' onChange={handleInputChangeProjekti} />
                            <Form.Input placeholder='Emri i klientit' value={projekti.emriKlientit} name='emriKlientit' onChange={handleInputChangeProjekti} />
                            <Form.Input placeholder='Institucioni' value={projekti.institucioni} name='institucioni' onChange={handleInputChangeProjekti} />
                            <Button onClick={handleSubmitProjekti}  floated='right' positive type='submit' content='Submit' />
                            <Button onClick={hide} as={Link} to='/publikimet' floated='right' type='button' content='Cancel' />
                        </Form>
                    </FormClass>
                </StyledModal>
            </Wrapper>
        </Segment>
    );
    return isShown ? ReactDOM.createPortal(modal, document.body) : null;
})
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

export default observer(function PjesemarresitForm({ isShown, hide }: ModalProps) {
    const history = useHistory();

    const { pjesemarresiStore } = useStore();
    const { loadPjesemarresi, createPjesemarresi, updatePjesemarresi, loading, loadingInitial } = pjesemarresiStore;
    const { id } = useParams<{ id: string }>();

    const [pjesemarresi, setPjesemarresi] = useState({
        id: '',
        emriIPjesemarresit: '',
        roli: '',
        useriId: ''
    });

    useEffect(() => {
        if (id) loadPjesemarresi(id).then(pjesemarresi => setPjesemarresi(pjesemarresi!))
    }, [id, loadPjesemarresi]);

    function handleSubmitPjesemarresi() {
        if (pjesemarresi.id.length === 0) {
            let newPjesemarresi = {
                ...pjesemarresi,
                id: uuid()
            };
            createPjesemarresi(newPjesemarresi).then(() => history.push(`/pjesemarresit/${newPjesemarresi.id}`))
        } else {
            updatePjesemarresi(pjesemarresi).then(() => history.push(`/pjesemarresit/${pjesemarresi.id}`))
        }
    }

    function handleInputChangePjesemarresi(event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
        const { name, value } = event.target;
        setPjesemarresi({ ...pjesemarresi, [name]: value })
    }

    if (loadingInitial) return <LoadingComponent content='Loading pjesemarresin...' />

    const modal = (
        <Segment>
            <Backdrop />
            <Wrapper>
                <StyledModal>
                    <Header>
                        <CloseButton onClick={hide} as={Link} to='/pjesemarresit'>X</CloseButton>
                    </Header>
                    <FormClass>
                        <Form onSubmit={handleSubmitPjesemarresi} autoComplete='off'>
                            <Form.Input placeholder='Emri i pjesemarresit' value={pjesemarresi.emriIPjesemarresit} name='emriPjesemarresit' onChange={handleInputChangePjesemarresi} />
                            
                            <Form.Input placeholder='roli' value={pjesemarresi.roli} name='roli' onChange={handleInputChangePjesemarresi} />
                           
                            <Button onClick={handleSubmitPjesemarresi}  floated='right' positive type='submit' content='Submit' />
                            <Button onClick={hide} as={Link} to='/publikimet' floated='right' type='button' content='Cancel' />
                        </Form>
                    </FormClass>
                </StyledModal>
            </Wrapper>
        </Segment>
    );
    return isShown ? ReactDOM.createPortal(modal, document.body) : null;
})
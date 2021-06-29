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

export default observer(function PublikimetFormEdit({ isShown, hide }: ModalProps) {
    const history = useHistory();

    const { publikimiStore } = useStore();
    const { loadPublikimi, createPublikimi, updatePublikimi, loading, loadingInitial } = publikimiStore;
    const { id } = useParams<{ id: string }>();

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
        if (id) loadPublikimi(id).then(publikimi => setPublikimi(publikimi!))
    }, [id, loadPublikimi]);

    function handleSubmitPublikimi() {
        updatePublikimi(publikimi).then(() => history.push(`/publikimet/${publikimi.id}`));
    }

    function handleInputChangePublikimi(event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
        const { name, value } = event.target;
        setPublikimi({ ...publikimi, [name]: value })
    }

    if (loadingInitial) return <LoadingComponent content='Loading publikimin...' />

    const modal = (
        <Segment>
            <Backdrop />
            <Wrapper>
                <StyledModal>
                    <Header>
                        <CloseButton onClick={hide} as={Link} to='/publikimet'>X</CloseButton>
                    </Header>
                    <FormClass>
                        <Form onSubmit={handleSubmitPublikimi} autoComplete='off'>
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
                            <Button onClick={handleSubmitPublikimi} floated='right' positive type='submit' content='Submit' />
                            <Button onClick={hide} as={Link} to='/publikimet' floated='right' type='button' content='Cancel' />
                        </Form>
                    </FormClass>
                </StyledModal>
            </Wrapper>
        </Segment>
    );
    return isShown ? ReactDOM.createPortal(modal, document.body) : null;
})
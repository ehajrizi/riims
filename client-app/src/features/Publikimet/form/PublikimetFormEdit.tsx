import { observer } from 'mobx-react';
import React, { ChangeEvent, FunctionComponent, useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import { Link, useHistory, useParams } from 'react-router-dom';
import { Button, Header, Modal, Segment } from 'semantic-ui-react';
import LoadingComponent from '../../../app/layout/LoadingComponents';
import { useStore } from '../../../app/stores/store';
import { v4 as uuid } from 'uuid';
import {
    Wrapper,
    StyledModal,
    Backdrop,
    FormClass,
} from '../../modal.style';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import MyTextInput from '../../../app/api/common/form/MyTextInput';
import MyTextArea from '../../../app/api/common/form/MyTextArea';
import MySelectInput from '../../../app/api/common/form/MySelectInput';
import MyDateInput from '../../../app/api/common/form/MyDateInput';
import { Statusi } from '../../../app/api/common/options/publikimiOptions';
import { Publikimi } from '../../../app/models/publikimi';

export interface ModalProps {
    isShown: boolean;
    hide: () => void;
    publikimi: Publikimi;
}

export default observer(function PublikimetEditForm({ isShown, hide, publikimi }: ModalProps) {
    const history = useHistory();
    const { publikimiStore } = useStore();
    const {  updatePublikimi, loading, loadPublikimi, loadingInitial } = publikimiStore;
    const { id } = useParams<{ id: string }>();

    const [publikim, setPublikimi] = useState<Publikimi>({
        id: publikimi.id,
        titulli: publikimi.titulli,
        emertimiEvent: publikimi.emertimiEvent,
        data: publikimi.data,
        vendi: publikimi.vendi,
        statusi: publikimi.statusi,
        llojiPublikimit: publikimi.llojiPublikimit,
        institucioni: publikimi.institucioni,
        departamenti: publikimi.departamenti,
        lenda: publikimi.lenda,
        kategoria: publikimi.kategoria,
        linkuPublikimit: publikimi.linkuPublikimit,
        volumiFaqeve: publikimi.volumiFaqeve,
        referenca: publikimi.referenca,
        autorKryesor: publikimi.autorKryesor
    });

    const  validationSchema = Yup.object({
        titulli: Yup.string().required('The activity title is required'),
        emertimiEventit: Yup.string().required('The activity description is required'),
        data: Yup.string().required('Date is required').nullable(),
        vendi: Yup.string().required(),
        statusi: Yup.string().required(),
        llojiPublikimit: Yup.string().required(),
        institucioni: Yup.string().required(),
        departamenti: Yup.string().required(),
        lenda: Yup.string().required(),
        kategoria: Yup.string().required(),
        linkuPublikimit: Yup.string().required(),
        volumiFaqeve: Yup.string().required(),
        referenca: Yup.string().required(),
        autorKryesor: Yup.string().required(),
    })

    useEffect(() => {
        if (id) loadPublikimi(id).then(publikimi => setPublikimi(publikimi!))
    }, [id, loadPublikimi]);

    function handleFormSubmit(publikimi: Publikimi) {
        updatePublikimi(publikimi).then(() => history.push(`/publikimet/${publikimi.id}`))
    }

    if (loadingInitial) return <LoadingComponent content='Loading Activity...' />

    const modal = (
        <Segment>
            <Backdrop />
            <Wrapper>
                <StyledModal>
                    <FormClass>
                    <Header content='Publikimet Details' sub color='teal' />
                    <Formik
                        validationSchema={validationSchema}
                        enableReinitialize
                        initialValues={publikim}
                        onSubmit={values => handleFormSubmit(values)}>
                        {({ handleSubmit, isValid, isSubmitting, dirty }) => (
                            <Form className='ui form' onSubmit={handleSubmit} autoComplete='off'>
                                <MyTextInput name='titulli' placeholder='Titulli' />
                                <MyTextInput name='emertimiEventit' placeholder='Emertimi i eventit' />
                                <MyDateInput
                                    placeholderText='Data'
                                    name='data'
                                    showTimeSelect
                                    timeCaption='time'
                                    dateFormat='MMMM d, yyyy h: mm aa'
                                />
                                <MyTextInput name='vendi' placeholder='Vendi' />
                                <MySelectInput options={Statusi} placeholder='Statusi' name='statusi' />
                                <MyTextInput placeholder='Lloji i Publikimit' name='llojiPublikimit' />
                                <MyTextInput placeholder='Institucioni' name='institucioni' />
                                <MyTextInput placeholder='Departamenti' name='departamenti' />
                                <MyTextInput placeholder='Lenda' name='lenda' />
                                <MyTextInput placeholder='Kategoria' name='kategoria' />
                                <MyTextInput placeholder='Linku i Publikimit' name='linkuPublikimit' />
                                <MyTextInput placeholder='Volumi i Faqeve' name='volumiFaqeve' />
                                <MyTextInput placeholder='Referenca' name='referenca' />
                                <MyTextInput placeholder='Autori Kryesor' name='autorKryesor' />
                                <Button
                                    disabled={isSubmitting || !dirty || !isValid}
                                    loading={loading}
                                    floated='right'
                                    positive type='submit' content='Submit' />
                                <Button onClick={hide} as={Link} to='/publikimet' floated='right' type='button' content='Cancel' />
                            </Form>
                        )}
                    </Formik>
                    </FormClass>
                </StyledModal>
            </Wrapper>
        </Segment >
    );
return isShown ? ReactDOM.createPortal(modal, document.body) : null;
})
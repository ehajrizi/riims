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
import { Publikimi } from '../../../app/models/publikimi';
import { Statusi } from '../../../app/api/common/options/publikimiOptions';

export interface ModalProps {
    isShown: boolean;
    hide: () => void;
}

export default observer(function PublikimetForm({ isShown, hide }: ModalProps) {
    const history = useHistory();
    const { publikimiStore } = useStore();
    const { createPublikimi, updatePublikimi, loading, loadPublikimi, loadingInitial } = publikimiStore;
    const { id } = useParams<{ id: string }>();

    const [publikimi, setPublikimi] = useState<Publikimi>({
        id: '',
        titulli: '',
        emertimiEvent: '',
        data: null,
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
        if(publikimi.id.length === 0) {
            let newPublikimi = {
                ...publikimi,
                id: uuid()
            };
            createPublikimi(newPublikimi).then(() => history.push(`/publikimet/${newPublikimi.id}`))
        }
        else {
            updatePublikimi(publikimi).then(() => history.push(`/publikimet/${publikimi.id}`))
        }
    }

    if (loadingInitial) return <LoadingComponent content='Loading Publikimi...' />

    const modal = (
        <Segment>
            <Backdrop />
            <Wrapper>
                <StyledModal>
                    <FormClass>
                    <Header content='Publikimet Details' sub color='teal' />
                    <Formik
                        validationSchema={validationSchema}
                        initialValues={publikimi}
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
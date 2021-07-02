import { observer } from 'mobx-react';
import React, { ChangeEvent, FunctionComponent, useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import { Link, useHistory, useParams } from 'react-router-dom';
import { Button, Header, Modal, Segment } from 'semantic-ui-react';
import LoadingComponent from '../../../app/layout/LoadingComponents';
import { useStore } from '../../../app/stores/store';
import { v4 as uuid } from 'uuid';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import MyTextInput from '../../../app/api/common/form/MyTextInput';
import MyTextArea from '../../../app/api/common/form/MyTextArea';
import MySelectInput from '../../../app/api/common/form/MySelectInput';
import MyDateInput from '../../../app/api/common/form/MyDateInput';
import { Publikimi } from '../../../app/models/publikimi';
import { Departamenti, Institucioni, Kategorite, LlojiPublikimit, Statusi } from '../../../app/api/common/options/publikimiOptions';

export default observer(function PublikimetForm() {
    const history = useHistory();
    const { publikimiStore, modalStore } = useStore();
    const { createPublikimi, loading, loadPublikimi, loadingInitial } = publikimiStore;
    const { id } = useParams<{ id: string }>();

    const [publikimi, setPublikimi] = useState<Publikimi>({
        id: '',
        titulli: '',
        emertimiEvent: '',
        data: null,
        viti: null,
        vendi: '',
        statusi: '',
        llojiPublikimit: '',
        institucioni: '',
        departamenti: '',
        lenda: '',
        kategoria: '',
        linkuPublikimit: '',
        volumiFaqeve: 0,
        referenca: '',
        autorKryesor: true
    });

    const validationSchema = Yup.object({
        titulli: Yup.string().required('The activity title is required'),
        emertimiEvent: Yup.string().required('The activity description is required'),
        data: Yup.string().required('Date is required').nullable(),
        viti: Yup.string().required('Date is required').nullable(),
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

    function handleFormSubmit(publikimi: Publikimi){
        if(publikimi.id.length === 0){
            let newPublikimi = {
                ...publikimi,
                id: uuid()
            };
            createPublikimi(newPublikimi).then(() => history.push(`/publikimet/`));
            modalStore.closeModal();
        }
    }

    if (loadingInitial) return <LoadingComponent content='Loading Publikimi...' />

    return (
        <Segment>
            <Formik
                validationSchema={validationSchema}
                initialValues={publikimi}
                onSubmit={values => handleFormSubmit(values)}>
                {({ handleSubmit, isValid, isSubmitting, dirty }) => (
                    <Form className='ui form' onSubmit={handleSubmit} autoComplete='off'>
                        <MyTextInput name='titulli' placeholder='Titulli' />
                        <MyTextInput name='emertimiEvent' placeholder='Emertimi i eventit' />
                        <MyDateInput
                            placeholderText='Muaji'
                            name='data'
                            showMonthDropdown
                            dateFormat='MM'
                        />
                        <MyDateInput
                            placeholderText='Viti'
                            name='viti'
                            showYearPicker
                            dateFormat='yyyy'
                        />
                        <MyTextInput name='vendi' placeholder='Vendi' />
                        <MySelectInput options={Statusi} placeholder='Statusi' name='statusi' />
                        <MySelectInput options={LlojiPublikimit} placeholder='Lloji i Publikimit' name='llojiPublikimit' />
                        <MySelectInput options={Institucioni} placeholder='Institucioni' name='institucioni' />
                        <MySelectInput options={Departamenti} placeholder='Departamenti' name='departamenti' />
                        <MyTextInput placeholder='Lenda' name='lenda' />
                        <MySelectInput options={Kategorite} placeholder='Kategoria' name='kategoria' />
                        <MyTextInput placeholder='Linku i Publikimit' name='linkuPublikimit' />
                        <MyTextInput placeholder='Volumi i Faqeve' name='volumiFaqeve' />
                        <MyTextInput placeholder='Referenca' name='referenca' />
                        <MyTextInput placeholder='Autori Kryesor' name='autorKryesor' />
                        <Button
                            disabled={isSubmitting || !dirty || !isValid}
                            loading={loading}
                            floated='right'
                            positive type='submit' content='Submit' />
                        <Button onClick={()=>modalStore.closeModal()}  as={Link} to='/publikimet' floated='right' type='button' content='Cancel' />
                    </Form>
                )}
            </Formik>
        </Segment >
    );
})
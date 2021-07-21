import { observer } from 'mobx-react-lite';
import React, { useEffect, useState } from 'react';
import { Link, useHistory, useParams } from 'react-router-dom';
import { Button, Form, Header, Segment } from 'semantic-ui-react';
import LoadingComponent from '../../../app/layout/LoadingComponents';
import { useStore } from '../../../app/stores/store';
import {v4 as uuid} from 'uuid';
import * as Yup from 'yup';
import MyTextArea from '../../../app/api/common/form/MyTextArea';
import { Formik } from 'formik';
import MyTextInput from '../../../app/api/common/form/MyTextInput';
import MyDateInput from '../../../app/api/common/form/MyDateInput';
import { Certifikimi } from '../../../app/models/certifikimi';

export default observer(function CertifikimiForm() {
    const history = useHistory();
    const {certifikimiStore, modalStore} = useStore();
    const {createCertifikimi, loading,loadCertifikimi, loadingInitial} = certifikimiStore;
    const {id} = useParams<{id: string}>();

    const [certifikimi, setCertifikimi] = useState<Certifikimi>({
        id: '' ,
        emri_Institucionit: '' ,
        titulli: '' ,
        lokacioni: '' ,
        dataFillestare: null, 
        dataPerfundimtare: null,
        pershkrimi: '',
        useriId: ''
    })

    const validationSchema = Yup.object({
        emri_Institucionit:Yup.string().required('Emri i institucionit duhet te plotesohet!'),
        titulli: Yup.string().required('Titulli duhet te plotesohet!'),
        lokacioni: Yup.string().required('Lokacioni duhet te plotesohet!'),
        dataFillestare: Yup.string().required('Data fillestare duhet te plotesohet!').nullable(),
        pershkrimi: Yup.string().required('Pershkrimi duhet te plotesohet!'),
    })

    useEffect(() => {
        if (id) loadCertifikimi(id).then(certifikimi => setCertifikimi(certifikimi!))
    }, [id, loadCertifikimi]);

    function handleFormSubmitCertifikimi(certifikimi: Certifikimi) {
        if (certifikimi.id.length === 0) {
            let newCertifikimi = {
                ...certifikimi,
                id: uuid()
            };
            createCertifikimi(newCertifikimi).then(() => history.push(`/certifikimet`))
            modalStore.closeModal();
        }
    }

    if(loadingInitial) return <LoadingComponent content='Loading certifikimi...'/>

    return (
        <>
        <Segment clearing>
            <Header content='Certfikimi' sub color='blue' />
        <Formik
            validationSchema={validationSchema}
            enableReinitialize
            initialValues={certifikimi}
            onSubmit={values => handleFormSubmitCertifikimi(values)}>
            {({ handleSubmit, isValid, isSubmitting, dirty }) => (
                <Form className='ui form' onSubmit={handleSubmit} autoComplete='off'>
                    <MyTextInput name='emri_Institucionit' placeholder='Emri i institucionit' />
                    <MyTextInput name='titulli' placeholder='Titulli' />
                    <MyTextInput name='lokacioni' placeholder='Lokacioni' />
                    <MyDateInput
                        placeholderText='Data Fillestare'
                        name='dataFillestare'
                        dateFormat='MMMM d, yyy'
                    />
                    <MyDateInput
                        placeholderText='Data Perfundimtare'
                        name='dataPerfundimtare'
                        dateFormat='MMMM d, yyyy'
                        minDate = {certifikimi.dataFillestare}
                    />

                    <MyTextArea rows={3} name='pershkrimi' placeholder='Pershkrimi'/>
                    <Button
                        disabled={isSubmitting || !dirty || !isValid}
                        loading={loading}
                        floated='right'
                        positive type='submit' content='Submit' />
                    <Button onClick={()=>modalStore.closeModal()} as={Link} to='/certifikimet' floated='right' type='button' content='Cancel' />
                </Form>
            )}
        </Formik>
    </Segment >
    </>
    )
})
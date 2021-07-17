import { observer } from 'mobx-react';
import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import { Link, useHistory, useParams } from 'react-router-dom';
import { Button, Header, Modal, Segment } from 'semantic-ui-react';
import LoadingComponent from '../../../app/layout/LoadingComponents';
import { useStore } from '../../../app/stores/store';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import MyTextInput from '../../../app/api/common/form/MyTextInput';
import MyDateInput from '../../../app/api/common/form/MyDateInput';
import MyTextArea from '../../../app/api/common/form/MyTextArea';
import { Certifikimi } from '../../../app/models/certifikimi';

export interface Props {
    cert: Certifikimi;
}

export default observer(function CertifikimiEditForm({ cert }: Props) {
    const history = useHistory();
    const { certifikimiStore, modalStore } = useStore();
    const { updateCertifikimi, loading, loadCertifikimi, loadingInitial } = certifikimiStore;
    const { id } = useParams<{ id: string }>();

    const [certifikimi, setCertifikimi] = useState<Certifikimi>({
        id: cert.id,
        emri_Institucionit: cert.emri_Institucionit,
        titulli: cert.titulli,
        lokacioni: cert.lokacioni,
        dataFillestare: cert.dataFillestare,
        dataPerfundimtare: cert.dataPerfundimtare,
        pershkrimi: cert.pershkrimi,
        useriId: cert.useriId
    });

    const validationSchema = Yup.object({
        emri_Institucionit:Yup.string().required('Emri i institucionit duhet te plotesohet!'),
        titulli: Yup.string().required('Titulli duhet te plotesohet!'),
        lokacioni: Yup.string().required('Lokacioni duhet te plotesohet!'),
        dataFillestare: Yup.string().required('Data fillestare duhet te plotesohet!').nullable(),
        // dataPerfundimtare: Yup.string().required('Data perfundimtare duhet te plotesohet!').nullable(),
        pershkrimi: Yup.string().required(),
    })

    useEffect(() => {
        if (id) loadCertifikimi(id).then(certifikimi => setCertifikimi(certifikimi!))
    }, [id, loadCertifikimi]);

    function handleFormSubmit(certifikimi: Certifikimi) {
        updateCertifikimi(certifikimi).then(() => history.push(`/certifikimet`));
        modalStore.closeModal();
    }

    if (loadingInitial) return <LoadingComponent content='Loading certifikimi...' />

    return(
        <>
        <Segment clearing>
            <Header content='Certifikimet' sub color='teal' />
            <Formik
                validationSchema={validationSchema}
                enableReinitialize
                initialValues={certifikimi}
                onSubmit={values => handleFormSubmit(values)}>
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

                        <MyTextArea rows={3} name='pershkrimi' placeholder='pershkrimi'/>
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
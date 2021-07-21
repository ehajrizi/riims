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
import MySelectInput from '../../../app/api/common/form/MySelectInput';
import MyDateInput from '../../../app/api/common/form/MyDateInput';
import { Specializimi } from '../../../app/models/specializimi';
import MyTextArea from '../../../app/api/common/form/MyTextArea';

export interface Props {
    specializimi: Specializimi;
}

export default observer(function SpecializimiEditForm({ specializimi }: Props) {
    const history = useHistory();
    const { specializimiStore, modalStore } = useStore();
    const { updateSpecializimi, loading, loadSpecializimi, loadingInitial } = specializimiStore;
    const { id } = useParams<{ id: string }>();

    const [specializim, setSpecializimi] = useState<Specializimi>({
        id: specializimi.id,
        emriInstitucionit: specializimi.emriInstitucionit,
        titulli: specializimi.titulli,
        lokacioni: specializimi.lokacioni,
        dataFillestare: specializimi.dataFillestare,
        dataPerfundimtare: specializimi.dataPerfundimtare,
        pershkrimi: specializimi.pershkrimi,
        useriId: specializimi.useriId
    });

    const validationSchema = Yup.object({
        emriInstitucionit:Yup.string().required('Emri i institucionit duhet te plotesohet!'),
        titulli: Yup.string().required('Titulli duhet te plotesohet!'),
        lokacioni: Yup.string().required('Lokacioni duhet te plotesohet!'),
        dataFillestare: Yup.string().required('Data fillestare duhet te plotesohet!').nullable(),
        //dataPerfundimtare: Yup.string().required('Data perfundimtare duhet te plotesohet!').nullable(),
        pershkrimi: Yup.string().required(),
    })

    useEffect(() => {
        if (id) loadSpecializimi(id).then(specializimi => setSpecializimi(specializimi!))
    }, [id, loadSpecializimi]);

    function handleFormSubmit(specializimi: Specializimi) {
        updateSpecializimi(specializimi).then(() => history.push(`/specializimet`));
        modalStore.closeModal();
    }

    if (loadingInitial) return <LoadingComponent content='Loading Specializimi...' />

    return(
        <Segment clearing>
            <Header content='Specializimi' sub color='teal' />
            <Formik
                validationSchema={validationSchema}
                enableReinitialize
                initialValues={specializim}
                onSubmit={values => handleFormSubmit(values)}>
                {({ handleSubmit, isValid, isSubmitting, dirty }) => (
                    <Form className='ui form' onSubmit={handleSubmit} autoComplete='off'>
                        <MyTextInput name='emriInstitucionit' placeholder='Emri i institucionit' />
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
                        />

                        <MyTextArea rows={3} name='pershkrimi' placeholder='pershkrimi'/>
                        <Button
                            disabled={isSubmitting || !dirty || !isValid}
                            loading={loading}
                            floated='right'
                            positive type='submit' content='Submit' />
                        <Button onClick={()=>modalStore.closeModal()} as={Link} to='/specializimet' floated='right' type='button' content='Cancel' />
                    </Form>
                )}
            </Formik>
        </Segment >
    )
})
import { observer } from 'mobx-react-lite';
import React, { ChangeEvent, useEffect, useState } from 'react';
import { Link, useHistory, useParams } from 'react-router-dom';
import { Button, Form, Segment } from 'semantic-ui-react';
import LoadingComponent from '../../../app/layout/LoadingComponents';
import { useStore } from '../../../app/stores/store';
import {v4 as uuid} from 'uuid';
import * as Yup from 'yup';
import MyTextArea from '../../../app/api/common/form/MyTextArea';
import { Formik } from 'formik';
import MyTextInput from '../../../app/api/common/form/MyTextInput';
import { Specializimi } from '../../../app/models/specializimi';

export default observer(function SpecializimiForm() {
    const history = useHistory();
    const {specializimiStore, modalStore} = useStore();
    const {createSpecializimi, loading,
             loadSpecializimi, loadingInitial} = specializimiStore;
    const {id} = useParams<{id: string}>();

    const [specializimi, setSpecializimi] = useState({
        id: '' ,
        emriInstitucionit: '' ,
        titulli: '' ,
        lokacioni: '' ,
        dataFillestare: '' , /*boji null masi ti nderrojsh */
        dataPerfundimtare: '',
        pershkrimi: '' 
    })

    const validationSchema = Yup.object({
        emriInstitucionit:Yup.string().required('Emri i institucionit duhet te plotesohet!'),
        titulli: Yup.string().required('Titulli duhet te plotesohet!'),
        lokacioni: Yup.string().required('Lokacioni duhet te plotesohet!'),
        dataFillestare: Yup.string().required('Data fillestare duhet te plotesohet!'),
        dataPerfundimtare: Yup.string().required('Data perfundimtare duhet te plotesohet!'),
        pershkrimi: Yup.string().required('Pershkrimi duhet te plotesohet!'),
    })

    useEffect(() => {
        if (id) loadSpecializimi(id).then(specializimi => setSpecializimi(specializimi!))
    }, [id, loadSpecializimi]);

    function handleFormSubmitSpecializimi(specializimi: Specializimi) {
        if (specializimi.id.length === 0) {
            let newSpecializimi = {
                ...specializimi,
                id: uuid()
            };
            createSpecializimi(newSpecializimi).then(() => history.push(`/specializimet/${newSpecializimi.id}`))
            modalStore.closeModal();
        }
    }

    if(loadingInitial) return <LoadingComponent content='Loading specializimi...'/>

    return (
        <Segment clearing>
        <Formik
            validationSchema={validationSchema}
            enableReinitialize
            initialValues={specializimi}
            onSubmit={values => handleFormSubmitSpecializimi(values)}>
            {({ handleSubmit, isValid, isSubmitting, dirty }) => (
                <Form className='ui form' onSubmit={handleSubmit} autoComplete='off'>
                    <MyTextInput name='emriInstitucionit' placeholder='Emri i institucionit' />
                    <MyTextInput name='titulli' placeholder='Titulli' />
                    <MyTextInput name='lokacioni' placeholder='Lokacioni' />
                    <MyTextInput name='dataFillestare' placeholder='Data Fillestare' />
                    <MyTextInput name='dataPerfundimtare' placeholder='Data Perfundimtare' />
                    {/* <MyDateInput
                        placeholderText='Data fillestare'
                        name='dataFillestare'
                        showTimeSelect
                        timeCaption='time'
                        dateFormat='MMMM d, yyyy '
                    />
                    <MyDateInput
                        placeholderText='Data perfundimtare'
                        name='dataPerfundimtare'
                        showTimeSelect
                        timeCaption='time'
                        dateFormat='MMMM d, yyyy'
                    /> */}

                    <MyTextArea rows={3} name='pershkrimi' placeholder='Pershkrimi'/>
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
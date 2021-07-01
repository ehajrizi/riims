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
import { Anetaresia } from '../../../app/models/anetaresia';

export default observer(function AnetaresiaForm() {
    const history = useHistory();
    const {anetaresiaStore, modalStore} = useStore();
    const {createAnetaresia, loading,
             loadAnetaresia, loadingInitial} = anetaresiaStore;
    const {id} = useParams<{id: string}>();

    const [anetaresia, setAnetaresia] = useState({
        id: '' ,
        emriInstOrg: '' ,
        pozita: '' ,
        pershkrimi: ''  
    })

    const validationSchema = Yup.object({
        emriInstOrg:Yup.string().required('Emri i institucionit/organizates duhet te plotesohet!'),
        pozita: Yup.string().required('Pozita duhet te plotesohet!'),
        pershkrimi: Yup.string().required('Pershkrimi duhet te plotesohet!'),
    })

    useEffect(() => {
        if (id) loadAnetaresia(id).then(anetaresia => setAnetaresia(anetaresia!))
    }, [id, loadAnetaresia]);

    function handleFormSubmitAnetaresia(anetaresia: Anetaresia) {
        if (anetaresia.id.length === 0) {
            let newAnetaresia = {
                ...anetaresia,
                id: uuid()
            };
            createAnetaresia(newAnetaresia).then(() => history.push(`/anetaresite/${newAnetaresia.id}`))
            modalStore.closeModal();
        }
    }

    if(loadingInitial) return <LoadingComponent content='Loading anetaresia...'/>

    return (
        <Segment clearing>
        <Formik
            validationSchema={validationSchema}
            enableReinitialize
            initialValues={anetaresia}
            onSubmit={values => handleFormSubmitAnetaresia(values)}>
            {({ handleSubmit, isValid, isSubmitting, dirty }) => (
                <Form className='ui form' onSubmit={handleSubmit} autoComplete='off'>
                    <MyTextInput name='emriInstOrg' placeholder='Emri i institucionit/organizates' />
                    <MyTextInput name='pozita' placeholder='Pozita' />
                    <MyTextArea rows={3} name='pershkrimi' placeholder='Pershkrimi'/>
                    <Button
                        disabled={isSubmitting || !dirty || !isValid}
                        loading={loading}
                        floated='right'
                        positive type='submit' content='Submit' />
                    <Button onClick={()=>modalStore.closeModal()} as={Link} to='/anetaresite' floated='right' type='button' content='Cancel' />
                </Form>
            )}
        </Formik>
    </Segment >
    )
})
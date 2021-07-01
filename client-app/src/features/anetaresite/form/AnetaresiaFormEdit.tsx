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
import { Anetaresia } from '../../../app/models/anetaresia';
import MyTextArea from '../../../app/api/common/form/MyTextArea';

export interface Props {
    anetaresia: Anetaresia;
}

export default observer(function AnetaresiaEditForm({ anetaresia }: Props) {
    const history = useHistory();
    const { anetaresiaStore, modalStore } = useStore();
    const { updateAnetaresia, loading, loadAnetaresia, loadingInitial } = anetaresiaStore;
    const { id } = useParams<{ id: string }>();

    const [anetaresi, setAnetaresia] = useState<Anetaresia>({
        id: anetaresia.id,
        emriInstOrg: anetaresia.emriInstOrg,
        pozita: anetaresia.pozita,
        pershkrimi: anetaresia.pershkrimi
    });

    const validationSchema = Yup.object({
        emriInstOrg:Yup.string().required('Emri i institucionit/organizates duhet te plotesohet!'),
        pozita: Yup.string().required('Pozita duhet te plotesohet!'),
        pershkrimi: Yup.string().required('Pershkrimi duhet te plotesohet!'),
    })


    useEffect(() => {
        if (id) loadAnetaresia(id).then(anetaresia => setAnetaresia(anetaresia!))
    }, [id, loadAnetaresia]);

    function handleFormSubmitAnetaresia(anetaresia: Anetaresia) {
        updateAnetaresia(anetaresia).then(() => history.push(`/anetaresite/${anetaresia.id}`));
        modalStore.closeModal();
    }

    if (loadingInitial) return <LoadingComponent content='Loading anetaresia...' />

    return(
        <Segment clearing>
            <Header content='Anetaresimet' sub color='teal' />
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
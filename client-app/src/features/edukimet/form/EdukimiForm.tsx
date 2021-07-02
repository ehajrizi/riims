import React, { useEffect, useState } from 'react';
import { Button, Form, Header, Segment } from 'semantic-ui-react';
import {v4 as uuid} from 'uuid';
import { Link, useHistory, useParams } from 'react-router-dom';
import { useStore } from '../../../app/stores/store';
import { observer } from 'mobx-react-lite';
import LoadingComponent from '../../../app/layout/LoadingComponents';
import * as Yup from 'yup';
import { Formik } from 'formik';
import MyTextArea from '../../../app/api/common/form/MyTextArea';
import MyTextInput from '../../../app/api/common/form/MyTextInput';
import { Edukimi } from '../../../app/models/edukimi';
import MyDateInput from '../../../app/api/common/form/MyDateInput';

export default observer(function EdukimiForm(){

    const history = useHistory();

    const {edukimiStore, modalStore} = useStore();
    const {loadEdukimi, createEdukimi, loading, loadingInitial} = edukimiStore;
    const {id} = useParams<{id: string}>();

    const [edukimi, setEdukimi] = useState<Edukimi>({
        id: '',
        emri_i_Institucionit: '',
        titulli: '',
        fusha_e_Studimit: '',
        lokacioni: '',
        dataFillestare: null,
        dataPerfundimtare: null,
        pershkrimi: ''
    }); 

    const validationSchema = Yup.object({
        emri_i_Institucionit: Yup.string().required('Emri i Institucionit duhet te plotesohet!'),
        titulli: Yup.string().required('Titulli duhet te plotesohet!'),
        fusha_e_Studimit: Yup.string().required(),
        lokacioni: Yup.string().required(),
        dataFillestare: Yup.string().required('Data Fillestare duhet te plotesohet!').nullable(),
        dataPerfundimtare: Yup.string().required('Data Perfundimtare duhet te plotesohet!').nullable(),
        pershkrimi: Yup.string().required()
    })

    useEffect(() => {
        if(id) loadEdukimi(id).then(edukimi => setEdukimi(edukimi!))
    },[id, loadEdukimi]);

    function handleSubmitEdukimi(edukimi: Edukimi){
        if(edukimi.id.length === 0){
            let newEdukimi = {
                ...edukimi,
                id: uuid()
            };
            createEdukimi(newEdukimi).then(() => history.push(`/edukimi`));
            modalStore.closeModal();
        }
        
    }

    if(loadingInitial) return <LoadingComponent content='Loading Edukimi...'/>

    return (
        <Segment clearing>
            <Header content='Edukimi' sub color='blue' />
            <Formik
                validationSchema={validationSchema}
                enableReinitialize
                initialValues={edukimi}
                onSubmit={values => handleSubmitEdukimi(values)}>
                {({ handleSubmit, isValid, isSubmitting, dirty }) => (
                    <Form className='ui form' onSubmit={handleSubmit} autoComplete='off'>
                        <MyTextInput name='emri_i_Institucionit' placeholder='Emri i Institucionit' />
                        <MyTextInput name='titulli' placeholder='Titulli' />
                        <MyTextInput name='fusha_e_Studimit' placeholder='Fusha e Studimit' />
                        <MyTextInput placeholder='Lokacioni' name='lokacioni' />
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
                        <MyTextArea placeholder='Pershkrimi' name='pershkrimi' rows={3} />
                        
                        <Button
                            disabled={isSubmitting || !dirty || !isValid}
                            loading={loading}
                            floated='right'
                            positive type='submit' content='Submit' />
                        <Button onClick={()=>modalStore.closeModal()} as={Link} to='/edukimi' floated='right' type='button' content='Cancel' />
                    </Form>
                )}
            </Formik>
        </Segment >
    );
})


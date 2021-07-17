import React, { useEffect, useState } from 'react';
import { Button, Form, Header, Segment } from 'semantic-ui-react';
import {v4 as uuid} from 'uuid';
import { Link, useHistory, useParams } from 'react-router-dom';
import { useStore } from '../../../app/stores/store';
import { observer } from 'mobx-react-lite';
import LoadingComponent from '../../../app/layout/LoadingComponents';
import * as Yup from 'yup';
import { Formik } from 'formik';
import { Gjuha } from '../../../app/models/gjuha';
import { ZgjedhGjuha, Niveli } from '../../../app/api/common/options/gjuhaOptions';
import MySelectInput from '../../../app/api/common/form/MySelectInput';


export default observer(function GjuhaForm(){

    const history = useHistory();

    const {gjuhaStore, modalStore} = useStore();
    const {loadGjuha, createGjuha, loading, loadingInitial} = gjuhaStore;
    const {id} = useParams<{id: string}>();

    const [gjuha, setGjuha] = useState({
        id: '',
        zgjedhGjuha: '',
        folur: '',
        shkruar: '',
        useriId: ''
    }); 

    const validationSchema = Yup.object({
        zgjedhGjuha: Yup.string().required('Duhet te zgjidhni nje gjuhe!'),
        folur: Yup.string().required('Duhet te zgjidhni nivelin e te folurit!'),
        shkruar: Yup.string().required('Duhet te zgjidhni nivelin e te shkruarit!')
    })

    useEffect(() => {
        if(id) loadGjuha(id).then(gjuha => setGjuha(gjuha!))
    },[id, loadGjuha]);

    function handleSubmitGjuha(gjuha: Gjuha){
        if(gjuha.id.length === 0){
            let newGjuha = {
                ...gjuha,
                id: uuid()
            };
            createGjuha(newGjuha).then(() => history.push(`/gjuhet`));
            modalStore.closeModal();
        }
        
    }

    if(loadingInitial) return <LoadingComponent content='Loading Gjuha...'/>

    return (
        <Segment clearing>
            <Header content='Gjuha' sub color='blue' />
            <Formik
                validationSchema={validationSchema}
                enableReinitialize
                initialValues={gjuha}
                onSubmit={values => handleSubmitGjuha(values)}>
                {({ handleSubmit, isValid, isSubmitting, dirty }) => (
                    <Form className='ui form' onSubmit={handleSubmit} autoComplete='off'>
                        <MySelectInput options={ZgjedhGjuha} placeholder='Gjuha' name='zgjedhGjuha' />
                        <MySelectInput options={Niveli} placeholder='Niveli ne te folur' name='folur' />
                        <MySelectInput options={Niveli} placeholder='Niveli ne te shkruar' name='shkruar' />
                        
                        <Button
                            disabled={isSubmitting || !dirty || !isValid}
                            loading={loading}
                            floated='right'
                            positive type='submit' content='Submit' />
                        <Button onClick={()=>modalStore.closeModal()} as={Link} to='/gjuhet' floated='right' type='button' content='Cancel' />
                    </Form>
                )}
            </Formik>
        </Segment >
    );
})


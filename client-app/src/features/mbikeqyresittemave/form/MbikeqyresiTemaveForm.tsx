import { observer } from 'mobx-react-lite';
import React, { ChangeEvent, useEffect, useState } from 'react';
import { Link, useHistory, useParams } from 'react-router-dom';
import { Button, Header, Segment } from 'semantic-ui-react';
import { useStore } from '../../../app/stores/store';
import {v4 as uuid} from 'uuid';
import LoadingComponent from '../../../app/layout/LoadingComponents';
import { MbikeqyresiTemave } from '../../../app/models/mbikeqyresitemave';
import * as Yup from 'yup';
import { Formik, Form } from 'formik';
import MyTextInput from '../../../app/api/common/form/MyTextInput';
import MySelectInput from '../../../app/api/common/form/MySelectInput';
import { FakultetiOptions, InstuticioniOptions, MuajiOptions, NiveliAkademikOptions } from '../../../app/api/common/options/MbikeqyresiTemaveOptions';

export default observer (function MbikeqyresiTemaveForm(){
    const history= useHistory();
    const {mbikeqyresitemaveStore, modalStore}= useStore();
    const {loadingInitial,createMbikeqyresiTemave, loadMbikeqyresiTemave,updateMbikeqyresiTemave,loading}= mbikeqyresitemaveStore;
    const {id}= useParams<{id: string}>();

    const [mbikeqyresitemave, setMbikeqyresiTemave]= useState<MbikeqyresiTemave>({
        id:'',
        titulliTemes: '',
        studenti:  '',
        muaji: '' ,
        viti: '' ,
        institucioni: '',
        fakulteti: '',
        niveliAkademik:''

    });

    const validationSchema=Yup.object ({
        titulliTemes:Yup.string().required('Ju lutem plotesoni Titullin e Temes'),
        studenti:Yup.string().required('Ju lutem plotesoni emrin e Studentit'),
        muaji:Yup.string().required('Ju lutem selektoni muajin'),
        viti:Yup.string().required('Ju lutem selektoni vitin'),
        institucioni:Yup.string().required('Ju lutem selektoni Institucionin'),
        fakulteti:Yup.string().required('Ju lutem selektoni Fakultetin'),
        niveliAkademik:Yup.string().required('Ju lutem selektoni Nivelin Akademik'),
    })

    useEffect (() => {
        if(id) loadMbikeqyresiTemave(id).then(mbikeqyresitemave => setMbikeqyresiTemave(mbikeqyresitemave!))
    },[id, loadMbikeqyresiTemave])

    function handleFormSubmit(mbikeqyresitemave:MbikeqyresiTemave){
        if (mbikeqyresitemave.id.length ===0){
            let newMbikeqyresiTemave = {
                ...mbikeqyresitemave,
                id:uuid()
            };
            createMbikeqyresiTemave(newMbikeqyresiTemave).then(() =>history.push(`/mbikeqyresitemave/${newMbikeqyresiTemave.id}`));
            modalStore.closeModal();
        }
    }



    
    if(loadingInitial) return <LoadingComponent content ='Loading...'/>
    return (
        <Segment clearing>
            <Header content='Mbikeqyresi i Temave' sub color='teal' />
            <Formik
                validationSchema={validationSchema}
                initialValues={mbikeqyresitemave}
                onSubmit={values => handleFormSubmit(values)}>
                {({handleSubmit, isValid, isSubmitting, dirty}) =>(
            <Form className='ui form' onSubmit={handleSubmit} autoComplete='off' >
                <MyTextInput placeholder='TitulliTemes' name='titulliTemes' />
                <MyTextInput placeholder='Studenti'  name='studenti' />
                <MySelectInput options={MuajiOptions} placeholder='Muaji'  name='muaji' />
                <MyTextInput placeholder='Viti'  name='viti' />
                <MySelectInput options={InstuticioniOptions} placeholder='Institucioni'  name='institucioni' />
                <MySelectInput options={FakultetiOptions} placeholder='Fakulteti'  name='fakulteti' />
                <MySelectInput options={NiveliAkademikOptions} placeholder='NiveliAkademik' name='niveliAkademik' />
                <Button 
                    disabled={isSubmitting || !dirty || !isValid}
                    loading={loading} floated='right'
                    positive type='submit' content='Submit' />
                <Button onClick={()=> modalStore.closeModal()}as={Link} to='/mbikeqyresitemave' floated='right' type='button' content='Cancel'/>
            </Form>
            )}
            </Formik>
        </Segment>
    
    )
})
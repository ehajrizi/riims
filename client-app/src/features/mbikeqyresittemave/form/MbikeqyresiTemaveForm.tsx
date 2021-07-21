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
import MyDateInput from '../../../app/api/common/form/MyDateInput';

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
        viti: null ,
        institucioni: '',
        fakulteti: '',
        niveliAkademik: '',
        useriId: ''
    });

    const validationSchema=Yup.object ({
        titulliTemes:Yup.string().required('Titulli i Temes duhet te plotesohet!'),
        studenti:Yup.string().required('Emri i Studentit duhet te plotesohet!'),
        muaji:Yup.string().required('Selektoni muajin'),
        viti:Yup.string().required('Selektoni vitin'),
        institucioni:Yup.string().required('Selektoni Institucionin'),
        fakulteti:Yup.string().required('Selektoni Fakultetin'),
        niveliAkademik:Yup.string().required('Selektoni Nivelin Akademik'),
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
            createMbikeqyresiTemave(newMbikeqyresiTemave).then(() =>history.push(`/mbikeqyresitemave`));
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
                <MyDateInput
                    placeholderText='Viti'  
                    name='viti'
                    showYearPicker
                    dateFormat='yyyy'
                    yearItemNumber={15} 
                />
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
import { observer } from 'mobx-react-lite';
import React, { ChangeEvent, useEffect, useState } from 'react';
import { Link, useHistory, useParams } from 'react-router-dom';
import { Button, Form, Header, Segment } from 'semantic-ui-react';
import { useStore } from '../../../app/stores/store';
import {v4 as uuid} from 'uuid';
import LoadingComponent from '../../../app/layout/LoadingComponents';
import * as Yup from 'yup';
import { HonorandAward } from '../../../app/models/honorandaward';
import { Formik } from 'formik';
import MyTextInput from '../../../app/api/common/form/MyTextInput';
import MySelectInput from '../../../app/api/common/form/MySelectInput';
import { MuajiOptions } from '../../../app/api/common/options/HonorsandAwardsOptions';
import MyTextArea from '../../../app/api/common/form/MyTextArea';
import MyDateInput from '../../../app/api/common/form/MyDateInput';

export default observer (function HonorandAwardForm(){
    const history= useHistory();
    const {honorandawardStore,modalStore}= useStore();
    const {loadingInitial,createHonorandAward, loadHonorandAward,updateHonorandAward,loading}= honorandawardStore;
    const {id}= useParams<{id: string}>();

    const [honorandaward, setHonorandAward]= useState<HonorandAward>({
        id:'',
        titulli: '',
        muaji: '' ,
        viti: null ,
        institucioni: '',
        pozita: '' ,
        useriId: ''
    });

    const validationSchema=Yup.object ({
        titulli:Yup.string().required('Ju lutem plotesoni Titullin '),
        muaji:Yup.string().required('Ju lutem selektoni muajin'),
        viti:Yup.string().required('Ju lutem selektoni vitin'),
        institucioni:Yup.string().required('Ju lutem shkruani emrin e Institucionint/Organizates'),
        pozita:Yup.string().required('Ju lutem shkruani Poziten dhe Pershkrimin'),
        })

    useEffect (() => {
        if(id) loadHonorandAward(id).then(honorandaward => setHonorandAward(honorandaward!))
    },[id, loadHonorandAward])

    function handleFormSubmit(honorandaward:HonorandAward){
        if (honorandaward.id.length ===0){
            let newHonorandAward = {
                ...honorandaward,
                id:uuid()
            };
            createHonorandAward(newHonorandAward).then(() =>history.push(`/honorsandawards`));
            modalStore.closeModal();
        }
    }



   
    if(loadingInitial) return <LoadingComponent content ='Loading...'/>
    return (
        <Segment clearing>
            <Header content='Honors & Awards' sub color='teal' />
            <Formik
                validationSchema={validationSchema}
                initialValues={honorandaward}
                onSubmit={values => handleFormSubmit(values)}>
                {({handleSubmit, isValid, isSubmitting, dirty}) =>(
            <Form className='ui form' onSubmit={handleSubmit} autoComplete='off' >
                <MyTextInput placeholder='Titulli' name='titulli' />
                <MySelectInput options={MuajiOptions} placeholder='Muaji'  name='muaji' />
                <MyDateInput
                    placeholderText='Viti'  
                    name='viti'
                    showYearPicker
                    dateFormat='yyyy'
                    yearItemNumber={15} 
                />
                <MyTextInput  placeholder='Institucioni'  name='institucioni' />
                <MyTextArea rows={3} placeholder='Pozita dhe Pershkrimi'  name='pozita' />
                <Button 
                    disabled={isSubmitting || !dirty || !isValid}
                    loading={loading} floated='right'
                    positive type='submit' content='Submit' />
                <Button onClick={()=> modalStore.closeModal()}as={Link} to='/honorsandawards' floated='right' type='button' content='Cancel'/>
            </Form>
            )}
            </Formik>
        </Segment>
    
    )
})
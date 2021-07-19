import React, { ChangeEvent, useEffect, useState } from 'react';
import { Button, Checkbox, Form, Segment } from 'semantic-ui-react';
import { Eksperienca } from '../../../app/models/eksperienca';
import {v4 as uuid} from 'uuid';
import { useStore } from '../../../app/stores/store';
import LoadingComponent from '../../../app/layout/LoadingComponents';
import { observer } from 'mobx-react-lite';
import {useHistory, useParams } from 'react-router-dom';
import MyDateInput from '../../../app/api/common/form/MyDateInput';
import { Formik } from 'formik';
import * as Yup from 'yup';
import MyTextInput from '../../../app/api/common/form/MyTextInput';
import MyTextArea from '../../../app/api/common/form/MyTextArea';



export default observer(function EksperiencaForm(){
    const history = useHistory();

    const {eksperiencaStore,modalStore} = useStore();
    const {loadEksperienca,createEksperienca,updateEksperienca,loading, loadingInitial} = eksperiencaStore;
    const {id} = useParams<{id: string}>();

    const [eksperienca, setEksperienca] = useState<Eksperienca>({
        id: '',
        emriInstitucionit: '',
        titulli: '',
        punePrimare: true,
        lokacioni: '',
        dataFillestare: null,
        dataPerfundimtare: null,
        pershkrimi: '',
        personiKontaktues: '',
        email: '',
        numriTelefonit: '',
        useriId: ''
    }); 

    const phoneReg = /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;

    const validationSchema = Yup.object({
        emriInstitucionit: Yup.string().required('Emri i institucionit duhet te plotesohet!'),
        titulli: Yup.string().required('Titulli duhet te plotesohet!'),
        lokacioni: Yup.string().required('Lokacioni duhet te plotesohet!'),
        dataFillestare: Yup.string().required('Data e fillimit kerkohet').nullable(),
        // dataPerfundimtare: Yup.string().required('Date is required').nullable(),
        pershkrimi: Yup.string().required('Pershkrimi duhet te plotesohet!'),
        personiKontaktues: Yup.string().required('Personi kontaktues duhet te plotesohet!'),
        email: Yup.string().email().required('Email duhet te plotesohet!'),
        numriTelefonit: Yup.string().matches(phoneReg, 'Numri i telefonit nuk eshte valid').required(),
    })
    

    useEffect(() => {
        if(id) loadEksperienca(id).then(eksperienca => setEksperienca(eksperienca!))
    },[id, loadEksperienca]);


    function handleSubmitEksperienca(eksperienca: Eksperienca){
        if(eksperienca.id.length === 0){
            let newEksperienca = { 
                ...eksperienca,
                id: uuid()
            };
            createEksperienca(newEksperienca).then(() => history.push(`/eksperiencat`))
            modalStore.closeModal();
        }
    }


    if(loadingInitial) return <LoadingComponent content='Loading eksperienca...'/>


    return(
        <Segment clearing>
            <Formik
                validationSchema= {validationSchema}
                enableReinitialize
                initialValues= {eksperienca}
                onSubmit = {values => handleSubmitEksperienca(values)}>
                {({handleSubmit, isValid, dirty, isSubmitting}) => (
                <Form className='ui form' onSubmit={handleSubmit} autoComplete='off'>
                    <MyTextInput placeholder='Titulli' name='titulli'/>
                    <Checkbox label='Pune primare' />
                    <MyTextInput placeholder='Emri i institucionit' name='emriInstitucionit'/>
                    <MyTextInput placeholder='Lokacioni' name='lokacioni'/>
                    <MyTextArea placeholder='Pershkrimi'name='pershkrimi' rows={4}/>
                    <MyDateInput placeholderText='Data e fillimit' name='dataFillestare'
                            dateFormat='MMMM d, yyyy'/>
                    <MyDateInput placeholderText='Data e perfundimit' name='dataPerfundimtare' 
                            dateFormat='MMMM d, yyyy'
                            minDate = {eksperienca.dataFillestare}/>
                    <MyTextInput placeholder='Personi kontaktues'  name='personiKontaktues'/>
                    <MyTextInput placeholder='Email' name='email'/>
                    <MyTextInput placeholder='Numri i Telefonit' name='numriTelefonit'/>
                    <Button 
                        disabled = {isSubmitting || !dirty || !isValid}
                        loading={loading} 
                        floated='right' 
                        positive type='submit' 
                        content='Submit'/>
                    <Button onClick={()=>modalStore.closeModal()} floated='right' type='button' content='Cancel'/>
                </Form>
            )}
            </Formik>
        </Segment>
    )
})
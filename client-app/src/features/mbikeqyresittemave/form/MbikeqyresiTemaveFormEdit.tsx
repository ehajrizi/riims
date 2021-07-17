import React, { ChangeEvent, useEffect, useState } from 'react';
import { Button,  Header, Segment } from 'semantic-ui-react';
import { MbikeqyresiTemave } from '../../../app/models/mbikeqyresitemave';
import {v4 as uuid} from 'uuid';
import { useStore } from '../../../app/stores/store';
import LoadingComponent from '../../../app/layout/LoadingComponents';
import { observer } from 'mobx-react-lite';
import { Link, useHistory, useParams } from 'react-router-dom';
import { Formik,Form } from 'formik';
import * as Yup from 'yup';
import MyTextInput from '../../../app/api/common/form/MyTextInput';
import MySelectInput from '../../../app/api/common/form/MySelectInput';
import { FakultetiOptions, InstuticioniOptions, MuajiOptions, NiveliAkademikOptions } from '../../../app/api/common/options/MbikeqyresiTemaveOptions';
import MyDateInput from '../../../app/api/common/form/MyDateInput';

interface Props{
    mbik: MbikeqyresiTemave;
}


export default observer(function MbikeqyresiTemaveFormEdit({mbik}:Props){
    const history = useHistory();

    const {mbikeqyresitemaveStore, modalStore} = useStore();
    const {loadMbikeqyresiTemave,updateMbikeqyresiTemave, loadingInitial,loading} = mbikeqyresitemaveStore;
    const {id} = useParams<{id: string}>();

    const [mbikeqyresitemave, setMbikeqyresiTemave] = useState<MbikeqyresiTemave>({
        id: mbik.id,
        titulliTemes: mbik.titulliTemes,
        studenti: mbik.studenti,
        muaji: mbik.muaji,
        viti: mbik.viti,
        institucioni: mbik.institucioni,
        fakulteti: mbik.fakulteti,
        niveliAkademik: mbik.niveliAkademik,
        useriId: mbik.useriId
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
    useEffect(() => {
        if(id) loadMbikeqyresiTemave(id).then(mbikeqyresitemave => setMbikeqyresiTemave(mbikeqyresitemave!))
    },[id, loadMbikeqyresiTemave]);
    function handleFormSubmit(mbikeqyresitemave: MbikeqyresiTemave){
        updateMbikeqyresiTemave(mbikeqyresitemave).then(() => history.push(`/mbikeqyresitemave`));
        modalStore.closeModal();
    }

    

    if(loadingInitial) return <LoadingComponent content='Loading Mbikeqyresin...'/>


    return(
        <Segment clearing>
            <Header content='Mbikeqyresi i Temave' sub color='teal' />
            <Formik
                validationSchema={validationSchema}
                enableReinitialize
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
                <Button onClick={()=>modalStore.closeModal()} as={Link}  to='/mbikeqyresitemave' floated='right' type='button' content='Cancel'/>
            </Form>
            )}
            </Formik>
        </Segment>
    )
})
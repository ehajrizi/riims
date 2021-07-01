import React, { ChangeEvent, useEffect, useState } from 'react';
import { Button,  Header, Segment } from 'semantic-ui-react';
import { HonorandAward } from '../../../app/models/honorandaward';
import { useStore } from '../../../app/stores/store';
import LoadingComponent from '../../../app/layout/LoadingComponents';
import { observer } from 'mobx-react-lite';
import { Link, useHistory, useParams } from 'react-router-dom';
import { Formik,Form } from 'formik';
import * as Yup from 'yup';
import MyTextInput from '../../../app/api/common/form/MyTextInput';
import MySelectInput from '../../../app/api/common/form/MySelectInput';
import { MuajiOptions } from '../../../app/api/common/options/HonorsandAwardsOptions';
import MyTextArea from '../../../app/api/common/form/MyTextArea';
import MyDateInput from '../../../app/api/common/form/MyDateInput';
import modalStore from '../../../app/stores/modalStore';

interface Props{
    honorandaward: HonorandAward;
}


export default observer(function HonorandAwardFormEdit({honorandaward}:Props){
    const history = useHistory();

    const {honorandawardStore, modalStore} = useStore();
    const {loadHonorandAward,updateHonorandAward, loadingInitial,loading} = honorandawardStore;
    const {id} = useParams<{id: string}>();

    const [HonorandAward, setHonorandAward] = useState<HonorandAward>({
        id: honorandaward.id,
        titulli: honorandaward.titulli,
        muaji: honorandaward.muaji,
        viti: honorandaward.viti,
        institucioni: honorandaward.institucioni,
        pozita: honorandaward.pozita,
    });

    const validationSchema=Yup.object ({
        titulli:Yup.string().required('Ju lutem plotesoni Titullin '),
        muaji:Yup.string().required('Ju lutem selektoni muajin'),
        viti:Yup.string().required('Ju lutem selektoni vitin'),
        institucioni:Yup.string().required('Ju lutem shkruani emrin e Institucionint/Organizates'),
        pozita:Yup.string().required('Ju lutem shkruani Poziten dhe Pershkrimin'),
        })

    useEffect(() => {
        if(id) loadHonorandAward(id).then(HonorandAward => setHonorandAward(HonorandAward!))
    },[id, loadHonorandAward]);

    function handleFormSubmit(HonorandAward: HonorandAward){
        updateHonorandAward(HonorandAward).then(() => history.push(`/honorsandawards`));
        modalStore.closeModal();
    }

    if(loadingInitial) return <LoadingComponent content='Loading honorandawardeqyresin...'/>


    return(
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
import { observer } from 'mobx-react';
import { useEffect, useState } from 'react';
import { Link, useHistory, useParams } from 'react-router-dom';
import { Button, Segment } from 'semantic-ui-react';
import { useStore } from '../../../app/stores/store';
import { v4 as uuid } from 'uuid';
import * as Yup from 'yup';
import { Formik,Form } from 'formik';
import MySelectInput from '../../../app/api/common/form/MySelectInput';
import MyTextInput from '../../../app/api/common/form/MyTextInput';
import{ Pjesemarresi } from '../../../app/models/pjesemarresi';
import PjesemarresitList from '../dashboard/PjesemarresitList';
import DonatoretForm from '../../donatoret/form/DonatoretForm';
import LoadingComponent from '../../../app/layout/LoadingComponents';
import { RoliProjektOptions } from '../../../app/api/common/options/roliOptions';


export default observer(function PjesemarresitForm() {
    const history = useHistory();

    const { pjesemarresiStore,modalStore } = useStore();
    const { loadPjesemarresi, createPjesemarresi, loading, loadingInitial } = pjesemarresiStore;
    const { id } = useParams<{ id: string }>();

    const [pjesemarresi, setPjesemarresi] = useState<Pjesemarresi>({
        id: '',
        emriIPjesemarresit: '',
        roli: '',
        useriId: ''
    });

    const validationSchema = Yup.object({
        emriIPjesemarresit: Yup.string().required('Fusha nuk guxon te jete e zbrazet'),
        roli: Yup.string().required('The activity description is required'),
       
    })

    useEffect(() => {
        if (id) loadPjesemarresi(id).then(pjesemarresi => setPjesemarresi(pjesemarresi!))
    }, [id, loadPjesemarresi]);

    function handleFormSubmit(pjesemarresi: Pjesemarresi) {
        if (pjesemarresi.id.length === 0) {
            let newPjesemarresi = {
                ...pjesemarresi,
                id: uuid()
            };
            createPjesemarresi(newPjesemarresi).then(() => history.push(`/home`));
             
        } 
    }

   

    if (loadingInitial) return <LoadingComponent content='Loading pjesemarresin...' />

    return(
        <Segment clearing>
            <Formik
                validationSchema={validationSchema}
                initialValues={pjesemarresi}
                onSubmit={(values,{resetForm})=>{
                    handleFormSubmit(values);
                    resetForm({});
                } }>
                {({ handleSubmit, isValid, isSubmitting, dirty}) => (
                    <Form className='ui form' onSubmit={handleSubmit} autoComplete='off'>
                        <MyTextInput name='emriIPjesemarresit' placeholder='Emri i Pjesemarresit' />
                        <MySelectInput options={RoliProjektOptions} placeholder='Roli' name='roli' />
                        <Button 
                        disabled={isSubmitting || !dirty || !isValid }
                            loading={loading}
                            floated='right'
                            type='Submit'
                            positive  content='Add'  
                             />
                        <PjesemarresitList/>
                        <Button onClick={() => modalStore.closeModal()} 
                         floated='right'
                             content='Close' type='button'/>
                        <Button onClick={() => modalStore.openModal(<DonatoretForm/>)}   floated='right' type='button' content='Prev' />
                    </Form>
                )}
            </Formik>
        </Segment>
    );
})


                       
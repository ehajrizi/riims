import { observer } from 'mobx-react';
import React, { ChangeEvent, FunctionComponent, useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import { Link, useHistory, useParams } from 'react-router-dom';
import { Button, Header, Modal, Segment } from 'semantic-ui-react';
import LoadingComponent from '../../../app/layout/LoadingComponents';
import { useStore } from '../../../app/stores/store';
import { v4 as uuid } from 'uuid';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import MyTextInput from '../../../app/api/common/form/MyTextInput';
import MyTextArea from '../../../app/api/common/form/MyTextArea';
import MySelectInput from '../../../app/api/common/form/MySelectInput';
import MyDateInput from '../../../app/api/common/form/MyDateInput';
import { Donatori } from '../../../app/models/donatori';
import PjesemarresitForm from '../../pjesemarresit/form/PjesemarresitForm';


export default observer(function DonatoretForm() {
    const history = useHistory();
    const { donatoriStore, modalStore } = useStore();
    const { createDonatori, loading, loadDonatori, loadingInitial } = donatoriStore;
    const { id } = useParams<{ id: string }>();

    const [donatori, setDonatori] = useState<Donatori>({
        id: '',
        emriIDonatorit: '',
        pershkrimiDonatorit: '',
        kontributiIDhene: 0,
        useriId: ''
    });

    const validationSchema = Yup.object({
      
        emriIDonatorit: Yup.string().required('Emri donatorit description is required'),
        pershkrimiDonatorit: Yup.string().required('Pershkrimi is required'),
        kontributiIDhene: Yup.number().required(),
       
    })

    useEffect(() => {
        if (id) loadDonatori(id).then(donatori => setDonatori(donatori!))
    }, [id, loadDonatori]);

    function handleFormSubmit(donatori: Donatori){
        if(donatori.id.length === 0){
            let newDonatori = {
                ...donatori,
                id: uuid()
            };
            createDonatori(newDonatori).then(() => history.push(`/donatoret/${newDonatori.id}`));
            modalStore.closeModal();
        }
        
    }

    if (loadingInitial) return <LoadingComponent content='Loading Donatori...' />

    return (
        <Segment clearing>
            <Formik
                validationSchema={validationSchema}
                initialValues={donatori}
                onSubmit={values => handleFormSubmit(values)}>
                {({ handleSubmit, isValid, isSubmitting, dirty }) => (
                    <Form className='ui form' onSubmit={handleSubmit} autoComplete='off'>
                        
                        <MyTextInput name='emriIDonatorit' placeholder='EmriDonatorit' />
                       
                    
                        <MyTextInput placeholder='Pershkrimi i donatorit' name='pershkrimiDonatorit' />
                        <MyTextInput placeholder='Kontributi i dhene' name='kontributiIDhene' />
                        
                        <Button
                            disabled={isSubmitting || !dirty || !isValid}
                            loading={loading}
                            floated='right'
                            positive type='submit' content='Next' />
                        <Button onClick={()=>modalStore.closeModal()}  as={Link} to='/donatoret' floated='right' type='button' content='Cancel' />
                    </Form>
                )}
            </Formik>
        </Segment >
    );
})
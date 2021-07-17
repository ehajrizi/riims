import { observer } from 'mobx-react';
import React, { ChangeEvent, FunctionComponent, useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import { Link, useHistory, useParams } from 'react-router-dom';
import { Button, Modal, Segment } from 'semantic-ui-react';
import LoadingComponent from '../../../app/layout/LoadingComponents';
import { useStore } from '../../../app/stores/store';
import { v4 as uuid } from 'uuid';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import MyTextInput from '../../../app/api/common/form/MyTextInput';
import MyDateInput from '../../../app/api/common/form/MyDateInput';
import MyTextArea from '../../../app/api/common/form/MyTextArea';
import { Institucioni } from '../../../app/api/common/options/projektiOptions';
import MySelectInput from '../../../app/api/common/form/MySelectInput';
import { Projekti } from '../../../app/models/projekti';
import DonatoretForm from '../../donatoret/form/DonatoretForm';

export default observer(function ProjektetForm() {
    const history = useHistory();

    const { projektiStore, modalStore } = useStore();
    const { loadProjekti, createProjekti, loading, loadingInitial } = projektiStore;
    const { id } = useParams<{ id: string }>();

    const [projekti, setProjekti] = useState<Projekti>({
        id: '',
        emriProjektit: '',
        pershkrimi: '',
        lokacioni: '',
        dataFillimit: null,
        dataMbarimit: null,
        buxheti: 0,
        emriKlientit: '',
        institucioni: '',
        useriId: ''
    });

    const validationSchema = Yup.object({
        emriProjektit: Yup.string().required('Fusha nuk guxon te jete e zbrazet'),
        pershkrimi: Yup.string().required('The activity description is required'),
        lokacioni: Yup.string().required(),
        dataFillimit: Yup.string().required('Date is required').nullable(),
        dataMbarimit: Yup.string().required('Date is required').nullable(),
        buxheti: Yup.string().required(),
        emriKlientit: Yup.string().required(),
        institucioni: Yup.string().required(),
    })

    useEffect(() => {
        if (id) loadProjekti(id).then(projekti => setProjekti(projekti!))
    }, [id, loadProjekti]);

    function handleFormSubmit(projekti: Projekti) {
        if (projekti.id.length === 0) {
            let newProjekti = {
                ...projekti,
                id: uuid()
            };
            createProjekti(newProjekti).then(() => history.push(`/projektet/`));
            modalStore.openModal(<DonatoretForm/>);
        }
    }

    if (loadingInitial) return <LoadingComponent content='Loading publikimin...' />

    return (
        <Segment clearing>
            <Formik
                validationSchema={validationSchema}
                initialValues={projekti}
                onSubmit={values => handleFormSubmit(values)}>
                {({ handleSubmit, isValid, isSubmitting, dirty }) => (
                    <Form className='ui form' onSubmit={handleSubmit} autoComplete='off'>
                        <MyTextInput placeholder='Emri i projektit' name='emriProjektit' />
                        <MyTextArea rows={3} placeholder='Pershkrimi' name='pershkrimi' />
                        <MyTextInput placeholder='Lokacioni' name='lokacioni' />
                        <MyDateInput
                            placeholderText='Prej Dates'
                            name='dataFillimit'
                            showTimeSelect
                            dateFormat='MM, dd, yyyy'
                        />
                        <MyDateInput
                            placeholderText='Deri Me'
                            name='dataMbarimit'
                            showTimeSelect
                            minDate= {projekti.dataFillimit}
                            dateFormat='MM, dd, yyyy'
                        />
                        <MyTextInput placeholder='Buxheti' name='buxheti' />
                        <MyTextInput placeholder='Emri i klientit' name='emriKlientit' />
                        <MySelectInput options={Institucioni} placeholder='Institucioni' name='institucioni' />
                        <Button
                            disabled={isSubmitting || !dirty || !isValid}
                            loading={loading}
                            floated='right'
                            positive type='submit' content='Submit' />
                        <Button onClick={()=>modalStore.closeModal()}  as={Link} to='/publikimet' floated='right' type='button' content='Cancel' />
                    </Form>
                )}
            </Formik>
        </Segment>
    );
})
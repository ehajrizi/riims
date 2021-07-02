import { observer } from 'mobx-react';
import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import { Link, useHistory, useParams } from 'react-router-dom';
import { Button, Header, Modal, Segment } from 'semantic-ui-react';
import LoadingComponent from '../../../app/layout/LoadingComponents';
import { useStore } from '../../../app/stores/store';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import MyTextInput from '../../../app/api/common/form/MyTextInput';
import MySelectInput from '../../../app/api/common/form/MySelectInput';
import MyDateInput from '../../../app/api/common/form/MyDateInput';
import { Edukimi } from '../../../app/models/edukimi';
import MyTextArea from '../../../app/api/common/form/MyTextArea';

export interface Props {
    edukimi: Edukimi;
}

export default observer(function EdukimiEditForm({ edukimi }: Props) {
    const history = useHistory();
    const { edukimiStore, modalStore } = useStore();
    const { updateEdukimi, loading, loadEdukimi, loadingInitial } = edukimiStore;
    const { id } = useParams<{ id: string }>();

    const [edukim, setEdukimi] = useState<Edukimi>({
        id: edukimi.id,
        emri_i_Institucionit: edukimi.emri_i_Institucionit,
        titulli: edukimi.titulli,
        fusha_e_Studimit: edukimi.fusha_e_Studimit,
        lokacioni: edukimi.lokacioni,
        dataFillestare: edukimi.dataFillestare,
        dataPerfundimtare: edukimi.dataPerfundimtare,
        pershkrimi: edukimi.pershkrimi
    });

    const validationSchema = Yup.object({
        emri_i_Institucionit: Yup.string().required('Emri i Institucionit duhet te plotesohet!'),
        titulli: Yup.string().required('Titulli duhet te plotesohet!'),
        fusha_e_Studimit: Yup.string().required('Fusha e Studimit duhet te plotesohet!'),
        lokacioni: Yup.string().required('Lokacioni duhet te plotesohet!'),
        dataFillestare: Yup.string().required('Data Fillestare duhet te plotesohet!'),//shtoje .nullable()
        dataPerfundimtare: Yup.string().required('Data Perfundimtare duhet te plotesohet!'),//shtoje .nullable()
        pershkrimi: Yup.string().required('Pershkrimi duhet te plotesohet!')
    })

    useEffect(() => {
        if (id) loadEdukimi(id).then(edukimi => setEdukimi(edukimi!))
    }, [id, loadEdukimi]);

    function handleFormSubmit(edukimi: Edukimi) {
        updateEdukimi(edukimi).then(() => history.push(`/edukimi`));
        modalStore.closeModal();
    }

    if (loadingInitial) return <LoadingComponent content='Loading Edukimi...' />

    return(
        <Segment clearing>
            <Header content='Edukimi' sub color='blue' />
            <Formik
                validationSchema={validationSchema}
                enableReinitialize
                initialValues={edukim}
                onSubmit={values => handleFormSubmit(values)}>
                {({ handleSubmit, isValid, isSubmitting, dirty }) => (
                    <Form className='ui form' onSubmit={handleSubmit} autoComplete='off'>
                        <MyTextInput name='emri_i_Institucionit' placeholder='Emri i Institucionit' />
                        <MyTextInput name='titulli' placeholder='Titulli' />
                        <MyTextInput name='fusha_e_Studimit' placeholder='Fusha e Studimit' />
                        <MyTextInput placeholder='Lokacioni' name='lokacioni' />
                        <MyTextInput placeholder='Data Fillestare' name='dataFillestare' />
                        <MyTextInput placeholder='Data Perfundimtare' name='dataPerfundimtare' />
                        {/* <MyDateInput
                            placeholderText='Data Fillestare'
                            name='dataFillestare'
                            showTimeSelect
                            timeCaption='time'
                            dateFormat='MMMM d, yyy'
                        /> */}
                        {/* <MyDateInput
                            placeholderText='Data Perfundimtare'
                            name='dataPerfundimtare'
                            showTimeSelect
                            timeCaption='time'
                            dateFormat='MMMM d, yyyy'
                        /> */}
                        <MyTextArea placeholder='Pershkrimi' name='pershkrimi' rows={3} />
                        
                        <Button
                            disabled={isSubmitting || !dirty || !isValid}
                            loading={loading}
                            floated='right'
                            positive type='submit' content='Submit' />
                        <Button onClick={()=>modalStore.closeModal()} as={Link} to='/edukimi' floated='right' type='button' content='Cancel' />
                    </Form>
                )}
            </Formik>
        </Segment >
    )
})
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
import { Departamenti, Institucioni, Kategorite, LlojiPublikimit, Statusi } from '../../../app/api/common/options/publikimiOptions';
import { Publikimi } from '../../../app/models/publikimi';
import IsbntForm from '../../isbnt/form/IsbntForm';

export interface Props {
    publikimi: Publikimi;
}

export default observer(function PublikimetEditForm({ publikimi }: Props) {
    const history = useHistory();
    const { publikimiStore, modalStore } = useStore();
    const { updatePublikimi, loading, loadPublikimi, loadingInitial } = publikimiStore;
    const { id } = useParams<{ id: string }>();

    const [publikim, setPublikimi] = useState<Publikimi>({
        id: publikimi.id,
        titulli: publikimi.titulli,
        emertimiEvent: publikimi.emertimiEvent,
        data: publikimi.data,
        viti: publikimi.viti,
        vendi: publikimi.vendi,
        statusi: publikimi.statusi,
        llojiPublikimit: publikimi.llojiPublikimit,
        institucioni: publikimi.institucioni,
        departamenti: publikimi.departamenti,
        lenda: publikimi.lenda,
        kategoria: publikimi.kategoria,
        linkuPublikimit: publikimi.linkuPublikimit,
        volumiFaqeve: publikimi.volumiFaqeve,
        referenca: publikimi.referenca,
        autorKryesor: publikimi.autorKryesor,
        useriId: publikimi.useriId
    });

    const validationSchema = Yup.object({
        titulli: Yup.string().required('The activity title is required'),
        emertimiEvent: Yup.string().required('The activity description is required'),
        data: Yup.string().required('Date is required').nullable(),
        viti: Yup.string().required('Date is required').nullable(),
        vendi: Yup.string().required(),
        statusi: Yup.string().required(),
        llojiPublikimit: Yup.string().required(),
        institucioni: Yup.string().required(),
        departamenti: Yup.string().required(),
        lenda: Yup.string().required(),
        kategoria: Yup.string().required(),
        linkuPublikimit: Yup.string().required(),
        volumiFaqeve: Yup.string().required(),
        referenca: Yup.string().required(),
        autorKryesor: Yup.string().required(),
    })

    useEffect(() => {
        if (id) loadPublikimi(id).then(publikimi => setPublikimi(publikimi!))
    }, [id, loadPublikimi]);

    function handleFormSubmit(publikimi: Publikimi) {
        updatePublikimi(publikimi).then(() => history.push(`/publikimet/`));
        modalStore.openModal(<IsbntForm/>);
    }

    if (loadingInitial) return <LoadingComponent content='Loading Publikimi...' />

    return(
        <Segment clearing>
            <Formik
                validationSchema={validationSchema}
                enableReinitialize
                initialValues={publikim}
                onSubmit={values => handleFormSubmit(values)}>
                {({ handleSubmit, isValid, isSubmitting, dirty }) => (
                    <Form className='ui form' onSubmit={handleSubmit} autoComplete='off'>
                        <MyTextInput name='titulli' placeholder='Titulli' />
                        <MyTextInput name='emertimiEvent' placeholder='Emertimi i eventit' />
                        <MyDateInput
                            placeholderText='Muaji'
                            name='data'
                            showMonthDropdown
                            dateFormat='MM'
                        />
                        <MyDateInput
                            placeholderText='Viti'
                            name='viti'
                            showYearPicker
                            dateFormat='yyyy'
                        />
                        <MyTextInput name='vendi' placeholder='Vendi' />
                        <MySelectInput options={Statusi} placeholder='Statusi' name='statusi' />
                        <MySelectInput options={LlojiPublikimit} placeholder='Lloji i Publikimit' name='llojiPublikimit' />
                        <MySelectInput options={Institucioni} placeholder='Institucioni' name='institucioni' />
                        <MySelectInput options={Departamenti} placeholder='Departamenti' name='departamenti' />
                        <MyTextInput placeholder='Lenda' name='lenda' />
                        <MySelectInput options={Kategorite} placeholder='Kategoria' name='kategoria' />
                        <MyTextInput placeholder='Linku i Publikimit' name='linkuPublikimit' />
                        <MyTextInput placeholder='Volumi i Faqeve' name='volumiFaqeve' />
                        <MyTextInput placeholder='Referenca' name='referenca' />
                        <MyTextInput placeholder='Autori Kryesor' name='autorKryesor' />
                        <Button
                            disabled={isSubmitting || !dirty || !isValid}
                            loading={loading}
                            floated='right'positive type='submit' content='Next' />
                            {/* {window.location.reload(true)} */}
                             
                        <Button onClick={()=>modalStore.closeModal()} as={Link} to='/publikimet' floated='right' type='button' content='Cancel' />
                    </Form>
                )}
            </Formik>
        </Segment >
    )
})
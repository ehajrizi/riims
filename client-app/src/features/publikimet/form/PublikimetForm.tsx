import { observer } from 'mobx-react';
import { useEffect, useState } from 'react';
import { Link, useHistory, useParams } from 'react-router-dom';
import { Button, Header, Segment } from 'semantic-ui-react';
import LoadingComponent from '../../../app/layout/LoadingComponents';
import { useStore } from '../../../app/stores/store';
import { v4 as uuid } from 'uuid';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import MyTextInput from '../../../app/api/common/form/MyTextInput';
import MySelectInput from '../../../app/api/common/form/MySelectInput';
import MyDateInput from '../../../app/api/common/form/MyDateInput';
import { Publikimi } from '../../../app/models/publikimi';
import { Departamenti, Institucioni, Kategorite, LlojiPublikimit, Statusi } from '../../../app/api/common/options/publikimiOptions';
import IsbntForm from '../../isbnt/form/IsbntForm';

export default observer(function PublikimetForm() {
    const history = useHistory();
    const { publikimiStore, modalStore, userStore } = useStore();
    const { createPublikimi, loading, loadPublikimi, loadingInitial } = publikimiStore;
    const { id } = useParams<{ id: string }>();

    const [publikimi, setPublikimi] = useState<Publikimi>({
        id: '',
        titulli: '',
        emertimiEvent: '',
        data: null,
        viti: null,
        vendi: '',
        statusi: '',
        llojiPublikimit: '',
        institucioni: '',
        departamenti: '',
        lenda: '',
        kategoria: '',
        linkuPublikimit: '',
        volumiFaqeve: 0,
        referenca: '',
        autorKryesor: true,
        useriId: ''
    });

    const validationSchema = Yup.object({
        titulli: Yup.string().required('Titulli duhet te plotesohet!'),
        emertimiEvent: Yup.string().required('Eventi duhet te plotesohet!'),
        data: Yup.string().required('Data duhet te plotesohet!').nullable(),
        viti: Yup.string().required('Viti duhet te plotesohet!').nullable(),
        vendi: Yup.string().required('Vendi duhet te plotesohet!'),
        statusi: Yup.string().required('Statusi duhet te plotesohet!'),
        llojiPublikimit: Yup.string().required('Lloji publikimit duhet te plotesohet!'),
        institucioni: Yup.string().required('Institucioni duhet te plotesohet!'),
        departamenti: Yup.string().required('Departamenti duhet te plotesohet!'),
        lenda: Yup.string().required('Lenda duhet te plotesohet!'),
        kategoria: Yup.string().required('Kategoria duhet te plotesohet!'),
        linkuPublikimit: Yup.string().required('Linku Publikimit duhet te plotesohet!'),
        volumiFaqeve: Yup.string().required('Volumi Faqeve duhet te plotesohet!'),
        referenca: Yup.string().required('Referenca duhet te plotesohet!'),
    })

    useEffect(() => {
        if (id) loadPublikimi(id).then(publikimi => setPublikimi(publikimi!))
    }, [id, loadPublikimi]);

    function handleFormSubmit(publikimi: Publikimi){
        if(publikimi.id.length === 0){
            let newPublikimi = {
                ...publikimi,
                id: uuid()
            };
            createPublikimi(newPublikimi).then(() => history.push(`/publikimet/`));
            modalStore.openModal(<IsbntForm/>);
        }
    }

    if (loadingInitial) return <LoadingComponent content='Loading Publikimi...' />

    return (
        <Segment clearing>
            <Header content='Publikimi' sub color='blue' />
            <Formik
                validationSchema={validationSchema}
                initialValues={publikimi}
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
                        <Button
                            disabled={isSubmitting || !dirty || !isValid}
                            loading={loading}
                            floated='right'
                            positive type='submit' content='Next' />
                        <Button onClick={()=>modalStore.closeModal()}  as={Link} to='/publikimet' floated='right' type='button' content='Cancel' />
                    </Form>
                )}
            </Formik>
        </Segment >
    );
})
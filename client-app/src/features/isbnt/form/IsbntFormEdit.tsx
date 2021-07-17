import { observer } from 'mobx-react';
import React, { useEffect, useState } from 'react';
import { Link, useHistory, useParams } from 'react-router-dom';
import { Button, Modal, Segment } from 'semantic-ui-react';
import LoadingComponent from '../../../app/layout/LoadingComponents';
import { useStore } from '../../../app/stores/store';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import MyTextInput from '../../../app/api/common/form/MyTextInput';
import MySelectInput from '../../../app/api/common/form/MySelectInput';
import { Isbn } from '../../../app/models/isbn';
import { IsbnIssn } from '../../../app/api/common/options/isbnissnOptions';
import IsbntList from '../dashboard/IsbntList';

interface Props {
    isb: Isbn;
}

export default observer(function IsbntFormEdit({isb}: Props) {
    const history = useHistory();

    const { isbnStore, modalStore } = useStore();
    const { loadIsbn, updateIsbn, loading, loadingInitial } = isbnStore;
    const { id } = useParams<{ id: string }>();

    const [isbn, setIsbn] = useState<Isbn>({
        id: isb.id,
        llojiNumrit: isb.llojiNumrit,
        numri: isb.numri,
        
    });

    const validationSchema = Yup.object({
        llojiNumrit: Yup.string().required('Fusha nuk guxon te jete e zbrazet'),
        numri: Yup.string().required('The activity description is required'),
        
    })

    useEffect(() => {
        if (id) loadIsbn(id).then(isbn => setIsbn(isbn!))
    }, [id, loadIsbn]);

    function handleFormSubmit(isbn: Isbn) {
            updateIsbn(isbn).then(() => history.push(`/publikimet`));
            modalStore.openModal(<IsbntList/>);
    }

    //if (loadingInitial) return <LoadingComponent content='Loading publikimin...' />

    return (
        <Segment>
            <Formik
                validationSchema={validationSchema}
                initialValues={isbn}
                onSubmit={values => handleFormSubmit(values)}>
                {({ handleSubmit, isValid, isSubmitting, dirty }) => (
                    <Form className='ui form' onSubmit={handleSubmit} autoComplete='off'>
                        <MySelectInput  options={IsbnIssn} placeholder='Lloji i Numrit' name='llojiNumrit' />
                        <MyTextInput placeholder='Numri ' name='numri' />
                        <Button
                            disabled={isSubmitting || !dirty || !isValid}
                            loading={loading}
                            floated='right'
                            positive type='submit' content='Next' />
                        <Button onClick={()=>modalStore.closeModal()}  as={Link} to='/publikimet' floated='right' type='button' content='Cancel' />
                    </Form>
                )}
            </Formik>
        </Segment>
    );
})
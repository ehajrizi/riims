import { observer } from 'mobx-react';
import { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { Button, Segment } from 'semantic-ui-react';
import LoadingComponent from '../../../app/layout/LoadingComponents';
import { useStore } from '../../../app/stores/store';
import { v4 as uuid } from 'uuid';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import MyTextInput from '../../../app/api/common/form/MyTextInput';
import MySelectInput from '../../../app/api/common/form/MySelectInput';
import { Isbn } from '../../../app/models/isbn';
import { IsbnIssn } from '../../../app/api/common/options/isbnissnOptions';
import IsbntList from '../dashboard/IsbntList';
import PublikimetFormEdit from '../../Publikimet/form/PublikimetFormEdit';
import PjesemarresitPublikimetForm from '../../pjesemarresitpublikimet/form/PjesemarresitPublikimetForm';

export default observer(function IsbntForm() {
    const history = useHistory();

    const { isbnStore, modalStore, publikimiStore } = useStore();
    const { loadIsbn, createIsbn, loading, loadingInitial } = isbnStore;
    const { id } = useParams<{ id: string }>();

    const [isbn, setisbn] = useState<Isbn>({
        id: '',
        llojiNumrit: '',
        numri: '',
        publikimId: '',
    });


    const validationSchema = Yup.object({
        llojiNumrit: Yup.string().required('Fusha duhet te plotesohet!'),
        numri: Yup.string().required('Numri i ISBN-se duhet te plotesohet!'),
    })

    useEffect(() => {
        if (id) loadIsbn(id).then(isbn => setisbn(isbn!))
    }, [id, loadIsbn]);



    function handleFormSubmit(isbn: Isbn) {
        if (isbn.id.length === 0) {
            let newisbn = {
                ...isbn,
                id: uuid(),
                // publikimId: publikimiStore.publikimiId!
            };
            createIsbn(newisbn).then(() => history.push(`/home`),
            );

            // modalStore.openModal(<PjesemarresitForm/>);


        }
    }
    


    if (loadingInitial) return <LoadingComponent content='Loading...' />

    return (
        <Segment clearing>
            <Formik
                validationSchema={validationSchema}
                initialValues={isbn}
                onSubmit={(values, { resetForm }) => {
                    handleFormSubmit(values);
                    resetForm({});
                }}>
                {({ handleSubmit, isValid, isSubmitting, dirty }) => (
                    <Form className='ui form' onSubmit={handleSubmit} autoComplete='off'>
                        <MySelectInput options={IsbnIssn} placeholder='Lloji i Numrit' name='llojiNumrit' />
                        <MyTextInput placeholder='Numri ' name='numri' />
                        <MyTextInput placeholder='PublikimiId ' name='publikimId' defaultValue={publikimiStore.publikimiId!} value={publikimiStore.publikimiId!} type='hidden'/>
                        {/* <Input placeholder='PublikimiId ' name='publikimId' value=/> */}
                        <Button
                            disabled={isSubmitting || !dirty || !isValid}
                            loading={loading}
                            floated='right'
                            positive content='Add'
                            type='submit'
                            onClick={()=>{isbn.publikimId = publikimiStore.publikimiId!}}
                        />
                        {/* {publikimiStore.publikimiId!} */}
                        <IsbntList />
                        {/* {isbn.publikimId} */}
                        <Button onClick={() => modalStore.openModal(<PjesemarresitPublikimetForm />)}
                            floated='right' type='button'
                            content='Next' />
                        <Button onClick={() => modalStore.openModal(<PublikimetFormEdit publikimi={publikimiStore.getPublikimi(publikimiStore.publikimiId!)!} />)} floated='right' type='button' content='Prev' />
                    </Form>
                )}
            </Formik>
        </Segment>
    );
})


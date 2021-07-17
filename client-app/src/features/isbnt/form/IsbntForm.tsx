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
import MySelectInput from '../../../app/api/common/form/MySelectInput';
import { Isbn } from '../../../app/models/isbn';
import { IsbnIssn } from '../../../app/api/common/options/isbnissnOptions';
import PjesemarresitForm from '../../pjesemarresit/form/PjesemarresitForm';
import IsbntList from '../dashboard/IsbntList';
import PublikimetFormEdit from '../../Publikimet/form/PublikimetFormEdit';
import PublikimetForm from '../../Publikimet/form/PublikimetForm';

export default observer(function IsbntForm() {
    const history = useHistory();

    const { isbnStore, modalStore } = useStore();
    const { loadIsbn, createIsbn, loading, loadingInitial } = isbnStore;
    const { id } = useParams<{ id: string }>();

    const [isbn, setisbn] = useState<Isbn>({
        id: '' ,
        llojiNumrit: '' ,
        numri: '',
        
    });

    
    const validationSchema = Yup.object({
        llojiNumrit: Yup.string().required('Fusha nuk guxon te jete e zbrazet'),
        numri: Yup.string().required('The activity description is required'),
        
    })

    useEffect(() => {
        if (id) loadIsbn(id).then(isbn => setisbn(isbn!))
    }, [id, loadIsbn]);

    

    function handleFormSubmit(isbn:Isbn ) {
        if (isbn.id.length === 0) {
            let newisbn = {
                ...isbn,
                id: uuid()
            };
            createIsbn(newisbn).then(() => history.push(`/home`),
            );
            
            // modalStore.openModal(<PjesemarresitForm/>);
            
           
        }
    }
    // function handleReset(isbn: Isbn) {
    //     llojiNumrit: '',
    //     numri: '',

    // }
   
    
    if (loadingInitial) return <LoadingComponent content='Loading...' />

    return (
        <Segment clearing>
            <Formik
                validationSchema={validationSchema}
                initialValues={isbn}
                onSubmit={(values,{resetForm})=>{
                    handleFormSubmit(values);
                    resetForm({});
                } }>
                {({ handleSubmit, isValid, isSubmitting, dirty}) => (
                    <Form className='ui form' onSubmit={handleSubmit} autoComplete='off'>
                        <MySelectInput  options={IsbnIssn} placeholder='Lloji i Numrit' name='llojiNumrit' />
                        <MyTextInput placeholder='Numri ' name='numri'  />
                        <Button 
                        disabled={isSubmitting || !dirty || !isValid }
                            loading={loading}
                            floated='right'
                            positive  content='Add'  
                            type='button'
                             />
                        <IsbntList/>
                        <Button onClick={() => modalStore.openModal(<PjesemarresitForm/>)} 
                         floated='right' type='button'
                             content='Next' />
                        <Button onClick={() => modalStore.openModal(<PublikimetForm/>)}   floated='right' type='button' content='Prev' />
                    </Form>
                )}
            </Formik>
        </Segment>
    );
})


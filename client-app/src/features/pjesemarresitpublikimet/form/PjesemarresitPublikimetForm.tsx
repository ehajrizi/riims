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

import { roli } from '../../../app/api/common/options/pjesemarresiOption';
import PjesemarresitForm from '../../pjesemarresit/form/PjesemarresitForm';
import PjesemarresitPublikimetList from '../dashboard/PjesemarresitPublikimetList';
import PublikimetFormEdit from '../../Publikimet/form/PublikimetFormEdit';
import PublikimetForm from '../../Publikimet/form/PublikimetForm';
import { PjesemarresiPublikimi } from '../../../app/models/pjesemarresiPublikimi';

export default observer(function PjesemarresitPublikimetForm() {
    const history = useHistory();

    const { pjesemarresiPublikimiStore, modalStore } = useStore();
    const { loadPjesemarresiPublikimi, createPjesemarresiPublikimi, loading, loadingInitial } = pjesemarresiPublikimiStore;
    const { id } = useParams<{ id: string }>();

    const [pjesemarresiPublikimi, setpjesemarresiPublikimi] = useState<PjesemarresiPublikimi>({
        id: '' ,
        emriIPjesemarresit: '' ,
        roli: '',
        
    });

    
    const validationSchema = Yup.object({
        emriIPjesemarresit: Yup.string().required('Fusha nuk guxon te jete e zbrazet'),
        roli: Yup.string().required('The activity description is required'),
        
    })

    useEffect(() => {
        if (id) loadPjesemarresiPublikimi(id).then(pjesemarresiPublikimi => setpjesemarresiPublikimi(pjesemarresiPublikimi!))
    }, [id, loadPjesemarresiPublikimi]);

    

    function handleFormSubmit(pjesemarresiPublikimi:PjesemarresiPublikimi ) {
        if (pjesemarresiPublikimi.id.length === 0) {
            let newpjesemarresiPublikimi = {
                ...pjesemarresiPublikimi,
                id: uuid()
            };
            createPjesemarresiPublikimi(newpjesemarresiPublikimi).then(() => history.push(`/home`),
            );
            
            // modalStore.openModal(<PjesemarresitForm/>);
            
           
        }
    }
    // function handleReset(pjesemarresiPublikimi:PjesemarresiPublikimi ) {
    //     emriIPjesemarresit: '' ,
    //     roli: '',
        

    // }
   
    
    if (loadingInitial) return <LoadingComponent content='Loading...' />

    return (
        <Segment clearing>
            <Formik
                validationSchema={validationSchema}
                initialValues={pjesemarresiPublikimi}
                onSubmit={(values,{resetForm})=>{
                    handleFormSubmit(values);
                    resetForm({});
                } }>
                {({ handleSubmit, isValid, isSubmitting, dirty}) => (
                    <Form className='ui form' onSubmit={handleSubmit} autoComplete='off'>
                        <MySelectInput  options={roli} placeholder='Roli' name='Roli' />
                        <MyTextInput placeholder='Numri ' name='numri'  />
                        <Button 
                        disabled={isSubmitting || !dirty || !isValid }
                            loading={loading}
                            floated='right'
                            positive  content='Add'  
                            type='Submit'
                             />
                        <PjesemarresitPublikimetList/>
                        {/* <Button onClick={() => modalStore.openModal(<PjesemarresitForm/>)} 
                         floated='right' type='button'
                             content='Next' />
                        <Button onClick={() => modalStore.openModal(<PublikimetForm/>)}   floated='right' type='button' content='Prev' /> */}
                    </Form>
                )}
            </Formik>
        </Segment>
    );
})
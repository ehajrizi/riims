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
import PjesemarresitPublikimetList from '../dashboard/PjesemarresitPublikimetList';
import PublikimetForm from '../../Publikimet/form/PublikimetForm';
import { PjesemarresiPublikimi } from '../../../app/models/pjesemarresiPublikimi';
import { RoliPublikimiOptions } from '../../../app/api/common/options/roliOptions';
import IsbntForm from '../../isbnt/form/IsbntForm';

export default observer(function PjesemarresitPublikimetForm() {
    const history = useHistory();

    const { pjesemarresiPublikimiStore, modalStore, publikimiStore } = useStore();
    const { loadPjesemarresiPublikimi, createPjesemarresiPublikimi, loading, loadingInitial } = pjesemarresiPublikimiStore;
    const { id } = useParams<{ id: string }>();

    const [pjesemarresiPublikimi, setpjesemarresiPublikimi] = useState<PjesemarresiPublikimi>({
        id: '',
        emriIPjesemarresit: '',
        roli: '',
        publikimId: '',
    });


    const validationSchema = Yup.object({
        emriIPjesemarresit: Yup.string().required('Fusha nuk guxon te jete e zbrazet'),
        roli: Yup.string().required('The activity description is required'),

    })

    useEffect(() => {
        if (id) loadPjesemarresiPublikimi(id).then(pjesemarresiPublikimi => setpjesemarresiPublikimi(pjesemarresiPublikimi!))
    }, [id, loadPjesemarresiPublikimi]);



    function handleFormSubmit(pjesemarresiPublikimi: PjesemarresiPublikimi) {
        if (pjesemarresiPublikimi.id.length === 0) {
            let newpjesemarresiPublikimi = {
                ...pjesemarresiPublikimi,
                id: uuid()
            };
            createPjesemarresiPublikimi(newpjesemarresiPublikimi).then(() => history.push(`/home`),
            );


        }
    }



    if (loadingInitial) return <LoadingComponent content='Loading...' />

    return (
        <Segment clearing>
            <Formik
                validationSchema={validationSchema}
                initialValues={pjesemarresiPublikimi}
                onSubmit={(values, { resetForm }) => {
                    handleFormSubmit(values);
                    resetForm({});
                }}>
                {({ handleSubmit, isValid, isSubmitting, dirty }) => (
                    <Form className='ui form' onSubmit={handleSubmit} autoComplete='off'>
                        <MyTextInput placeholder='Emri i Pjesemarresit ' name='emriIPjesemarresit' />
                        <MySelectInput options={RoliPublikimiOptions} placeholder='Roli i Pjesemarresit' name='roli' />
                        <MyTextInput placeholder='PublikimiId ' name='publikimId' defaultValue={publikimiStore.publikimiId!} value={publikimiStore.publikimiId!} type='hidden' />

                        <Button
                            disabled={isSubmitting || !dirty || !isValid}
                            loading={loading}
                            floated='right'
                            type='submit'
                            positive content='Add'
                            onClick={()=>{pjesemarresiPublikimi.publikimId = publikimiStore.publikimiId!}}
                        />
                        <PjesemarresitPublikimetList />
                        <Button onClick={() => modalStore.closeModal()}
                            floated='right' type='button'
                            content='close' />
                        <Button onClick={() => modalStore.openModal(<IsbntForm />)} floated='right' type='button' content='Prev' />
                    </Form>
                )}
            </Formik>
        </Segment>
    );
})
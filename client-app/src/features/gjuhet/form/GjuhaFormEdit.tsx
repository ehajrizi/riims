import { observer } from 'mobx-react';
import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import { Link, useHistory, useParams } from 'react-router-dom';
import { Button, Header, Modal, Segment } from 'semantic-ui-react';
import LoadingComponent from '../../../app/layout/LoadingComponents';
import { useStore } from '../../../app/stores/store';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { Gjuha } from '../../../app/models/gjuha';
import { ZgjedhGjuha, Niveli } from '../../../app/api/common/options/gjuhaOptions';
import MySelectInput from '../../../app/api/common/form/MySelectInput';

export interface Props {
    gjuha: Gjuha;
}

export default observer(function GjuhaEditForm({ gjuha }: Props) {
    const history = useHistory();
    const { gjuhaStore, modalStore } = useStore();
    const { updateGjuha, loading, loadGjuha, loadingInitial } = gjuhaStore;
    const { id } = useParams<{ id: string }>();

    const [gjuhe, setGjuha] = useState<Gjuha>({
        id: gjuha.id,
        zgjedhGjuha: gjuha.zgjedhGjuha,
        folur: gjuha.folur,
        shkruar: gjuha.shkruar
    });

    const validationSchema = Yup.object({
        zgjedhGjuha: Yup.string().required('Duhet te zgjidhni nje gjuhe!'),
        folur: Yup.string().required('Duhet te zgjidhni nivelin e te folurit!'),
        shkruar: Yup.string().required('Duhet te zgjidhni nivelin e te shkruarit!')
    })

    useEffect(() => {
        if (id) loadGjuha(id).then(gjuha => setGjuha(gjuha!))
    }, [id, loadGjuha]);

    function handleFormSubmit(gjuha: Gjuha) {
        updateGjuha(gjuha).then(() => history.push(`/gjuhet`));
        modalStore.closeModal();
    }

    if (loadingInitial) return <LoadingComponent content='Loading Gjuha...' />

    return(
        <Segment clearing>
            <Header content='Gjuha' sub color='blue' />
            <Formik
                validationSchema={validationSchema}
                enableReinitialize
                initialValues={gjuhe}
                onSubmit={values => handleFormSubmit(values)}>
                {({ handleSubmit, isValid, isSubmitting, dirty }) => (
                    <Form className='ui form' onSubmit={handleSubmit} autoComplete='off'>
                        <MySelectInput options={ZgjedhGjuha} placeholder='Gjuha' name='zgjedhGjuha' />
                        <MySelectInput options={Niveli} placeholder='Niveli ne te folur' name='folur' />
                        <MySelectInput options={Niveli} placeholder='Niveli ne te shkruar' name='shkruar' />
                        
                        <Button
                            disabled={isSubmitting || !dirty || !isValid}
                            loading={loading}
                            floated='right'
                            positive type='submit' content='Submit' />
                        <Button onClick={()=>modalStore.closeModal()} as={Link} to='/gjuhet' floated='right' type='button' content='Cancel' />
                    </Form>
                )}
            </Formik>
        </Segment >
    )
})
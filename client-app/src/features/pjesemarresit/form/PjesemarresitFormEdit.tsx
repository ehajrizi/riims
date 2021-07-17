import { observer } from 'mobx-react';
import { useEffect, useState } from 'react';
import { Link, useHistory, useParams } from 'react-router-dom';
import { Button, Segment } from 'semantic-ui-react';
import { useStore } from '../../../app/stores/store';
import * as Yup from 'yup';
import { Pjesemarresi } from '../../../app/models/pjesemarresi';
import { Form, Formik } from 'formik';
import MyTextInput from '../../../app/api/common/form/MyTextInput';
import MySelectInput from '../../../app/api/common/form/MySelectInput';
import { roli } from '../../../app/api/common/options/pjesemarresiOption';

interface Props { pjesemarres : Pjesemarresi }
export default observer(function PjesemarresitFormEdit({ pjesemarres}: Props) {
    const history = useHistory();

    const { pjesemarresiStore, modalStore } = useStore();
    const { loadPjesemarresi, updatePjesemarresi, loading, loadingInitial } = pjesemarresiStore;
    const { id } = useParams<{ id: string }>();

    const [pjesemarresi, setPjesemarresi] = useState<Pjesemarresi>({
        id: pjesemarres.id,
        emriIPjesemarresit: pjesemarres.emriIPjesemarresit,
        roli: pjesemarres.roli,
        useriId: pjesemarres.useriId
    });
    const validationSchema = Yup.object({
        emriIPjesemarresit: Yup.string().required('Emri i pjesemarresit is required'),
        roli: Yup.string().required('roli is required'),
       
    })

    useEffect(() => {
        if (id) loadPjesemarresi(id).then(pjesemarresi => setPjesemarresi(pjesemarresi!))
    }, [id, loadPjesemarresi]);

    function handleFormSubmit(pjesemarresi:Pjesemarresi) {
        updatePjesemarresi(pjesemarresi).then(() => history.push(`/pjesemarresit/${pjesemarresi.id}`));
        modalStore.closeModal();
    }


    // if (loadingInitial) return <LoadingComponent content='Loading pjesemarresi...'/>

    return(
        <Segment clearing>
            <Formik
                validationSchema={validationSchema}
                
                initialValues={pjesemarresi}
                onSubmit={values => handleFormSubmit(values)}>
                {({ handleSubmit, isValid, isSubmitting, dirty }) => (
                    <Form className='ui form' onSubmit={handleSubmit} autoComplete='off'>
                        <MyTextInput name='emriIPjesemarresit' placeholder='Emrii Pjesemarresit' />
                      
                       
                        <MySelectInput options={roli} placeholder='roli' name='roli' />
                       
                        <Button
                            disabled={isSubmitting || !dirty || !isValid}
                            loading={loading}
                            floated='right'
                            positive type='submit' content='Submit' />
                        <Button onClick={()=>modalStore.closeModal()} as={Link} to='/pjesemarresit' floated='right' type='button' content='Cancel' />
                    </Form>
                )}
            </Formik>
        </Segment >
    );
})
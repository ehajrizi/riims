import { observer } from 'mobx-react';
import { useEffect, useState } from 'react';
import { Link, useHistory, useParams } from 'react-router-dom';
import { Button, Segment } from 'semantic-ui-react';
import { useStore } from '../../../app/stores/store';
import * as Yup from 'yup';
import { PjesemarresiPublikimi } from '../../../app/models/pjesemarresiPublikimi';
import { Form, Formik } from 'formik';
import MyTextInput from '../../../app/api/common/form/MyTextInput';
import MySelectInput from '../../../app/api/common/form/MySelectInput';
import { roli } from '../../../app/api/common/options/pjesemarresiOption';

interface Props { 
    pjesemarrespublikim : PjesemarresiPublikimi 
}
export default observer(function PjesemarresitPublikimetFormEdit({ pjesemarrespublikim}: Props) {
    const history = useHistory();

    const { pjesemarresiPublikimiStore, modalStore } = useStore();
    const { loadPjesemarresiPublikimi, updatePjesemarresiPublikimi, loading, loadingInitial } = pjesemarresiPublikimiStore;
    const { id } = useParams<{ id: string }>();

    const [pjesemarresiPublikimi, setPjesemarresiPublikimi] = useState<PjesemarresiPublikimi>({
        id: pjesemarrespublikim.id,
        emriIPjesemarresit: pjesemarrespublikim.emriIPjesemarresit,
        roli: pjesemarrespublikim.roli,
       
    });
    const validationSchema = Yup.object({
        emriIPjesemarresit: Yup.string().required('Emri i pjesemarresit is required'),
        roli: Yup.string().required('roli is required'),
       
    })

    useEffect(() => {
        if (id) loadPjesemarresiPublikimi(id).then(pjesemarresiPublikimi => setPjesemarresiPublikimi(pjesemarresiPublikimi!))
    }, [id, loadPjesemarresiPublikimi]);

    function handleFormSubmit(pjesemarresiPublikimi:PjesemarresiPublikimi) {
        updatePjesemarresiPublikimi(pjesemarresiPublikimi).then(() => history.push(`/pjesemarresitpublikimet/${pjesemarresiPublikimi.id}`));
        modalStore.closeModal();
    }


    // if (loadingInitial) return <LoadingComponent content='Loading pjesemarresi...'/>

    return(
        <Segment clearing>
            <Formik
                validationSchema={validationSchema}
                initialValues={pjesemarresiPublikimi}
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
                        <Button onClick={()=>modalStore.closeModal()} as={Link} to='/publikimet' floated='right' type='button' content='Cancel' />
                    </Form>
                )}
            </Formik>
        </Segment >
    );
})
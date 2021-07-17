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
import { Donatori } from '../../../app/models/donatori';

interface Props { donator : Donatori }
export default observer(function DonatoretFormEdit({donator}: Props) {
    const history = useHistory();

    const { donatoriStore, modalStore } = useStore();
    const { loadDonatori, updateDonatori, loading, loadingInitial } = donatoriStore;
    const { id } = useParams<{ id: string }>();

    const [donatori, setDonatori] = useState<Donatori>({
        id: donator.id,
        emriIDonatorit: donator.emriIDonatorit,
        pershkrimiDonatorit: donator.pershkrimiDonatorit,
        kontributiIDhene: donator.kontributiIDhene,
        useriId: donator.useriId
       
    });
    const validationSchema = Yup.object({
        emriIDonatorit: Yup.string().required('Emri i donatorit is required'),
        pershkrimiDonatorit: Yup.string().required('Pershkrimi i donatorit is required'),
        kontributiIDhene: Yup.string().required('Kontributi i donatorit is required'),
    })

    useEffect(() => {
        if (id) loadDonatori(id).then(donatori => setDonatori(donatori!))
    }, [id, loadDonatori]);

    function handleFormSubmit(donatori:Donatori) {
        updateDonatori(donatori).then(() => history.push(`/donatoret/${donatori.id}`));
        modalStore.closeModal();
    }


    // if (loadingInitial) return <LoadingComponent content='Loading pjesemarresi...'/>

    return(
        <Segment clearing>
            <Formik
                validationSchema={validationSchema}
                
                initialValues={donatori}
                onSubmit={values => handleFormSubmit(values)}>
                {({ handleSubmit, isValid, isSubmitting, dirty }) => (
                    <Form className='ui form' onSubmit={handleSubmit} autoComplete='off'>
                        <MyTextInput name='EmriIDonatorit' placeholder='Emri i Donatorit' />
                        <MyTextInput name='PershkrimiDonatorit' placeholder='Pershkrimi i Donatorit' />
                        <MyTextInput name='KontributiIDhene' placeholder='Kontributi i Donatorit' />
                       
                        
                       
                        <Button
                            disabled={isSubmitting || !dirty || !isValid}
                            loading={loading}
                            floated='right'
                            positive type='submit' content='Submit' />
                        <Button onClick={()=>modalStore.closeModal()} as={Link} to='/donatoret' floated='right' type='button' content='Cancel' />
                    </Form>
                )}
            </Formik>
        </Segment >
    );
})
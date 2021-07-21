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
import { Donatori } from '../../../app/models/donatori';
import PjesemarresitForm from '../../pjesemarresit/form/PjesemarresitForm';
import DonatoretList from '../dashboard/DonatoretList';
import ProjektetFormEdit from '../../projektet/form/ProjektetFormEdit';


export default observer(function DonatoretForm() {
    const history = useHistory();
    const { donatoriStore, modalStore ,projektiStore} = useStore();
    const { createDonatori, loading, loadDonatori, loadingInitial } = donatoriStore;
    const { id } = useParams<{ id: string }>();

    const [donatori, setDonatori] = useState<Donatori>({
        id: '',
        emriIDonatorit: '',
        pershkrimiDonatorit: '',
        kontributiIDhene: 0,
        projektId: ''
    });

    const validationSchema = Yup.object({
      
        emriIDonatorit: Yup.string().required('Emri donatorit duhet te plotesohet!'),
        pershkrimiDonatorit: Yup.string().required('Pershkrimi duhet te plotesohet!'),
        kontributiIDhene: Yup.number().required('Kontributi duhet te plotesohet!'),
       
    })

    useEffect(() => {
        if (id) loadDonatori(id).then(donatori => setDonatori(donatori!))
    }, [id, loadDonatori]);

    function handleFormSubmit(donatori: Donatori){
        if(donatori.id.length === 0){
            let newDonatori = {
                ...donatori,
                id: uuid()
            };
            createDonatori(newDonatori).then(() => history.push(`/home`));
        
        }
        
    }

    if (loadingInitial) return <LoadingComponent content='Loading Donatori...' />

    return (
        <Segment clearing>
            <Formik
                validationSchema={validationSchema}
                initialValues={donatori}
                onSubmit={(values,{resetForm})=>{
                    handleFormSubmit(values);
                    resetForm({});
                } }>
                {({ handleSubmit, isValid, isSubmitting, dirty }) => (
                    <Form className='ui form' onSubmit={handleSubmit} autoComplete='off'>
                        <MyTextInput name='emriIDonatorit' placeholder='EmriDonatorit' />
                        <MyTextInput placeholder='Pershkrimi i donatorit' name='pershkrimiDonatorit' />
                        <MyTextInput placeholder='Kontributi i dhene' name='kontributiIDhene' />
                        <MyTextInput placeholder='ProjektiId ' name='projektId' defaultValue={projektiStore.projektId!} value={projektiStore.projektId!} type='hidden'/>
                        <Button
                            disabled={isSubmitting || !dirty || !isValid}
                            loading={loading}
                            floated='right'
                            type='Submit'
                            positive  content='Add'
                            onClick={()=>{donatori.projektId = projektiStore.projektId!}} 
                             />
                        <DonatoretList/>
                        <Button onClick={() => modalStore.openModal(<PjesemarresitForm/>)} 
                         floated='right' type='button'
                             content='Next' />
                        <Button onClick={() => modalStore.openModal(<ProjektetFormEdit projekti={projektiStore.getProjekt(projektiStore.projektId!)!} />)}   floated='right' type='button' content='Prev' />
                    </Form>
                )}
            </Formik>
        </Segment >
    );
})
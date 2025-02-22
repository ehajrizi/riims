import React, { useEffect, useState } from 'react';
import { Button, Form, Segment } from 'semantic-ui-react';
import { useStore } from '../../../app/stores/store';
import LoadingComponent from '../../../app/layout/LoadingComponents';
import { observer } from 'mobx-react-lite';
import { useHistory, useParams } from 'react-router-dom';
import * as Yup from 'yup';
import { Formik } from 'formik';
import MyDateInput from '../../../app/api/common/form/MyDateInput';
import MyTextInput from '../../../app/api/common/form/MyTextInput';
import MyTextArea from '../../../app/api/common/form/MyTextArea';
import { User } from '../../../app/models/user';

interface Props{
    usr: User;
}

export default observer(function EditUserForm({usr}: Props){
    const history = useHistory();

    const {userStore,modalStore} = useStore();
    const {loadUser,updateUser, loadingInitial, loading} = userStore;
    const {email} = useParams<{email: string}>();

    const [user, setUser] = useState<User>({
        id:usr.id,
        emri: usr.emri,
        emriMesem: usr.emriMesem,
        username: usr.username,
        token: usr.token,
        roli: usr.roli,
        datelindja: usr.datelindja,
        gjinia: usr.gjinia,
        vendlindja: usr.vendlindja,
        shtetiLindjes: usr.shtetiLindjes,
        shtetiCurrent: usr.shtetiCurrent,
        qytetiCurrent: usr.qytetiCurrent,
        zipKodiCurrent: usr.zipKodiCurrent,
        pershkrimi: usr.pershkrimi,
        rrugaCurrent: usr.rrugaCurrent,
        phoneNumber: usr.phoneNumber,
        image: usr.image,
        titulliShkencor: usr.titulliShkencor,
        mbiemri: usr.mbiemri,
        linkedIn: usr.linkedIn,
        email: usr.email
    }); 

    const validationSchema = Yup.object({
        emri: Yup.string().required('Emri duhet te plotesohet!'),
        mbiemri: Yup.string().required('Mbiemri duhet te plotesohet!'),
        roli: Yup.string().required('Roli duhet te plotesohet!'),
        datelindja: Yup.string().required('Datelindja kerkohet').nullable(),
        email: Yup.string().email().required('Email duhet te plotesohet!'),
    })

    useEffect(() => {
        if(email) loadUser(email).then(user => setUser(user!))
    },[email, loadUser]);
    
    function handleSubmitUser(user: User){
        updateUser(user).then(() => history.push(`/adminDashboard`))
        modalStore.closeModal(); 
    }

    if(loadingInitial) return <LoadingComponent content='Loading user...'/>

    return(
        <Segment clearing>
            <Formik
                validationSchema= {validationSchema}
                enableReinitialize
                initialValues= {user}
                onSubmit = {values => handleSubmitUser(values)}>
                {({handleSubmit, isValid, dirty, isSubmitting}) => (
                <Form className='ui form' onSubmit={handleSubmit} autoComplete='off'>
                    <MyTextInput placeholder='emri' name='emri'/>
                    <MyTextInput placeholder='emri i mesem' name='emriMesem'/>
                    <MyTextInput placeholder='mbiemri' name='mbiemri'/>
                    <MyTextInput placeholder='email' name='email'/>
                    <MyTextInput placeholder='username' name='username'/>
                    <MyTextArea placeholder='Pershkrimi'name='pershkrimi' rows={4}/>
                    <MyDateInput placeholderText='Datelindja' name='datelindja' 
                                 dateFormat='MMMM d, yyyy'/>
                    <MyTextInput placeholder='Roli'  name='roli'/>
                    <MyTextInput placeholder='Qyteti i lindjes'  name='vendlindja'/>
                    <MyTextInput placeholder='Shteti i lindjes'  name='shtetiLindjes'/>
                    <MyTextInput placeholder='Numri i Telefonit' name='phoneNumber'/>
                    <MyTextInput placeholder='titulliShkencor' name='titulliShkencor'/>
                    <MyTextInput placeholder='Qyteti' name='qytetiCurrent'/>
                    <MyTextInput placeholder='ZipKodi' name='zipKodiCurrent'/>
                    <MyTextInput placeholder='Shteti' name='shtetiCurrent'/>
                    <MyTextInput placeholder='Linked In Account' name='linkedIn'/>
                    <Button
                        disabled = {isSubmitting || !dirty || !isValid}
                        loading={loading} 
                        floated='right' 
                        positive type='submit' 
                        content='Submit'/>
                    <Button onClick={()=>modalStore.closeModal()} floated='right' type='button' content='Cancel'/>
                </Form>
            )}
            </Formik>
        </Segment>
    )
})
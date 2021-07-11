import { observer } from 'mobx-react-lite';
import React from 'react';
import { Button, Header } from 'semantic-ui-react';
import { store, useStore } from '../../app/stores/store';
import * as Yup from 'yup'
import MyTextInput from '../../app/api/common/form/MyTextInput';
import { Link } from 'react-router-dom';
import { Form, Formik } from 'formik';
// import ValidationErrors from '../errors/ValidationErrors';

export default observer(function RegisterForm(){
    const {userStore} = useStore();
    return (
        <Formik 
            initialValues={{emri: '', mbiemri: '',email: '', username: '', password: '', error: null}}
            onSubmit={(values, {setErrors}) => userStore.register(values)
                .catch(error => setErrors({error}))}
            validationSchema={Yup.object({
                emri: Yup.string().required('Emri duhet te plotesohet!'),
                mbiemri: Yup.string().required('Mbiemri duhet te plotesohet!'),
                email: Yup.string().required('E-mail duhet te plotesohet!').email(),
                username: Yup.string().required('Username duhet te plotesohet!'),
                password: Yup.string().required('Password duhet te plotesohet!'),
            })}
        >
            {({handleSubmit, isSubmitting, errors, isValid, dirty}) => (
                <Form className='ui form error' onSubmit={handleSubmit} autoComplete='off'>
                   <Header as='h2' content='Sign up to RIIMS' color='blue' textAlign='center' />
                    <MyTextInput name='emri' placeholder='Emri'/>
                    <MyTextInput name='mbiemri' placeholder='Mbiemri'/>
                    <MyTextInput name='email' placeholder='Email'/>
                    <MyTextInput name='username' placeholder='Username'/>
                    <MyTextInput name='password' placeholder='Password' type='password'/>
                    <Button disabled={!isValid || !dirty || isSubmitting}
                        loading={isSubmitting} positive content='Register' type='submit' fluid/>
                </Form>
            )}
        </Formik>
    )
})
import { observer } from 'mobx-react-lite';
import { Button, Header } from 'semantic-ui-react';
import { useStore } from '../../app/stores/store';
import * as Yup from 'yup'
import MyTextInput from '../../app/api/common/form/MyTextInput';
import { Form, Formik } from 'formik';
import MyDateInput from '../../app/api/common/form/MyDateInput';
import MyTextArea from '../../app/api/common/form/MyTextArea';
import MySelectInput from '../../app/api/common/form/MySelectInput';
import { GjiniaOptions } from '../../app/api/common/options/gjiniaOptions';
// import ValidationErrors from '../errors/ValidationErrors';

export default observer(function RegisterForm(){
    const {userStore} = useStore();
    const phoneReg = /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;
    return (
        <Formik 
            initialValues={{emri: '', mbiemri: '',email: '', username: '', password: '', confirmPassword: '', emriMesem: '', phoneNumber: '', gjinia: 'F', titulliShkencor: '', datelindja: null, vendlindja: '', shtetiLindjes: '', rrugaCurrent: '', qytetiCurrent: '', zipKodiCurrent: '', shtetiCurrent: '', pershkrimi: '', linkedIn: '' , roli: 'simpleUser', error: null}}
            onSubmit={(values, {setErrors}) => userStore.register(values)
                .catch(error => setErrors({error}))}
            validationSchema={Yup.object({
                emri: Yup.string().required('Emri duhet te plotesohet!'),
                mbiemri: Yup.string().required('Mbiemri duhet te plotesohet!'),
                email: Yup.string().email().required('E-mail duhet te plotesohet!'),
                password: Yup.string().required('Fjalekalimi duhet te plotesohet!'),
                confirmPassword: Yup.string().oneOf([Yup.ref('password'), null], 'Fjalekalimet nuk jane te njejta!'),
                phoneNumber: Yup.string().matches(phoneReg, 'Numri i telefonit nuk eshte valid').required(),
                gjinia: Yup.string().required('Gjinia duhet te percaktohet!'),
                titulliShkencor: Yup.string().required('Titulli shkencor duhet te plotesohet!'),
                datelindja: Yup.string().required('Data e lindjes kerkohet').nullable(),
                vendlindja: Yup.string().required('Titulli shkencor duhet te plotesohet!'),
                shtetiLindjes: Yup.string().required('Titulli shkencor duhet te plotesohet!'),
                rrugaCurrent: Yup.string().required('Titulli shkencor duhet te plotesohet!'),
                qytetiCurrent: Yup.string().required('Titulli shkencor duhet te plotesohet!'),
                zipKodiCurrent: Yup.string().required('Titulli shkencor duhet te plotesohet!'),
                shtetiCurrent: Yup.string().required('Titulli shkencor duhet te plotesohet!'),
                username: Yup.string().required('Username duhet te plotesohet!'),
            })}
        >
            {({handleSubmit, isSubmitting, errors, isValid, dirty}) => (
                <Form className='ui form error' onSubmit={handleSubmit} autoComplete='off'>
                   <Header as='h2' content='Sign up to RIIMS' color='blue' textAlign='center' />
                    <MyTextInput name='roli' type='hidden'/>
                    <MyTextInput name='titulliShkencor' placeholder='Titulli shkencor'/>
                    <MyTextInput name='emri' placeholder='Emri'/>
                    <MyTextInput name='emriMesem' placeholder='Emri i mesem'/>
                    <MyTextInput name='mbiemri' placeholder='Mbiemri'/>
                    <MySelectInput options={GjiniaOptions} placeholder='Zgjedh gjinine' name='gjinia' />
                    <MyTextInput name='phoneNumber' placeholder='Numri i telefonit'/>
                    <MyTextInput name='username' placeholder='Username'/>
                    <MyTextInput name='email' placeholder='Email'/>
                    <MyTextInput name='password' placeholder='Fjalekalimi' type='password'/>
                    <MyTextInput name='confirmPassword' placeholder='Konfirmo fjalekalimin' type='password'/>
                    <MyDateInput placeholderText='Datelindja' name='datelindja'
                            dateFormat='MMMM d, yyyy'/>
                    <MyTextInput name='vendlindja' placeholder='Qyteti i lindjes'/>
                    <MyTextInput name='shtetiLindjes' placeholder='Shteti i lindjes'/>
                <Header as='h4' content='Adresa' color='blue' textAlign='center' />
                    <MyTextInput name='rrugaCurrent' placeholder='Rruga'/>
                    <MyTextInput name='qytetiCurrent' placeholder='Qyteti'/>
                    <MyTextInput name='zipKodiCurrent' placeholder='Zip Kodi'/>
                    <MyTextInput name='shtetiCurrent' placeholder='Shteti'/>
                    <MyTextArea rows={3} placeholder='Pershkrimi' name='pershkrimi' />
                    <MyTextInput name='linkedIn' placeholder='Linku i llogarise Linked In'/>
                    <Button disabled={!isValid || !dirty || isSubmitting}
                        loading={isSubmitting} positive content='Register' type='submit' fluid/>
                </Form>
            )}
        </Formik>
    )
})
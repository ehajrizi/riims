import { Form, Formik } from "formik";
import { observer } from "mobx-react-lite";
import { Button, Grid, Header, Segment, Image, Message } from "semantic-ui-react";
import MyTextArea from "../../app/api/common/form/MyTextArea";
import MyTextInput from "../../app/api/common/form/MyTextInput";
import { useStore } from "../../app/stores/store";
import * as Yup from 'yup';
import swal from 'sweetalert';

// interface Props {
//     setEditMode: (editMode: boolean) => void;
// }

export default observer(function ProfileEditForm() {
    const { profileStore: { updateProfile } } = useStore();
    const { userStore: { user } } = useStore();

function messageSuccess(){
    swal("Profile Updated Succesfully")
}   

    return (
        <Segment style={{ marginLeft: '10em', marginRight: '10em', marginTop: '5em', marginBottom: '5em', paddingRight: '3em', paddingTop: '3em', paddingLeft: '3em' }}>
            <Grid>
                <Grid.Column width={4}>
                    <Image src="https://i.pinimg.com/originals/20/f2/59/20f2590149ae7971225b70fb287de3f4.jpg" size='small' />
                </Grid.Column>
                <Grid.Column width={12}>
                    <Formik
                        initialValues={{
                            emri: user?.emri!, mbiemri: user?.mbiemri!, emriMesem: user?.emriMesem!,
                            dateLindja: user?.datelindja!, gjinia: user?.gjinia!, titulliShkencor: user?.titulliShkencor!,
                            vendlindja: user?.vendlindja!, shtetiLindjes: user?.shtetiLindjes!, rrugaCurrent: user?.rrugaCurrent!,
                            qytetiCurrent: user?.qytetiCurrent!, zipKodiCurrent: user?.zipKodiCurrent!, shtetiCurrent: user?.shtetiCurrent!,
                            pershkrimi: user?.pershkrimi!, linkedIn: user?.linkedIn!, phoneNumber: user?.phoneNumber!, sent: false, message: ''
                            // , id: user?.id!,
                            // username: user?.username!, token: user?.token!, email: user?.email!
                        }}
                        onSubmit={values => {
                            updateProfile(values)
                        }}
                        validationSchema={Yup.object({
                            emri: Yup.string().required(),
                            mbiemri: Yup.string().required(),
                            emriMesem: Yup.string().required(),
                            dateLindja: Yup.string().required(),
                            gjinia: Yup.string().required(),
                            titulliShkencor: Yup.string().required(),
                            vendlindja: Yup.string().required(),
                            shtetiLindjes: Yup.string().required(),
                            rrugaCurrent: Yup.string().required(),
                            qytetiCurrent: Yup.string().required(),
                            zipKodiCurrent: Yup.string().required(),
                            shtetiCurrent: Yup.string().required(),
                            phoneNumber: Yup.string().required()
                        })}
                    >
                        {({ isValid, dirty }) => (
                            <Form className='ui form'>
                                <Header>Te dhena personale</Header>
                                <MyTextInput placeholder='Emri' name='emri' />
                                <MyTextInput placeholder='Mbiemri' name='mbiemri' />
                                <MyTextInput placeholder='Emri i mesem' name='emriMesem' />
                                <MyTextInput placeholder='Datelindja' name='dateLindja' />
                                <MyTextInput placeholder='Gjinia' name='gjinia' />
                                <MyTextInput placeholder='Titulli Shkencor' name='titulliShkencor' />
                                <MyTextInput placeholder='Vendlindja' name='vendlindja' />
                                <MyTextInput placeholder='Shteti i lindjes' name='shtetiLindjes' />
                                <Header>Adresa</Header>
                                <MyTextInput placeholder='Rruga' name='rrugaCurrent' />
                                <MyTextInput placeholder='Qyteti' name='qytetiCurrent' />
                                <MyTextInput placeholder='Zip Kodi' name='zipKodiCurrent' />
                                <MyTextInput placeholder='Shteti' name='shtetiCurrent' />
                                <Header>Te dhena tjera</Header>
                                <MyTextArea placeholder='Pershkrimi' name='pershkrimi' rows={3} />
                                <MyTextInput placeholder='LinkedId' name='linkedIn' />
                                <MyTextInput placeholder='Numri i telefonit' name='phoneNumber' />
                                <Button
                                    positive
                                    type='submit'
                                    content='Update user'
                                    floated='right'
                                    disabled={!isValid || !dirty}
                                    onClick={messageSuccess }
                                />
                            </Form>
                        )}
                    </Formik>
                </Grid.Column>
            </Grid>
        </Segment>

    )
})
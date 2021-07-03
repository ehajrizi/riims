import { observer } from 'mobx-react-lite';
import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Header, Segment, Image, Button } from 'semantic-ui-react';
import { useStore } from '../../app/stores/store';
import LoginForm from '../users/LoginForm';
import Home from '../../features/Home/Home';
import RegisterForm from '../users/RegisterForm';


export default observer(function LogReg() {
    const {userStore, modalStore} = useStore();

    return (
        <Segment textAlign='center' vertical className='image-bg' white>
            <div className='blue-bg' >
                <Container text >
                    <Header as='h1' inverted >
                    </Header>
                    {userStore.isLoggedIn ? (
                            <Home />
                    ) : (
                        <>
                            <Button onClick={() => modalStore.openModal(<LoginForm/>)} size='huge' inverted color='blue'>
                                Login
                            </Button>
                            <Button onClick={() => modalStore.openModal(<RegisterForm/>)} size='huge' inverted color='blue'>
                                Register
                            </Button>
                        </>    
                    )}
                </Container>
            </div>
        </Segment>
    )
})

//test
import { observer } from 'mobx-react-lite';
import React from 'react';
import { Header, Segment, Button } from 'semantic-ui-react';
import { useStore } from '../../app/stores/store';
import LoginForm from '../users/LoginForm';
import Home from '../../features/Home/Home';
import RegisterForm from '../users/RegisterForm';


export default observer(function LogReg() {
    const {userStore, modalStore} = useStore();

    return (

        <div className='splitScreen'>
        <Segment textAlign='center' vertical className='image-bg' white>    
        </Segment>
        <Segment className='bottomPane'>
                    {userStore.isLoggedIn ? (
                            <Home />
                    ) : (
                        <>  
                            <div className='logreg-btn'>
                                <Header style={{fontSize: "120px", color: "rgb(51,73,111)"}}>RIIMS</Header>
                                <Header style={{fontSize: "30px", color: "rgb(51,73,111)"}}>Join us today</Header>
                                
                                <Button onClick={() => modalStore.openModal(<RegisterForm/>)} size='huge' circular color='blue' style={{marginBottom:'15px'}}>
                                    Register
                                </Button>
                                <Button onClick={() => modalStore.openModal(<LoginForm/>)} size='huge' circular inverted color='blue'>
                                    Login
                                </Button>
                                
                            </div>
                        </>    
                    )}
        </Segment>
                
            
        
        </div>
        
    )
})

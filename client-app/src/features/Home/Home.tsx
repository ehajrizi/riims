import { observer } from 'mobx-react-lite';
import React from "react";
import { Link, NavLink } from "react-router-dom";
import { Button, Card, Divider, Grid, Header, Segment } from "semantic-ui-react";
import Footer from "../../app/layout/Footer";
import NavBar from "../../app/layout/NavBar";
import scrollToPublikimet, { scrollToAnetaresia, scrollToCertifikimet, scrollToEdukimi, scrollToEksperiencat, scrollToHonorsAndAwards, scrollToMbikeqyresITemave, scrollToProjektet, scrollToSpecializimet, scrollToTop } from "../../app/styling-functions/Scrolling";
import AnetaresiaDashboard from "../anetaresite/dashboard/AnetaresiaDashboard";
import EdukimiDashboard from "../edukimet/dashboard/EdukimiDashboard";
import EksperiencaDashboard from "../eksperiencat/dashboard/EksperiencaDashboard";
import HonorandAwardDashboard from "../honorsandawards/dashboard/HonorandAwardDashboard";
import MbikeqyresiTemaveDashboard from "../mbikeqyresittemave/dashboard/MbikeqyresiTemaveDashboard";
import ProjektetDashboard from "../projektet/dashboard/ProjektetDashboard";
import PublikimetDashboard from "../Publikimet/dashboard/PublikimetDashboard";
import SpecializimiDashboard from "../specializimet/dashboard/SpecializimiDashboard";
import GjuhaDashboard from '../../features/gjuhet/dashboard/GjuhaDashboard';
import LogReg from '../LogReg/LogReg';
import { useStore } from '../../app/stores/store';
import CertifikimiDashboard from '../certifikimet/dashboard/CertifikimiDashboard';
import IsbntDashboard from '../isbnt/dashboard/IsbntDashboard';
import PjesemarresitDashboard from '../pjesemarresit/dashboard/PjesemarresitDashboard';
import PjesemarresitPublikimetDashboard from '../pjesemarresitpublikimet/dashboard/PjesemarresitPublikimetDashboard';
import DonatoretDashboard from '../donatoret/dashboard/DonatoretDashboard';
import UserDashboard from '../profile/UserDashboard';
import ProfileImage from '../../app/layout/Image';


export default observer(function Home() {
    const { userStore, modalStore } = useStore();
    return (
        <>
            {userStore.isLoggedIn ? (
                <>
                    <Segment className={'navbar'} style={{ marginTop: '-1em' }}>
                        <NavBar />
                    </Segment>

                    <Grid centered>

                        <Grid.Column width='12'>
                            <Segment style={{ marginTop: 60, marginLeft: '2em' }}>
                                <Grid style={{ marginLeft: '2em', paddingTop: '1em', paddingBottom: '1em' }}>
                                    <Grid.Column width='5'>
                                        <ProfileImage />
                                    </Grid.Column>
                                    <Grid.Column width='11'>
                                        <UserDashboard user={userStore.UserLoggedIn!}/>
                                    </Grid.Column>
                                </Grid>
                            </Segment>
                        </Grid.Column>
                    </Grid>
                    <Grid width='16' stretched centered>
                        <Card.Group itemsPerRow={9}>
                            <Card fluid color='blue' header='Eksperiencat' onClick={scrollToEksperiencat} as={NavLink} to='/eksperiencat' />
                            <Card fluid color='blue' header='Edukimi' onClick={scrollToEdukimi} as={NavLink} to='/edukimet' />
                            <Card fluid color='blue' header='Specializimet' onClick={scrollToSpecializimet} as={NavLink} to='/specializimet' />
                            <Card fluid color='blue' header='Certifikimet' onClick={scrollToCertifikimet} as={NavLink} to='/certifikimet' />
                            <Card fluid color='blue' header='Mbikeqyres i temave' onClick={scrollToMbikeqyresITemave} as={NavLink} to='/mbikeqyresitemave' />
                            <Card fluid color='blue' header='Publikimet' onClick={scrollToPublikimet} as={NavLink} to='/publikimet' />
                            <Card fluid color='blue' header='Projektet' onClick={scrollToProjektet} as={NavLink} to='/projektet' />
                            <Card fluid color='blue' header='Anetaresia' onClick={scrollToAnetaresia} as={NavLink} to='/anetaresia' />
                            <Card fluid color='blue' header='Honors & Awards' onClick={scrollToHonorsAndAwards} as={NavLink} to='/honorsandawards' />
                        </Card.Group>

                    </Grid>
                    <Grid style={{ marginLeft: '6em' }} >
                        <Grid.Column width='10' >
                            <Segment className={'eksperiencat'} basic>
                                <EksperiencaDashboard />
                            </Segment>
                            <Segment className={'edukimet'} basic>
                                <EdukimiDashboard />
                            </Segment>
                            <Segment className={'specializimet'} basic>
                                <SpecializimiDashboard />
                            </Segment>

                            <Segment className={'certifikimet'} basic>
                                <CertifikimiDashboard />
                            </Segment>

                            <Segment className={'mbikeqyresitemave'} basic>
                                <MbikeqyresiTemaveDashboard />
                            </Segment>
                            <Segment className={'publikimet'} basic>
                                <PublikimetDashboard />
                            </Segment>
                            <Segment className={'projektet'} basic>
                                <ProjektetDashboard />
                            </Segment>
                            
                        <Segment className={'honorsawards'} basic>
                            <HonorandAwardDashboard />
                        </Segment> 
                        <Segment className={'isbn'} hidden basic>
                            <IsbntDashboard />
                        </Segment >
                        <Segment className={'pjesemarresit'} hidden basic> 
                            <PjesemarresitDashboard />
                        </Segment>  
                            <Segment className={'anetaresia'}  basic> 
                                <AnetaresiaDashboard />
                            </Segment>

                            <Segment className={'pjesemarresitPublikimet'} hidden basic>
                                <PjesemarresitPublikimetDashboard />
                            </Segment>

                            <Segment className={'donatoret'}hidden  basic>
                                <DonatoretDashboard />
                            </Segment>
                        </Grid.Column>


                        <Grid.Column style={{ marginRight: '0.5em' }} width='5'>
                            <Segment className={'gjuhet'} basic>
                                <GjuhaDashboard />
                            </Segment>
                        </Grid.Column>
                    </Grid>

                    <Button className='angleUp' icon='angle up' size='massive' onClick={scrollToTop} as={Link} to='/home'/>
                    <Footer />
                </>
            ) : (
                <LogReg/>
            )}
        </>
    )
})
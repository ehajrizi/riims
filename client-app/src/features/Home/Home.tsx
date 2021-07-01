import React from "react";
import { Link, NavLink } from "react-router-dom";
import { Button, Card, Divider, Grid, Header, Segment } from "semantic-ui-react";
import ModalContainer from "../../app/api/common/modals/ModalContainer";
import Footer from "../../app/layout/Footer";
import ImageExampleCircular from "../../app/layout/Image";
import NavBar from "../../app/layout/NavBar";
import scrollToPublikimet, { scrollToAnetaresia, scrollToCertifikimet, scrollToEdukimi, scrollToEksperiencat, scrollToHonorsAndAwards, scrollToMbikeqyresITemave, scrollToProjektet, scrollToSpecializimet, scrollToTop } from "../../app/styling-functions/Scrolling";
import EdukimiDashboard from "../edukimet/dashboard/EdukimiDashboard";
import EksperiencaDashboard from "../eksperiencat/dashboard/EksperiencaDashboard";
import HonorandAwardDashboard from "../honorsandawards/dashboard/HonorandAwardDashboard";
import MbikeqyresiTemaveDashboard from "../mbikeqyresittemave/dashboard/MbikeqyresiTemaveDashboard";
import ProjektetDashboard from "../projektet/dashboard/ProjektetDashboard";
import PublikimetDashboard from "../Publikimet/dashboard/PublikimetDashboard";
import SpecializimiDashboard from "../specializimet/dashboard/SpecializimiDashboard";

export default function Home(){
    return (
        <>


            <Segment className={'navbar'} style={{marginTop: '-1em'}}>
            <NavBar />
            </Segment>
            
            
            <ModalContainer />
                
            <Grid centered>
           
                <Grid.Column width='12'>
                <Segment style={{ marginTop: 60 }}>
                    <Grid>
                    <Grid.Column width='5'>
                        <ImageExampleCircular />
                    </Grid.Column>
                    <Grid.Column width='11'>
                        <Grid columns={2}>
                        <Grid.Column width='8'>
                            <Header style={{ marginTop: 50 }}>Name Surname</Header>
                            <Header style={{ marginTop: 20 }}>Name Surname</Header>
                            <Header style={{ marginTop: 20 }}>Name Surname</Header>
                        </Grid.Column>
                        <Grid.Column width='8'>
                            <Header style={{ marginTop: 50 }}>Name Surname</Header>
                            <Header style={{ marginTop: 20 }}>Name Surname</Header>
                        </Grid.Column>
                        </Grid>
                        <Divider vertical />
                    </Grid.Column>
                    </Grid>
                </Segment>
                </Grid.Column>
            </Grid>
            <Grid width='16' stretched centered>
                <Card.Group itemsPerRow={9}>
                <Card fluid color='blue' header='Eksperiencat' onClick={scrollToEksperiencat} as={NavLink} to='/eksperiencat'/>
                <Card fluid color='blue' header='Edukimi' onClick={scrollToEdukimi} as={NavLink} to='/edukimi'/>
                <Card fluid color='blue' header='Specializimet' onClick={scrollToSpecializimet} as={NavLink} to='/specializimet'/>
                <Card fluid color='blue' header='Certifikimet' onClick={scrollToCertifikimet} as={NavLink} to='/certifikimet'/>
                <Card fluid color='blue' header='Mbikeqyres i temave' onClick={scrollToMbikeqyresITemave} as={NavLink} to='/mbikeqyresitemave'/>
                <Card fluid color='blue' header='Publikimet' onClick={scrollToPublikimet} as={NavLink} to='/publikimet' />
                <Card fluid color='blue' header='Projektet' onClick={scrollToProjektet} as={NavLink} to='/projektet' />
                <Card fluid color='blue' header='Anetaresia' onClick={scrollToAnetaresia} as={NavLink} to='/anetaresia'/>
                <Card fluid color='blue' header='Honors & Awards' onClick={scrollToHonorsAndAwards} as={NavLink} to='/honorsandawards'/>
                </Card.Group>
                
            </Grid>
            <Segment className={'eksperiencat'} basic>
                <EksperiencaDashboard />
            </Segment>
            <Segment className={'edukimi'} basic>
                <EdukimiDashboard />
            </Segment>
            <Segment className={'specializimet'} basic>
                <SpecializimiDashboard />
            </Segment>
            {/* <Segment className={'certifikimet'} basic>
                <CertifikimetDashboard />
            </Segment> */}
            <Segment className={'mbikeqyresitemave'} basic>
                <MbikeqyresiTemaveDashboard />
            </Segment>
            <Segment className={'publikimet'} basic>
                {/* <Container>
                <Route exact path='/publikimet' component={PublikimetDashboard} />
                <Route path='/publikimet/:id' component={PublikimetDetails} />
                <Route key={location.key} path={['/createPublikimi', '/managePublikimi/:id']} component={PublikimetForm} />
                </Container> */}
                <PublikimetDashboard/>
            </Segment>
            <Segment className={'projektet'} basic>
                <ProjektetDashboard />
            </Segment>
            {/* <Segment className={'anetaresia'} basic>
                <AnetaresiaDashboard />
            </Segment>
            <Segment className={'honorsawards'} basic>
                <HonorsAndAwardsDashboard />
            </Segment>  */}
            <Segment className={'honorsandawards'} basic>
                <HonorandAwardDashboard />
            </Segment>
            <Button className='angleUp' icon='angle up' size='massive' onClick={scrollToTop} as={Link} to='' />
            <Footer />
    </>
    )
}
import React from 'react';
import './styles.css';
import { Button, Card, Container, Divider, Grid, Header, Segment } from 'semantic-ui-react';
import { Link, Route, Switch, useLocation } from 'react-router-dom';
import ImageExampleCircular from './Image';
import scrollToPublikimet, { scrollToAnetaresia, scrollToCertifikimet, scrollToEdukimi, scrollToEksperiencat, scrollToHonorsAndAwards, scrollToMbikeqyresITemave, scrollToProjektet, scrollToTop } from '../styling-functions/Scrolling';
import EdukimiDashboard from '../../features/edukimet/dashboard/EdukimiDashboard';
import PublikimetDashboard from '../../features/Publikimet/dashboard/PublikimetDashboard';
import Footer from './Footer';
import EksperiencaDashboard from '../../features/eksperiencat/dashboard/EksperiencaDashboard';
import MbikeqyresiTemaveDashboard from '../../features/mbikeqyresittemave/dashboard/MbikeqyresiTemaveDashboard';
import NavBar from './NavBar';
import ProjektetDashboard from '../../features/projektet/dashboard/ProjektetDashboard';


function App() {

  const location = useLocation();
  return (
    <>
      <Segment className={'navbar'}>
        <NavBar />
      </Segment>
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
        <Card.Group itemsPerRow={8}>
          <Card fluid color='orange' header='Eksperiencat' onClick={scrollToEksperiencat} as={Link} to='/eksperiencat'/>
          <Card fluid color='yellow' header='Edukimi' onClick={scrollToEdukimi} />
          <Card fluid color='green' header='Certifikimet' onClick={scrollToCertifikimet} />
          <Card fluid color='blue' header='Mbikeqyres i temave' onClick={scrollToMbikeqyresITemave} />
          <Card fluid color='red' header='Publikimet' onClick={scrollToPublikimet} as={Link} to='/publikimet' />
          <Card fluid color='pink' header='Projektet' onClick={scrollToProjektet} as={Link} to='/projektet' />
          <Card fluid color='pink' header='Anetaresia' onClick={scrollToAnetaresia} />
          <Card fluid color='pink' header='Honors & Awards' onClick={scrollToHonorsAndAwards} />
        </Card.Group>
      </Grid>
      <Segment className={'eksperiencat'} basic>
        <EksperiencaDashboard />
      </Segment>
      <Segment className={'edukimi'} basic>
        <EdukimiDashboard />
      </Segment>
      {/* <Segment className={'certifikimet'} basic>
        <CertifikimetDashboard />
      </Segment> */}
      <Segment className={'mbikeqyrestemave'} basic>
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
      <Button className='angleUp' icon='angle up' size='massive' onClick={scrollToTop} as={Link} to='' />
      <Footer />
    </>
  );
}

export default App;

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
import Scrolling from '../styling-functions/Scrolling';
import Home from '../../features/Home/Home';
import EksperiencaDetails from '../../features/eksperiencat/details/EksperiencaDetails';
import EksperiencaForm from '../../features/eksperiencat/form/EksperiencaForm';
import EksperiencaList from '../../features/eksperiencat/dashboard/EksperiencaList';
import { observer } from 'mobx-react-lite';
import EksperiencaListItem from '../../features/eksperiencat/dashboard/EksperiencaListItem';
import PublikimetDetails from '../../features/Publikimet/details/PublikimetDetails';
import PublikimetListItem from '../../features/Publikimet/dashboard/PublikimetListItem';
import MbikeqyresiTemaveListItem from '../../features/mbikeqyresittemave/dashboard/MbikeqyresiTemaveListItem';
import MbikeqyresiTemaveForm from '../../features/mbikeqyresittemave/form/MbikeqyresiTemaveForm';


function App() {

  const location = useLocation();
  return (
    <>
          
            <NavBar />
              <Route exact path='/' component={Home}/>
              <Route exact path='/cv' component={EksperiencaDashboard}/>
              <Route exact path='/mbikeqyresitemave' component={Home}/>
              <Route exact path='/eksperiencat' component={Home}/>
              <Route exact path='/publikimet' component={Home}/>
              <Route exact path='/specializimet' component={Home}/>
              <Route exact path='/edukimi' component={Home}/>
              <Route exact path='/certifikimet' component={Home}/>
              <Route exact path='/honorsandawards' component={Home}/>
              <Route exact path='/projektet' component={Home}/>
              <Route exact path='/anetaresia' component={Home}/> 
    </>
  );
}

export default observer(App);

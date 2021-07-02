import React from 'react';
import './styles.css';
import { Link, Route, Switch, useLocation } from 'react-router-dom';
import EksperiencaDashboard from '../../features/eksperiencat/dashboard/EksperiencaDashboard';
import NavBar from './NavBar';
import Home from '../../features/Home/Home';
import { observer } from 'mobx-react-lite';

function App() {

  const location = useLocation();
  return (
    <>
      <NavBar />
      <Route exact path='/' component={Home} />
      <Route exact path='/cv' component={EksperiencaDashboard} />
      <Route exact path='/mbikeqyresitemave' component={Home} />
      <Route exact path='/eksperiencat' component={Home} />
      <Route exact path='/publikimet' component={Home} />
      <Route exact path='/specializimet' component={Home} />
      <Route exact path='/edukimi' component={Home} />
      <Route exact path='/certifikimet' component={Home} />
      <Route exact path='/honorsandawards' component={Home} />
      <Route exact path='/projektet' component={Home} />
      <Route exact path='/anetaresia' component={Home} />
      <Route exact path='/gjuhet' component={Home} />
    </>
  );
}

export default observer(App);

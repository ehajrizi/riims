import React, { useEffect } from 'react';
import './styles.css';
import { Link, Route, Switch, useLocation } from 'react-router-dom';
import EksperiencaDashboard from '../../features/eksperiencat/dashboard/EksperiencaDashboard';
import Home from '../../features/Home/Home';
import { observer } from 'mobx-react-lite';
import ModalContainer from '../api/common/modals/ModalContainer';
import LogReg from '../../features/LogReg/LogReg';
import { useStore } from '../stores/store';
import AdminDashboard from '../../features/admin/AdminDashboard';
import Main from '../../features/admin/components/Main';
import Main2 from '../../features/admin/components/Main2';


function App() {

  const location = useLocation();
  const {commonStore, userStore} = useStore();

  useEffect(() => {
    if(commonStore.token) {
      userStore.getUser().finally(() => commonStore.setAppLoaded());
    } else {
      commonStore.setAppLoaded();
    }
  }, [commonStore, userStore])

  // const { userStore: { user, isLoggedIn } } = useStore();
  return (
    <>
      <ModalContainer/>
      <Switch>
      <Route exact path='/' component={LogReg} />
      <Route exact path='/adminDashboard' component={AdminDashboard} />
      {/* <Route exact path='/cv' component={EksperiencaDashboard} /> */}
      <Route exact path='/home' component={Home} />
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
      <Route path='/adminDashboard/statistics' component={Main}/>
      <Route path='/adminDashboard/users' component={Main2}/>
      </Switch>
    </>
  );
}

export default observer(App);

import React, { useEffect } from 'react';
import './styles.css';
import { Route, Switch, useLocation } from 'react-router-dom';
import Home from '../../features/Home/Home';
import { observer } from 'mobx-react-lite';
import ModalContainer from '../api/common/modals/ModalContainer';
import LogReg from '../../features/LogReg/LogReg';
import { useStore } from '../stores/store';
import AdminDashboard from '../../features/admin/AdminDashboard';
import EkspoTable from '../../features/admin/EkspoTable';
import ProfileDashboard from '../../features/profile/ProfileDashboard';


function App() {

  const location = useLocation();
  const { commonStore, userStore } = useStore();
  const { user } = userStore;

  useEffect(() => {
    if (commonStore.token) {
      userStore.getUser().finally(() => commonStore.setAppLoaded());
    } else {
      commonStore.setAppLoaded();
    }
  }, [commonStore, userStore])

  return (
    <>
      <ModalContainer />
      <Switch>
        {userStore.isLoggedIn ? (
          <Route exact path='/' component={Home} />
        ) : (<Route exact path='/' component={LogReg} />)}
        <Route exact path='/adminDashboard' component={AdminDashboard} />
        <Route exact path='/home' component={Home} />
        <Route exact path='/hello' component={EkspoTable} />
        <Route exact path='/mbikeqyresitemave' component={Home} />
        <Route exact path='/eksperiencat' component={Home} />
        <Route exact path='/publikimet' component={Home} />
        <Route exact path='/specializimet' component={Home} />
        <Route exact path='/edukimet' component={Home} />
        <Route exact path='/certifikimet' component={Home} />
        <Route exact path='/honorsandawards' component={Home} />
        <Route exact path='/projektet' component={Home} />
        <Route exact path='/anetaresia' component={Home} />
        <Route exact path='/gjuhet' component={Home} />
        <Route exact path={`/profiles/${user?.id}`} component={ProfileDashboard} />
      </Switch>
    </>
  );
}

export default observer(App);

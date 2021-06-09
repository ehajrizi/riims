import React from 'react';
import { Container} from 'semantic-ui-react';
import NavBar from './NavBar';
import EksperiencaDashboard from '../../features/eksperiencat/dashboard/EksperiencaDashboard';
import EdukimiDashboard from '../../features/edukimet/dashboard/EdukimiDashboard';
import SpecializimiDashboard from '../../features/specializimet/dashboard/SpecializimiDashboard';
import PublikimetDashboard from '../../features/publikimet/dashboard/PublikimetDashboard';
import ProfiliDashboard from '../../features/profili/dashboard/ProfiliDashboard';
import MbikeqyresiTemaveDashboard from '../../features/mbikeqyresittemave/dashboard/MbikeqyresiTemaveDashboard';
import { useLocation } from 'react-router';
import { Route } from 'react-router-dom';
import EksperiencaDetails from '../../features/eksperiencat/details/EksperiencaDetails';
import EksperiencaForm from '../../features/eksperiencat/form/EksperiencaForm';
import { observer } from 'mobx-react-lite';


function App() {

  const location = useLocation();
  return (
    <>
      
            <>
            <NavBar/>
              <Container style={{marginTop:'7em'}}>
                <Route exact path='/eksperiencat' component={EksperiencaDashboard}/>
                <Route path='/eksperiencat/:id' component={EksperiencaDetails}/>
                <Route key={location.key} path={['/createEksperienca', '/manage/:id']} component={EksperiencaForm}/>
              </Container>
            </>

       
   </>
  );
}


export default observer(App);

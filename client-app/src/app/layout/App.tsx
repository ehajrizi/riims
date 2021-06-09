import React from 'react';
import { Container} from 'semantic-ui-react';
import NavBar from './NavBar';
import EksperiencaDashboard from '../../features/eksperiencat/dashboard/EksperiencaDashboard';
import EdukimiDashboard from '../../features/edukimet/dashboard/EdukimiDashboard';
import SpecializimiDashboard from '../../features/specializimet/dashboard/SpecializimiDashboard';
import PublikimetDashboard from '../../features/publikimet/dashboard/PublikimetDashboard';
import ProfiliDashboard from '../../features/profili/dashboard/ProfiliDashboard';
import MbikeqyresiTemaveDashboard from '../../features/mbikeqyresittemave/dashboard/MbikeqyresiTemaveDashboard';
import EksperiencaDetails from '../../features/eksperiencat/details/EksperiencaDetails';
import EksperiencaForm from '../../features/eksperiencat/form/EksperiencaForm';
import EdukimiDetails from '../../features/edukimet/details/EdukimiDetails';
import EdukimiForm from '../../features/edukimet/form/EdukimiForm';
import PublikimetForm from '../../features/publikimet/form/PublikimetForm';
import PublikimetDetails from '../../features/publikimet/details/PublikimetDetails';
import SpecializimiDetails from '../../features/specializimet/details/SpecializimiDetails';
import SpecializimiForm from '../../features/specializimet/form/SpecializimiForm';
import MbikeqyresiTemaveDetails from '../../features/mbikeqyresittemave/details/MbikeqyresiTemaveDetails';
import MbikeqyresiTemaveForm from '../../features/mbikeqyresittemave/form/MbikeqyresiTemaveForm';
import ProfiliDetails from '../../features/profili/details/ProfiliDetails';
import ProfiliForm from '../../features/profili/form/ProfiliForm';

import { observer } from 'mobx-react-lite';
import { Route, useLocation } from 'react-router-dom';




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
              <Container>
                {/* Edukimi */}
                <Route exact path='/edukimet' component={EdukimiDashboard}/>
                <Route path='/edukimet/:id' component={EdukimiDetails}/>
                <Route key={location.key} path={['/createEdukimi', '/manageEdukimi/:id']} component={EdukimiForm}/>
                </Container>
              <Container>
                {/* Publikimet */}
                <Route exact path='/publikimet' component={PublikimetDashboard}/>
                <Route path='/publikimet/:id' component={PublikimetDetails}/>
                <Route key={location.key} path={['/createPublikimi', '/managePublikimi/:id']} component={PublikimetForm}/>
              </Container>
              <Container>
                {/* Specializimi */}
                <Route exact path='/specializimet' component={SpecializimiDashboard}/>
                <Route path='/specializimet/:id' component={SpecializimiDetails}/>
                <Route key={location.key} path={['/createSpecializimi', '/manageSpecializimi/:id']} component={SpecializimiForm}/>
              </Container>
              <Container>
                {/* Mbikeqyresi */}
                <Route exact path='/mbikeqyresitemave' component={MbikeqyresiTemaveDashboard}/>
                <Route path='/mbikeqyresitemave/:id' component={MbikeqyresiTemaveDetails}/>
                <Route key={location.key} path={['/createMbikeqyresiTemave','/managembikeqyresitemave/:id']} component={MbikeqyresiTemaveForm}/>
              </Container>

              <Container>
                {/* Profili */}
                <Route exact path='/profilet' component={ProfiliDashboard}/>
                <Route path='/profilet/:id' component={ProfiliDetails}/>
                <Route key={location.key} path={['/createProfili','/manageProfili/:id']} component={ProfiliForm}/>
              </Container>
                
            </>

       
   </>
  );
}


export default observer(App);

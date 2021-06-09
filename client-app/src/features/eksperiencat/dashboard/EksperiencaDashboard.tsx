import { observer } from 'mobx-react-lite';
import React, { useEffect } from 'react';
import { Grid} from 'semantic-ui-react';
import LoadingComponent from '../../../app/layout/LoadingComponents';
import { useStore } from '../../../app/stores/store';
import EksperiencaList from './EksperiencaList';



export default observer (function EksperiencaDashboard(){

    const {eksperiencaStore} = useStore();
   //i qitem knej qe mos me na dal shenja e loading edhe
   //te home pa nevoje
   const {loadEksperiencat,eksperiencaRegistry} = eksperiencaStore;

  useEffect(() =>{
    if(eksperiencaRegistry.size <= 1) loadEksperiencat();
    //nese 0 i loadim se kur te inicializojm 0 a perndryshe e din
    //appi qfar aplik ka  se  kur e bojm edit mos me na met veq qaj aktivitet
  }, [eksperiencaRegistry.size, loadEksperiencat])

  if(eksperiencaStore.loadingInitial) return <LoadingComponent content='Loading app'/>

    return(
        <Grid>
            <Grid.Column width='10'>
                <EksperiencaList />
            </Grid.Column>
        </Grid>
    )
})


import { observer } from 'mobx-react-lite';
import React, { useEffect } from 'react';
import { Grid} from 'semantic-ui-react';
import LoadingComponent from '../../../app/layout/LoadingComponents';
import { useStore } from '../../../app/stores/store';
import EksperiencaList from './EksperiencaList';



export default observer (function EksperiencaDashboard(){

    const {eksperiencaStore} = useStore();
   const {loadEksperiencat,eksperiencaRegistry} = eksperiencaStore;

  useEffect(() =>{
    if(eksperiencaRegistry.size <= 1) loadEksperiencat();
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


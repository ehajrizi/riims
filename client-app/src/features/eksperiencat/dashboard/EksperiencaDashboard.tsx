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
        <Grid centered style={{marginTop: 50}}>
            <Grid.Column width='8' className={'grid-container'}>
                <EksperiencaList />
            </Grid.Column>
            <Grid.Column width='1'/>
            <Grid.Column width='4'/>
        </Grid>
    )
})


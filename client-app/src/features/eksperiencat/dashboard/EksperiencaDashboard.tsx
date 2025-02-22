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

    return(
        <Grid centered style={{marginTop: 50}}>
            <Grid.Column width='16' className={'grid-container'}>
                <EksperiencaList />
            </Grid.Column>
        </Grid>
    )
})


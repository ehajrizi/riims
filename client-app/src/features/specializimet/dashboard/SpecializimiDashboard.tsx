import { observer } from 'mobx-react-lite';
import React, { useEffect } from 'react';
import { Grid } from 'semantic-ui-react';
import LoadingComponent from '../../../app/layout/LoadingComponents';
import { useStore } from '../../../app/stores/store';
import SpecializimiList from './SpecializimiList';

export default observer( function SpecializimiDashboard()
{   const {specializimiStore} = useStore();
    const {loadSpecializimet, specializimiRegistry} = specializimiStore;
 
    useEffect(() => {
       if (specializimiRegistry.size <= 1) loadSpecializimet();
    }, [specializimiRegistry.size, loadSpecializimet])

    if (specializimiStore.loadingInitial) return <LoadingComponent content='Loading app'/>
    return(
        <Grid>
           <Grid.Column width='10'>
               <SpecializimiList/>
           </Grid.Column>
        </Grid>
    )
})
import { observer } from 'mobx-react-lite';
import React, { useEffect } from 'react';
import { Grid} from 'semantic-ui-react';
import LoadingComponent from '../../../app/layout/LoadingComponents';
import { useStore } from '../../../app/stores/store';
import ProfiliList from './ProfiliList';



export default observer (function ProfiliDashboard(){

    const {profiliStore} = useStore();
    const {loadProfilet,profiliRegistry} = profiliStore;

  useEffect(() =>{
    if(profiliRegistry.size <= 1) loadProfilet();

  }, [profiliRegistry.size, loadProfilet])

  if(profiliStore.loadingInitial) return <LoadingComponent content='Loading app'/>

    return(
        <Grid>
            <Grid.Column width='10'>
                <ProfiliList />
            </Grid.Column>
        </Grid>
    )
})

import { observer } from 'mobx-react-lite';
import React, { useEffect } from 'react';
import { Grid } from 'semantic-ui-react';
import LoadingComponent from '../../../app/layout/LoadingComponents';
import { useStore } from '../../../app/stores/store';


export default observer (function HonorandAwardDashboard() {

    const {honorandawardStore} = useStore();
    const {loadHonorsandAwards, honorandawardRegistry } = honorandawardStore;

    useEffect(() =>{
    if(honorandawardRegistry.size <=1 ) loadHonorsandAwards();
  }, [honorandawardRegistry.size, honorandawardStore])
    
if(honorandawardStore.loadingInitial) return <LoadingComponent content='Loading Honors & Awards'/>
    return (
        <Grid>
            <Grid.Column width='10'>
                
            </Grid.Column>
        </Grid>
    )
})
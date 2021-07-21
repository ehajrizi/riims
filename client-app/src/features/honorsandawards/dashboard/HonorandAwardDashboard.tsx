import { observer } from 'mobx-react-lite';
import React, { useEffect } from 'react';
import { Grid } from 'semantic-ui-react';
import LoadingComponent from '../../../app/layout/LoadingComponents';
import { useStore } from '../../../app/stores/store';
import HonorsandAwardsList from '../details/HonorsandAwardsList';


export default observer (function HonorandAwardDashboard() {

    const {honorandawardStore} = useStore();
    const {loadHonorsandAwards, honorandawardRegistry } = honorandawardStore;

    useEffect(() =>{
    if(honorandawardRegistry.size <=1 ) loadHonorsandAwards();
  }, [honorandawardRegistry.size, honorandawardStore])

    return (
        <Grid centered style={{ marginTop: 50 }}>
            <Grid.Column width='16' className={'grid-container'}>
                <HonorsandAwardsList/>
            </Grid.Column>
        </Grid>
    )
})
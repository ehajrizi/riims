import { observer } from 'mobx-react-lite';
import { useEffect } from 'react';
import { Grid } from 'semantic-ui-react';
import { useStore } from '../../../app/stores/store';
import LoadingComponent from '../../../app/layout/LoadingComponents';
import DonatoretList from './DonatoretList';

export default observer(function DonatorettDashboard(){


    const {donatoriStore} = useStore();
    const {loadDonatoret, donatoriRegistry} = donatoriStore;
 
   useEffect(() =>{
     if(donatoriRegistry.size <= 1) loadDonatoret();
   }, [donatoriRegistry.size, loadDonatoret])
 
   if(donatoriStore.loadingInitial) return <LoadingComponent content='Loading app'/>

    return (
        <Grid centered style={{ marginTop: 50 }}>
            <Grid.Column width='8' className={'grid-container'}>
                <DonatoretList/>
            </Grid.Column>
            <Grid.Column width='1' />
            <Grid.Column width='4' />
        </Grid>
    )
})
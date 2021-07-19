import { observer } from 'mobx-react-lite';
import { useEffect } from 'react';
import { Grid } from 'semantic-ui-react';
import { useStore } from '../../../app/stores/store';
import LoadingComponent from '../../../app/layout/LoadingComponents';
import PjesemarresitPublikimetList from './PjesemarresitPublikimetList';

export default observer(function PjesemarresitPublikimetDashboard(){


    const {pjesemarresiPublikimiStore} = useStore();
    const {loadPjesemarresitPublikimet, pjesemarresiPublikimiRegistry} = pjesemarresiPublikimiStore;
 
   useEffect(() =>{
     if(pjesemarresiPublikimiRegistry.size <= 1) loadPjesemarresitPublikimet();
   }, [pjesemarresiPublikimiRegistry.size, loadPjesemarresitPublikimet])
 
   //if(pjesemarresiPublikimiStore.loadingInitial) return <LoadingComponent content='Loading app'/>

    return (
        <Grid centered style={{ marginTop: 50 }}>
            <Grid.Column width='16' className={'grid-container'}>
                <PjesemarresitPublikimetList/>
           </Grid.Column>
        </Grid>
    )
})
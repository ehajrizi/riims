import { observer } from 'mobx-react-lite';
import React, { useEffect } from 'react';
import { Grid} from 'semantic-ui-react';
import LoadingComponent from '../../../app/layout/LoadingComponents';
import { useStore } from '../../../app/stores/store';
import PublikimiList from './PublikimetList';



export default observer(function PublikimetDashboard(){

    const {publikimiStore} = useStore();
   //i qitem knej qe mos me na dal shenja e loading edhe
   //te home pa nevoje
   const {loadPublikimet,publikimiRegistry} = publikimiStore;

  useEffect(() =>{
    if(publikimiRegistry.size <= 1) loadPublikimet();
    //nese 0 i loadim se kur te inicializojm 0 a perndryshe e din
    //appi qfar aplik ka  se  kur e bojm edit mos me na met veq qaj aktivitet
  }, [publikimiRegistry.size, loadPublikimet])

  if(publikimiStore.loadingInitial) return <LoadingComponent content='Loading app'/>

    return(
        <Grid>
            <Grid.Column width='10'>
                <PublikimiList />
            </Grid.Column>
        </Grid>
    )
})

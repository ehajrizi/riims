import { observer } from 'mobx-react-lite';
import React, { useEffect } from 'react';
import { Grid} from 'semantic-ui-react';
import LoadingComponent from '../../../app/layout/LoadingComponents';
import { useStore } from '../../../app/stores/store';
import PublikimetList from './PublikimetList';



export default observer(function PublikimetDashboard(){

    const {publikimiStore} = useStore();
   const {loadPublikimet,publikimiRegistry} = publikimiStore;

  useEffect(() =>{
    if(publikimiRegistry.size <= 1) loadPublikimet();
  }, [publikimiRegistry.size, loadPublikimet])

  if(publikimiStore.loadingInitial) return <LoadingComponent content='Loading app'/>

    return(
        <Grid>
            <Grid.Column width='10'>
                <PublikimetList/>
            </Grid.Column>
        </Grid>
    )
})

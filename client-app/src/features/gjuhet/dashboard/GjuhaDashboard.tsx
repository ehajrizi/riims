
import { observer } from 'mobx-react-lite';
import React, { useEffect } from 'react';
import { Grid } from 'semantic-ui-react';
import LoadingComponent from '../../../app/layout/LoadingComponents';
import { useStore } from '../../../app/stores/store';
import GjuhaList from '../details/GjuhaList';

export default observer (function GjuhaDashboard(){

    const {gjuhaStore} = useStore();
    const {loadGjuhet,gjuhaRegistry} = gjuhaStore;

  useEffect(() =>{
    if(gjuhaRegistry.size <= 1) loadGjuhet();
  }, [gjuhaRegistry.size, loadGjuhet])

  if(gjuhaStore.loadingInitial) return <LoadingComponent content='Loading app'/>

    return(
      <Grid centered style={{ marginTop: 50 }}>
      <Grid.Column width='16' className={'grid-container'}>
          <GjuhaList/>
      </Grid.Column>
  </Grid>
    )
})
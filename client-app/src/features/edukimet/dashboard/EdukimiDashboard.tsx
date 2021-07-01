
import { observer } from 'mobx-react-lite';
import React, { useEffect } from 'react';
import { Grid } from 'semantic-ui-react';
import LoadingComponent from '../../../app/layout/LoadingComponents';
import { useStore } from '../../../app/stores/store';
import EdukimiList from '../details/EdukimiList';

export default observer (function EdukimiDashboard(){

    const {edukimiStore} = useStore();
    const {loadEdukimet,edukimiRegistry} = edukimiStore;

  useEffect(() =>{
    if(edukimiRegistry.size <= 1) loadEdukimet();
  }, [edukimiRegistry.size, loadEdukimet])

  if(edukimiStore.loadingInitial) return <LoadingComponent content='Loading app'/>

    return(
      <Grid centered style={{ marginTop: 50 }}>
      <Grid.Column width='8' className={'grid-container'}>
          <EdukimiList/>
      </Grid.Column>
      <Grid.Column width='1' />
      <Grid.Column width='4' />
  </Grid>
    )
})
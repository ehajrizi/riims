import { observer } from 'mobx-react-lite';
import React, { useEffect } from 'react';
import { Grid } from 'semantic-ui-react';
import LoadingComponent from '../../../app/layout/LoadingComponents';
import { useStore } from '../../../app/stores/store';
import AnetaresiaList from '../details/AnetaresiaList';

export default observer( function AnetaresiaDashboard()
{   const {anetaresiaStore} = useStore();
    const {loadAnetaresite, anetaresiaRegistry} = anetaresiaStore;
 
    useEffect(() => {
       if (anetaresiaRegistry.size <= 1) loadAnetaresite();
    }, [anetaresiaRegistry.size, loadAnetaresite])

    if (anetaresiaStore.loadingInitial) return <LoadingComponent content='Loading app'/>
    return(
        <Grid centered style={{ marginTop: 50 }}>
            <Grid.Column width='8' className={'grid-container'}>
                <AnetaresiaList/>
            </Grid.Column>
            <Grid.Column width='1' />
            <Grid.Column width='4' />
        </Grid>
    )
})
import { observer } from 'mobx-react-lite';
import React, { useEffect } from 'react';
import { Grid } from 'semantic-ui-react';
import LoadingComponent from '../../../app/layout/LoadingComponents';
import { useStore } from '../../../app/stores/store';
import MbikeqyresiTemaveList from './MbikeqyresiTemaveList';


export default observer (function MbikeqyresiTemaveDashboard() {

    const { mbikeqyresitemaveStore } = useStore();
    const {loadMbikeqyresittemave, mbikeqyresitemaveRegistry } = mbikeqyresitemaveStore;

    useEffect(() =>{
    if(mbikeqyresitemaveRegistry.size <=1 ) loadMbikeqyresittemave();
  }, [mbikeqyresitemaveRegistry.size, mbikeqyresitemaveStore])
    
if(mbikeqyresitemaveStore.loadingInitial) return <LoadingComponent content='Loading Mbikeqyresit e Temave'/>
    return (
        <Grid>
            <Grid.Column width='10'>
                <MbikeqyresiTemaveList/>
            </Grid.Column>
        </Grid>
    )
})
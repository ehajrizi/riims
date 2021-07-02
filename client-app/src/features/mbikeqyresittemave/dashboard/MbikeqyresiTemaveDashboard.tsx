import { observer } from 'mobx-react-lite';
import React, { useEffect } from 'react';
import { Grid } from 'semantic-ui-react';
import LoadingComponent from '../../../app/layout/LoadingComponents';
import { useStore } from '../../../app/stores/store';
import MbikeqyresiTemaveList from '../details/MbikeqyresitTemaveList';


export default observer (function MbikeqyresiTemaveDashboard() {

    const { mbikeqyresitemaveStore } = useStore();
    const {loadMbikeqyresittemave, mbikeqyresitemaveRegistry } = mbikeqyresitemaveStore;

    useEffect(() =>{
    if(mbikeqyresitemaveRegistry.size <=1 ) loadMbikeqyresittemave();
  }, [mbikeqyresitemaveRegistry.size, mbikeqyresitemaveStore])
    
if(mbikeqyresitemaveStore.loadingInitial) return <LoadingComponent content='Loading Mbikeqyresit e Temave'/>
    return (
        <Grid centered style={{ marginTop: 50 }}>
            <Grid.Column width='16' className={'grid-container'}>
                <MbikeqyresiTemaveList/>
            </Grid.Column>
        </Grid>
    )
})
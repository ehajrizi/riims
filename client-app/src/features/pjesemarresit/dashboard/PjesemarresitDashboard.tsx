import { observer } from 'mobx-react-lite';
import { useEffect } from 'react';
import { Grid } from 'semantic-ui-react';
import { useStore } from '../../../app/stores/store';
import LoadingComponent from '../../../app/layout/LoadingComponents';
import PjesemarresitList from './PjesemarresitList';

export default observer(function PjesemarresitDashboard(){


    const {pjesemarresiStore} = useStore();
    const {loadPjesemarresit, pjesemarresiRegistry} = pjesemarresiStore;
 
   useEffect(() =>{
     if(pjesemarresiRegistry.size <= 1) loadPjesemarresit();
   }, [pjesemarresiRegistry.size, loadPjesemarresit])
 
    return (
        <Grid centered style={{ marginTop: 50 }}>
            <Grid.Column width='16' className={'grid-container'}>
                <PjesemarresitList/>
           </Grid.Column>
        </Grid>
    )
})
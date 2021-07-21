import { observer } from 'mobx-react-lite';
import { useEffect } from 'react';
import { Grid } from 'semantic-ui-react';
import { useStore } from '../../../app/stores/store';
import LoadingComponent from '../../../app/layout/LoadingComponents';
import ProjektetList from './ProjektetList';

export default observer(function ProjektetDashboard() {


    const { projektiStore } = useStore();
    const { loadProjektet, projektiRegistry } = projektiStore;

    useEffect(() => {
        if (projektiRegistry.size <= 1) loadProjektet();
    }, [projektiRegistry.size, loadProjektet])

    return (
        <Grid centered style={{ marginTop: 50 }}>
            <Grid.Column width='16' className={'grid-container'}>
                <ProjektetList/>
            </Grid.Column>
        </Grid>
    )
})
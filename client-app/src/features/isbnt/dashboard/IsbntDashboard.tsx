import { observer } from 'mobx-react-lite';
import { useEffect } from 'react';
import { Grid } from 'semantic-ui-react';
import { useStore } from '../../../app/stores/store';
import LoadingComponent from '../../../app/layout/LoadingComponents';
import IsbntList from './IsbntList';

export default observer(function IsbntDashboard() {


    const { isbnStore } = useStore();
    const { loadIsbnt, isbnRegistry } = isbnStore;

    useEffect(() => {
        if (isbnRegistry.size <= 1) loadIsbnt();
    }, [isbnRegistry.size, loadIsbnt])

    return (
        <Grid centered style={{ marginTop: 50 }}>
            <Grid.Column width='16' className={'grid-container'}>
                <IsbntList/>
            </Grid.Column>
        </Grid>
    )
})
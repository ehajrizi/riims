import { observer } from 'mobx-react-lite';
import { useLocation } from 'react-router-dom';
import { Divider, Grid, Header } from 'semantic-ui-react';
import { useStore } from '../../../app/stores/store';
import PjesemarresitListItem from './PjesemarresitListItem';


export default observer(function PjesemarresitList() {

    
    const { pjesemarresiStore} = useStore();
    const { pjesemarresiByEmri} = pjesemarresiStore;

    
    return (
        <>
            <Grid>
                <Grid.Column width='9' />
                <Grid.Column width='14'>
                    <Header content='Pjesëmarresit' />
                </Grid.Column>
            </Grid>
            <Divider />
            {pjesemarresiByEmri.map(pjesemarresi => (
                <PjesemarresitListItem key={pjesemarresi.id} pjesemarresi={pjesemarresi} />
            ))}
        </>
    )
})
import { observer } from 'mobx-react-lite';
import { useLocation } from 'react-router-dom';
import { Divider, Grid, Header } from 'semantic-ui-react';
import { useStore } from '../../../app/stores/store';
import PjesemarresitPublikimetListItem from './PjesemarresitPublikimetListItem';


export default observer(function PjesemarresitPublikimetList() {

    
    const { pjesemarresiPublikimiStore} = useStore();
    const {pjesemarresiPublikimiByEmri} = pjesemarresiPublikimiStore;

    
    return (
        <>
            <Grid>
                <Grid.Column width='9'/>
                    <Grid.Column width='14' >
                    <Header content='Pjesemarresit' />
                </Grid.Column>
                
            </Grid>
            <Divider />
            {pjesemarresiPublikimiByEmri.map(pjesemarresiPublikimi => (
                <PjesemarresitPublikimetListItem key={pjesemarresiPublikimi.id}pjesemarresiPublikimi={pjesemarresiPublikimi} />
            ))}
        </>
    )
})
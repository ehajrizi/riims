import { observer } from 'mobx-react-lite';
import { useLocation } from 'react-router-dom';
import { Divider, Grid, Header } from 'semantic-ui-react';
import { useStore } from '../../../app/stores/store';
import DonatoretListItem from '../dashboard/DonatoretListItem';


export default observer(function DonatoretList() {

    const { donatoriStore } = useStore();
    const { DonatoretByEmri } = donatoriStore;

    return (
        <>
            <Grid>
                <Grid.Column width='9'/>
                <Grid.Column width='14' >
                    <Header content='Donatoret' />
                </Grid.Column>
            </Grid>
            <Divider />
            {DonatoretByEmri.map(donatori => (
                <DonatoretListItem key={donatori.id} donatori={donatori} />
            ))}
        </>
    )
})
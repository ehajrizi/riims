import { format } from 'date-fns';
import { observer } from 'mobx-react-lite';
import React from 'react';
import { Divider, Grid, Header } from 'semantic-ui-react';
import { User } from '../../app/models/user';
import { useStore } from '../../app/stores/store';

interface Props {
    user: User;
}

export default observer(function UserDashboard({user}: Props) {

    const { userStore } = useStore();
    const { getUser } = userStore;

    return (
        <Grid>
            <Grid.Column width='10'>
                <Grid columns={1}>
                    <Grid.Column width='9'>
                        <Header style={{ marginTop: 50, fontFamily: 'Arial', fontSize: '1.5em' }} as='h3' >{user.emri} {user.mbiemri}</Header>
                        <Header style={{ marginTop: 20 }} as='h3' >{user.titulliShkencor}</Header>
                        <Header style={{ marginTop: 20 }} as='h3' >{user.phoneNumber}</Header>
                        <Header style={{ marginTop: 20 }} as='h3' >{userStore.UserDatelindja!.toString().substring(0, 10)}</Header>
                    </Grid.Column>
                    <Grid.Column width='7'>
                        <Header style={{ marginTop: 50 }} as='h3' >Adresa</Header>
                        <Header style={{ marginTop: 20 }} as='h3' >Rr. {user.rrugaCurrent}</Header>
                        <Header style={{ marginTop: 20 }} as='h3' >{user.qytetiCurrent}, {user.zipKodiCurrent}</Header>
                        <Header style={{ marginTop: 20 }} as='h3' >{user.shtetiCurrent}</Header>
                    </Grid.Column>
                </Grid>
                <Divider vertical />
            </Grid.Column>
        </Grid>
    )
})

import { observer } from 'mobx-react-lite';
import {Grid, Header, List } from 'semantic-ui-react';
import { User } from '../../../app/models/user';

interface Props {
    user: User;
}

export default observer(function ProfiliCv({user} : Props)
{

    return (
        <>
            <Grid columns={2} relaxed='very'>
                <Grid.Column >
                    <Header as='h2' icon='user circle'>{user.emri!} {user.mbiemri}</Header>
                </Grid.Column>
                <Grid.Column>
                    <List>
                    <List.Item icon='marker' content={user.qytetiCurrent} />
                    <List.Item icon='phone' content={user.phoneNumber} />
                    <List.Item
                        icon='birthday cake icon'
                        content={user.datelindja!.toString().substring(0, 10)}
                    />
                    <List.Item
                        icon='linkify'
                        content={<a>{user.linkedIn}</a>}
                    />
                    </List>
                </Grid.Column>
            </Grid>
        </> 
    )
})
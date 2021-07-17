import { observer } from 'mobx-react-lite';
import React, { SyntheticEvent, useState } from 'react';
import { Link, NavLink, Route, useLocation } from 'react-router-dom';
import { Button, Card, Checkbox, Divider, Grid, Header, Icon } from 'semantic-ui-react';
import { useStore } from '../../../app/stores/store';
import HonorsandAwardsListItem from '../dashboard/HonorsandAwardsListItem';
import HonorsandAwardsForm from '../form/HonorsandAwardsForm';


export default observer(function HonorsandAwardsList() {
    const location = useLocation();

    const { honorandawardStore, modalStore, userStore } = useStore();
    const { honorsandawardsByTitulli } = honorandawardStore;

    return (
        <>
            <Grid>
                <Grid.Column width='14'>
                    <Header content='Honors & Awards' />
                </Grid.Column>
                <Grid.Column width='1' >
                    <Button onClick={() => modalStore.openModal(<HonorsandAwardsForm />)} as={Link} className="btn" ><Icon className='btnIcon' name='plus' size='large' />
                    </Button>
                </Grid.Column>
            </Grid>
            <Divider />
            {honorsandawardsByTitulli.map(honorandaward => (
                <>
                    {honorandaward.useriId === userStore.UserId ? (
                        <HonorsandAwardsListItem key={honorandaward.id} honorandaward={honorandaward} />
                    ) : ('')}
                </>
            ))}
        </>
    )
})

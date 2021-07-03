import { observer } from 'mobx-react-lite';
import React, { SyntheticEvent, useState } from 'react';
import { Link, NavLink, Route, useLocation } from 'react-router-dom';
import { Button, Card, Checkbox, Divider, Grid, Header, Icon } from 'semantic-ui-react';
import { useStore } from '../../../app/stores/store';
import DonatoretListItem from '../dashboard/DonatoretListItem';
import DonatoretForm from '../form/DonatoretForm';


export default observer(function DonatoretList() {
    const location = useLocation();

    const { donatoriStore, modalStore } = useStore();
    const { DonatoretByEmri } = donatoriStore;

    return (
        <>
            <Grid>
                <Grid.Column width='14'>
                    <Header content='Donatoret' />
                </Grid.Column>
                <Grid.Column width='1' >
                    <Button onClick={() => modalStore.openModal(<DonatoretForm />)} as={Link} to='/createDonatori' className="btn" ><Icon className='btnIcon' name='plus' size='large' />
                    </Button>
                </Grid.Column>
            </Grid>
            <Divider />
            {DonatoretByEmri.map(donatori => (
                <DonatoretListItem key={donatori.id} donatori={donatori} />
            ))}
        </>
    )
})
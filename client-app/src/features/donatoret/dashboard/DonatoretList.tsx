import { observer } from 'mobx-react-lite';
import React, { SyntheticEvent, useState } from 'react';
import { Link, NavLink, Route, useLocation } from 'react-router-dom';
import { Button, Card, Checkbox, Divider, Grid, Header, Icon } from 'semantic-ui-react';
import { useStore } from '../../../app/stores/store';
import DonatoretListItem from '../dashboard/DonatoretListItem';
import DonatoretForm from '../form/DonatoretForm';


export default observer(function DonatoretList() {
    const location = useLocation();

    const { donatoriStore, modalStore, userStore } = useStore();
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
                <>
                    {donatori.useriId === userStore.UserId ? (
                        <DonatoretListItem key={donatori.id} donatori={donatori} />
                    ) : ('')}
                </>
            ))}
        </>
    )
})
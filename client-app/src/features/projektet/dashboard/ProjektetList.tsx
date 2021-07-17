import { observer } from 'mobx-react-lite';
import React, { SyntheticEvent, useState } from 'react';
import { Link, NavLink, Route, useLocation } from 'react-router-dom';
import { Button, Card, Checkbox, Divider, Grid, Header, Icon, Item, Segment } from 'semantic-ui-react';
import { useStore } from '../../../app/stores/store';
import ProjektetForm from '../form/ProjektetForm';
import ProjektetListItem from './ProjektetListItem';


export default observer(function ProjektetList() {
    const location = useLocation();

    const { projektiStore, modalStore, userStore } = useStore();
    const { projektetByDate } = projektiStore;

    return (
        <>
            <Grid>
                <Grid.Column width='14'>
                    <Header content='Projektet' />
                </Grid.Column>
                <Grid.Column width='1' >
                    <Button onClick={() => modalStore.openModal(<ProjektetForm />)} className="btn" ><Icon className='btnIcon' name='plus' size='large' />
                    </Button>
                </Grid.Column>
            </Grid>
            <Divider />
            {projektetByDate.map(projekti => (
                <>
                    {projekti.useriId === userStore.UserId ? (
                        <ProjektetListItem key={projekti.id} projekti={projekti} />
                    ) : ('')}
                </>
            ))}
        </>
    )
})

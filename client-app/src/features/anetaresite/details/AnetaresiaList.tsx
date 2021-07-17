import { observer } from 'mobx-react-lite';
import React, { SyntheticEvent, useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, Divider, Grid, Header, Icon, Item, Label, Segment } from 'semantic-ui-react';
import anetaresiaStore from '../../../app/stores/anetaresiaStore';
import { useStore } from '../../../app/stores/store';
import AnetaresiaListItem from '../dashboard/AnetaresiaListItem';
import AnetaresiaForm from '../form/AnetaresiaForm';

export default observer(function AnetaresiaList() {
    const { anetaresiaStore, modalStore, userStore } = useStore();
    const { anetaresiteByEmriInstOrg } = anetaresiaStore;

    return (
        <>
            <Grid>
                <Grid.Column width='14'>
                    <Header content='Anetaresia' />
                </Grid.Column>
                <Grid.Column width='1' >
                    <Button onClick={() => modalStore.openModal(<AnetaresiaForm />)} className="btn" ><Icon className='btnIcon' name='plus' size='large' />
                    </Button>
                </Grid.Column>
            </Grid>
            <Divider />
            {anetaresiteByEmriInstOrg.map(anetaresia => (
                <>
                    {anetaresia.useriId === userStore.UserId ? (
                        <AnetaresiaListItem key={anetaresia.id} anetaresia={anetaresia} />
                    ) : ('')}
                </>
            ))}
        </>
    )
})
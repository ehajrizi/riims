import { observer } from 'mobx-react-lite';
import React, { SyntheticEvent, useState } from 'react';
import { Link, NavLink, Route, useLocation } from 'react-router-dom';
import { Button, Card, Checkbox, Divider, Grid, Header, Icon } from 'semantic-ui-react';
import { useStore } from '../../../app/stores/store';
import PublikimetListItem from '../dashboard/PublikimetListItem';
import PublikimetForm from '../form/PublikimetForm';


export default observer(function PublikimetList() {
    const location = useLocation();

    const { publikimiStore, modalStore } = useStore();
    const { publikimetByDate } = publikimiStore;

    return (
        <>
            <Grid>
                <Grid.Column width='14'>
                    <Header content='Publikimet' />
                </Grid.Column>
                <Grid.Column width='1' >
                    <Button onClick={() => modalStore.openModal(<PublikimetForm />)} className="btn" ><Icon className='btnIcon' name='plus' size='large' />
                    </Button>
                </Grid.Column>
            </Grid>
            <Divider />
            {publikimetByDate.map(publikimi => (
                <PublikimetListItem key={publikimi.id} publikimi={publikimi} />
            ))}
        </>
    )
})

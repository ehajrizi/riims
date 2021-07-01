import { observer } from 'mobx-react-lite';
import React, { SyntheticEvent, useState } from 'react';
import { Link, NavLink, Route, useLocation } from 'react-router-dom';
import { Button, Card, Checkbox, Divider, Grid, Header, Icon } from 'semantic-ui-react';
import { useStore } from '../../../app/stores/store';
import MbikeqyresitTemaveListItem from '../dashboard/MbikeqyresiTemaveListItem';
import MbikeqyresitTemaveForm from '../form/MbikeqyresiTemaveForm';


export default observer(function MbikeqyresitTemaveList() {
    const location = useLocation();

    const { mbikeqyresitemaveStore, modalStore } = useStore();
    const { mbikeqyresitemaveByStudenti } = mbikeqyresitemaveStore;

    return (
        <>
            <Grid>
                <Grid.Column width='14'>
                    <Header content='Mbikeqyresit e Temave' />
                </Grid.Column>
                <Grid.Column width='1' >
                    <Button onClick={() => modalStore.openModal(<MbikeqyresitTemaveForm />)} className="btn" ><Icon className='btnIcon' name='plus' size='large' />
                    </Button>
                </Grid.Column>
            </Grid>
            <Divider />
            {mbikeqyresitemaveByStudenti.map(mbikeqyresitemave => (
                <MbikeqyresitTemaveListItem key={mbikeqyresitemave.id} mbikeqyresitemave={mbikeqyresitemave} />
            ))}
        </>
    )
})

import { observer } from 'mobx-react-lite';
import React, { SyntheticEvent, useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, Divider, Grid, Header, Icon, Item, Segment } from 'semantic-ui-react';
import { useStore } from '../../../app/stores/store';
import GjuhaListItem from '../dashboard/GjuhaListItem';
import GjuhaForm from '../form/GjuhaForm';


export default observer(function GjuhaList() {

    const { gjuhaStore, modalStore, userStore } = useStore();
    const { gjuhetByGjuha } = gjuhaStore;

    return (
        <>
            <Grid>
                <Grid.Column width='14'>
                    <Header content='Gjuha' />
                </Grid.Column>
                <Grid.Column width='1' >
                    <Button onClick={() => modalStore.openModal(<GjuhaForm />)} style={{ marginLeft: '-2em' }} className="btn" ><Icon className='btnIcon' name='plus' size='large' />
                    </Button>
                </Grid.Column>
            </Grid>
            <Divider />
            {gjuhetByGjuha.map(gjuha => (
                <>
                    {gjuha.useriId === userStore.UserId ? (
                        <GjuhaListItem key={gjuha.id} gjuha={gjuha} />
                    ) : ('')}
                </>
            ))}
        </>
    )
})
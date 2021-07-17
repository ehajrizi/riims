import { observer } from 'mobx-react-lite';
import React, { SyntheticEvent, useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, Divider, Grid, Header, Icon, Item, Segment } from 'semantic-ui-react';
import { useStore } from '../../../app/stores/store';
import EdukimiListItem from '../dashboard/EdukimiListItem';
import EdukimiForm from '../form/EdukimiForm';


export default observer(function EdukimiList() {

    const { edukimiStore, modalStore, userStore } = useStore();
    const { edukimetByDate } = edukimiStore;

    return (
        <>
            <Grid>
                <Grid.Column width='14'>
                    <Header content='Edukimi' />
                </Grid.Column>
                <Grid.Column width='1' >
                    <Button onClick={() => modalStore.openModal(<EdukimiForm />)} className="btn" ><Icon className='btnIcon' name='plus' size='large' />
                    </Button>
                </Grid.Column>
            </Grid>
            <Divider />
            {edukimetByDate.map(edukimi => (
                <>
                    {edukimi.useriId === userStore.UserId ? (
                        // <EdukimiListItem key={edukimi.id} edukimi={edukimi} />
                        console.log(edukimi.useriId +"   --"+ userStore.UserId)
                    ) : ('')}
                </>
            ))}
        </>
    )
})
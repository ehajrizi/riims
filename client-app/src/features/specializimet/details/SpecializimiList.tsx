import { observer } from 'mobx-react-lite';
import React, { SyntheticEvent, useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, Divider, Grid, Header, Icon, Item, Label, Segment } from 'semantic-ui-react';
import { useStore } from '../../../app/stores/store';
import SpecializimiListItem from '../dashboard/SpecializimiListItem';
import SpecializimiForm from '../form/SpecializimiForm';

export default observer(function SpecializimiList() {
    const { specializimiStore, modalStore } = useStore();
    const { specializimetByDate } = specializimiStore;

    return (
        <>
            <Grid>
                <Grid.Column width='14'>
                    <Header content='Specializimet' />
                </Grid.Column>
                <Grid.Column width='1' >
                    <Button onClick={() => modalStore.openModal(<SpecializimiForm />)} as={Link} to='/createSpecializimi' className="btn" ><Icon className='btnIcon' name='plus' size='large' />
                    </Button>
                </Grid.Column>
            </Grid>
            <Divider />
            {specializimetByDate.map(specializimi => (
                <SpecializimiListItem key={specializimi.id} specializimi={specializimi} />
            ))}
        </>
    )
})
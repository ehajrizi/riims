import { observer } from 'mobx-react-lite';
import React, { SyntheticEvent, useState } from 'react';
import { Link, NavLink, Route, useLocation } from 'react-router-dom';
import { Button, Card, Checkbox, Divider, Grid, Header, Icon, Item, Segment } from 'semantic-ui-react';
import { useStore } from '../../../app/stores/store';
import { useModal } from '../../useModal';
import PjesemarresitPublikimetForm from '../form/PjesemarresitPublikimetForm';
import PjesemarresitPublikimetListItem from './PjesemarresitPublikimetListItem';


export default observer(function PjesemarresitPublikimetList() {
    const location = useLocation();

    
    const { pjesemarresiPublikimiStore ,modalStore} = useStore();
    const {pjesemarresiPublikimiByEmri} = pjesemarresiPublikimiStore;

    
    return (
        <>
            <Grid>
                <Grid.Column width='9'>
                    <Header content='Pjesemarresit' />
                </Grid.Column>
                <Grid.Column width='14' >
                {/* <Button onClick={() => modalStore.openModal(<PjesemarresitPublikimetForm />)} className="btn" ><Icon className='btnIcon' name='plus' size='large' />
                    </Button> */}
                </Grid.Column>
            </Grid>
            <Divider />
            {pjesemarresiPublikimiByEmri.map(pjesemarresiPublikimi => (
                <PjesemarresitPublikimetListItem key={pjesemarresiPublikimi.id}pjesemarresiPublikimi={pjesemarresiPublikimi} />
            ))}
        </>
    )
})
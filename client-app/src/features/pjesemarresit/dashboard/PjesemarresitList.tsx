import { observer } from 'mobx-react-lite';
import React, { SyntheticEvent, useState } from 'react';
import { Link, NavLink, Route, useLocation } from 'react-router-dom';
import { Button, Card, Checkbox, Divider, Grid, Header, Icon, Item, Segment } from 'semantic-ui-react';
import { useStore } from '../../../app/stores/store';
import { useModal } from '../../useModal';
import PjesemarresitForm from '../form/PjesemarresitForm';
import PjesemarresitListItem from './PjesemarresitListItem';


export default observer(function PjesemarresitList() {
    const location = useLocation();

    
    const { pjesemarresiStore ,modalStore} = useStore();
    const { deletePjesemarresi, pjesemarresiByEmri} = pjesemarresiStore;

    
    return (
        <>
            <Grid>
                <Grid.Column width='9' />
                <Grid.Column width='14'>
                    <Header content='Pjesëmarresit' />
                </Grid.Column>
            </Grid>
            <Divider />
            {pjesemarresiByEmri.map(pjesemarresi => (
                <PjesemarresitListItem key={pjesemarresi.id} pjesemarresi={pjesemarresi} />
            ))}
        </>
    )
})
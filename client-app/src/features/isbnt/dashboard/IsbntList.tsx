import { observer } from 'mobx-react-lite';
import React from 'react';
import { useLocation } from 'react-router-dom';
import { Button, Divider, Grid, Header, Icon} from 'semantic-ui-react';
import { useStore } from '../../../app/stores/store';

import IsbntListItem from './IsbntListItem';


export default observer(function IsbntList() {
    const location = useLocation();

    const { isbnStore, modalStore } = useStore();
    const { isbntByNumri } = isbnStore;

    return (
        <>
            <Grid><Grid.Column width='9' >
                </Grid.Column>
                <Grid.Column width='14'>
                    <Header content='ISBN/ISSN' />
                </Grid.Column>
                
            </Grid>
            <Divider />
            {isbntByNumri.map(isbn => (
                <IsbntListItem key={isbn.id} isbn={isbn} />
            ))}
        </>
    )
})

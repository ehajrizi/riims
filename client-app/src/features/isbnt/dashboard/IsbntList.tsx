import { observer } from 'mobx-react-lite';
import React from 'react';
import { useLocation } from 'react-router-dom';
import { Button, Divider, Grid, Header, Icon } from 'semantic-ui-react';
import { useStore } from '../../../app/stores/store';
import IsbntForm from '../form/IsbntForm';
import IsbntListItem from './IsbntListItem';


export default observer(function IsbntList() {
    const location = useLocation();

    const { isbnStore, publikimiStore } = useStore();
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
                <>
                    {isbn.publikimId === publikimiStore.publikimiId ? (
                        <IsbntListItem key={isbn.id} isbn={isbn} />
                        // console.log(isbn.publikimId +" ---- "+ publikimiStore.publikimiId)
                    ) : ('')}
                </>
            ))}
        </>
    )
})

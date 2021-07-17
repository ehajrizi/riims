
import React from 'react';
import { observer } from 'mobx-react-lite';
import { Button, Divider, Grid, Header, Icon } from 'semantic-ui-react';
import { useStore } from '../../../app/stores/store';
import EksperiencaForm from '../form/EksperiencaForm';
import EksperiencaListItem from './EksperiencaListItem';

export default observer(function EksperiencaList() {
    const { eksperiencaStore, modalStore, userStore } = useStore();
    const { eksperiencatByDate } = eksperiencaStore;

    return (
        <>
            <Grid>
                <Grid.Column width='14'>
                    <Header content='Eksperiencat' />
                </Grid.Column>
                <Grid.Column>
                    <Button onClick={() => modalStore.openModal(<EksperiencaForm />)} className="btn" >
                        <Icon className='btnIcon' name='plus' size='large' />
                    </Button>
                </Grid.Column>
            </Grid>
            <Divider />
            {eksperiencatByDate.map(eksperienca => (
                <>
                    {eksperienca.useriId === userStore.UserId ? (
                        <EksperiencaListItem key={eksperienca.id} eksperienca={eksperienca} />
                    ) : ('')}
                </>
            ))}
        </>
    )
})


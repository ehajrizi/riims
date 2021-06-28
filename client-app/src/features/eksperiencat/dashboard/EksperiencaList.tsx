
import { observer } from 'mobx-react-lite';
import React, { SyntheticEvent, useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, Checkbox, Divider, Grid, Header, Icon, Item, Segment } from 'semantic-ui-react';
import { useStore } from '../../../app/stores/store';
import { useModal } from '../../useModal';
import EksperiencaForm from '../form/EksperiencaForm';
import EksperiencaListItem from './EksperiencaListItem';

export default observer( function EksperiencaList()
{
    const {isShown, toggle} = useModal();
    const {eksperiencaStore} = useStore();
    const { eksperiencatByDate} = eksperiencaStore;

    return(
        <>
            <Grid>
                <Grid.Column width='14'>
                    <Header content='Eksperiencat'/>
                </Grid.Column>
                <Grid.Column>
                    <Button onClick={toggle} as={Link} to='/create' className="btn" >
                        <Icon className='btnIcon' name='plus' size='large' />
                    </Button>
                    <EksperiencaForm isShown={isShown} hide={toggle} />
                </Grid.Column>
            </Grid>
            <Divider/>
                {eksperiencatByDate.map(eksperienca =>(
                    <EksperiencaListItem key={eksperienca.id} eksperienca={eksperienca}/>
                ))}
        </>
    )
})

 
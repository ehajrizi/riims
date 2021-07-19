import { observer } from 'mobx-react-lite';
import React, { SyntheticEvent, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Button, Card, Checkbox, Divider, Grid, Header, Icon, Item, Segment } from 'semantic-ui-react';
import { Pjesemarresi } from '../../../app/models/pjesemarresi';
import { useStore } from '../../../app/stores/store';
import { useModal } from '../../useModal';


interface Props {
    pjesemarresi: Pjesemarresi;
}

export default observer(function PublikimetListItem({ pjesemarresi }: Props) {
    const location = useLocation();

   
    const { pjesemarresiStore, modalStore } = useStore();
    const { deletePjesemarresi, loading } = pjesemarresiStore;

    const [target, setTarget] = useState('');

    function handlePjesemarresiDelete(e: SyntheticEvent<HTMLButtonElement>, id: string) {
        setTarget(e.currentTarget.name);
        deletePjesemarresi(id);
    }
    return (
        <>
            <Item key={(pjesemarresi.id)}>
                <Card fluid style={{ marginBottom: '8px' }}>
                    <Card.Content>
                        <Grid>
                            <Grid.Column width='12'>
                                <Card.Header><a><h4>{pjesemarresi.emriIPjesemarresit}</h4></a></Card.Header>
                            </Grid.Column>
                            <Grid.Column width='4'>
                                <Grid style={{ marginTop: '-25px' }}>
                                    <Grid.Column width='1'>
                                        <Button name={pjesemarresi.id}
                                            loading={loading && target === pjesemarresi.id}
                                            onClick={(e) => handlePjesemarresiDelete(e, pjesemarresi.id)}
                                            className="btn"
                                            style={{ marginLeft: '4.1em' }}
                                            size='small'>
                                            <Icon className='btnIcon' name='trash' />
                                        </Button>
                                    </Grid.Column>
                                </Grid>
                            </Grid.Column>
                        </Grid>
                        <Card.Description>
                            <span>{pjesemarresi.roli}</span>
                        </Card.Description>
                        
                    </Card.Content>
                </Card>
            </Item>
        </>
    )
})
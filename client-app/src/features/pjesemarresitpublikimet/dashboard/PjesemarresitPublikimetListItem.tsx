import { observer } from 'mobx-react-lite';
import React, { SyntheticEvent, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Button, Card, Checkbox, Divider, Grid, Header, Icon, Item, Segment } from 'semantic-ui-react';
import { PjesemarresiPublikimi } from '../../../app/models/pjesemarresiPublikimi';
import { useStore } from '../../../app/stores/store';
import { useModal } from '../../useModal';


interface Props {
    pjesemarresiPublikimi: PjesemarresiPublikimi;
}

export default observer(function PjesemarresitPublikimetListItem({ pjesemarresiPublikimi }: Props) {
    const location = useLocation();

   
    const { pjesemarresiPublikimiStore} = useStore();
    const { deletePjesemarresiPublikimi, loading } = pjesemarresiPublikimiStore;

    const [target, setTarget] = useState('');

    function handlePjesemarresiPublikimiDelete(e: SyntheticEvent<HTMLButtonElement>, id: string) {
        setTarget(e.currentTarget.name);
        deletePjesemarresiPublikimi(id);
    }
    return (
        <>
            <Item key={(pjesemarresiPublikimi.id)}>
                <Card fluid style={{ marginBottom: '8px' }}>
                    <Card.Content>
                        <Grid>
                            <Grid.Column width='12'>
                                <Card.Header><h4>{pjesemarresiPublikimi.emriIPjesemarresit}</h4></Card.Header>
                            </Grid.Column>
                            <Grid.Column width='4'>
                                <Grid style={{ marginTop: '-25px' }}>
                                    {/* <Grid.Column width='3'>
                                    <Button onClick={()=> modalStore.openModal(<PjesemarresitPublikimetFormEdit pjesemarrespublikim={pjesemarresiPublikimi}/>)}  className="btn" style={{ marginLeft: '3.8em' }} size='small'><Icon className='btnIcon' name='edit' /></Button>
                                       
                                    </Grid.Column> */}
                                    <Grid.Column width='1'>
                                        <Button name={pjesemarresiPublikimi.id}
                                            loading={loading && target === pjesemarresiPublikimi.id}
                                            onClick={(e) => handlePjesemarresiPublikimiDelete(e, pjesemarresiPublikimi.id)}
                                            className="btn"
                                            style={{ marginLeft: '4.1em' }}
                                            size='small'>
                                            <Icon className='btnIcon' name='trash' />
                                        </Button>
                                    </Grid.Column>
                                </Grid>
                            </Grid.Column>
                        </Grid>
                        <Card.Meta>
                            <span>{pjesemarresiPublikimi.roli}</span>
                        </Card.Meta>
                        <Grid>
                            <Grid.Column width="15"><Divider /></Grid.Column>
                            <Grid.Column width="1"><Icon name='eye' style={{ marginLeft: "-20px" }} /></Grid.Column>
                        </Grid>
                    </Card.Content>
                </Card>
            </Item>
        </>
    )
})
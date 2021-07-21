import { format } from 'date-fns';
import { observer } from 'mobx-react-lite';
import React, { SyntheticEvent, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Button, Card, Checkbox, Divider, Grid, Header, Icon, Item, Segment } from 'semantic-ui-react';
import { Gjuha } from '../../../app/models/gjuha';
import modalStore from '../../../app/stores/modalStore';
import { useStore } from '../../../app/stores/store';
import GjuhaFormEdit from '../form/GjuhaFormEdit';


interface Props {
    gjuha: Gjuha;
}

export default observer(function GjuhaListItem({ gjuha }: Props) {
    const location = useLocation();

    const { gjuhaStore, modalStore } = useStore();
    const { deleteGjuha, loading } = gjuhaStore;

    const [target, setTarget] = useState('');

    function handleGjuhaDelete(e: SyntheticEvent<HTMLButtonElement>, id: string) {
        setTarget(e.currentTarget.name);
        deleteGjuha(id);
    }
    const [readMore, setReadMore] = useState(false);
    return (
        <>
            <Item key={(gjuha.id)}>
                <Card fluid style={{ marginBottom: '8px' }}>
                    <Card.Content>
                        <Grid>
                            <Grid.Column width='12'>
                                <Card.Header style={{fontWeight: 'bold'}}>{gjuha.zgjedhGjuha}<br /></Card.Header>
                            </Grid.Column>
                            <Grid.Column width='4'>
                                <Grid style={{ marginTop: '-25px' }}>
                                    <Grid.Column width='3'>
                                        <Button onClick={()=> modalStore.openModal(<GjuhaFormEdit gjuha={gjuha}/>)} className="btn"  size='small'><Icon className='btnIcon' name='edit' /></Button>
                                    </Grid.Column>
                                    <Grid.Column width='1'>
                                        <Button name={gjuha.id}
                                            loading={loading && target === gjuha.id}
                                            onClick={(e) => handleGjuhaDelete(e, gjuha.id)}
                                            className="btn btnIcon"
                                            style={{ marginLeft: '0.4em' }}
                                            size='small'
                                            icon='trash'>
                                            {/* <Icon className='btnIcon' name='trash' /> */}
                                        </Button>
                                    </Grid.Column>
                                </Grid>
                            </Grid.Column>
                        </Grid>
                        <Card.Description>
                            <span style={{fontWeight: 'bold'}}>Ne te folur: </span> {gjuha.folur}
                        </Card.Description>
                        <Card.Description>
                            <span style={{fontWeight: 'bold'}}>Ne te shkruar: </span> {gjuha.shkruar}
                        </Card.Description>
                        <Grid>
                            <Grid.Column width="15"><Divider /></Grid.Column>
                        </Grid>
                    </Card.Content>
                </Card>
            </Item>
        </>
    )
})
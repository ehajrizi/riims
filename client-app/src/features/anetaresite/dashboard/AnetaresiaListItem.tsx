import { format } from 'date-fns';
import { observer } from 'mobx-react-lite';
import React, { SyntheticEvent, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Button, Card, Checkbox, Divider, Grid, Header, Icon, Item, Segment } from 'semantic-ui-react';
import { Anetaresia } from '../../../app/models/anetaresia';
import modalStore from '../../../app/stores/modalStore';
import { useStore } from '../../../app/stores/store';
import AnetaresiaFormEdit from '../form/AnetaresiaFormEdit';


interface Props {
    anetaresia: Anetaresia;
}

export default observer(function AnetaresiaListItem({ anetaresia }: Props) {
    const location = useLocation();

    const { anetaresiaStore, modalStore } = useStore();
    const { deleteAnetaresia, loading } = anetaresiaStore;

    const [target, setTarget] = useState('');

    function handleAnetaresiaDelete(e: SyntheticEvent<HTMLButtonElement>, id: string) {
        setTarget(e.currentTarget.name);
        deleteAnetaresia(id);
    }
    const [readMore, setReadMore] = useState(false);
    const extraContent = <div>
        <Card.Meta>
            <span>{anetaresia.pershkrimi}</span>
        </Card.Meta>
    </div>
    return (
        <>
            <Item key={(anetaresia.id)}>
                <Card fluid style={{ marginBottom: '8px' }}>
                    <Card.Content>
                        <Grid>
                            <Grid.Column width='12'>
                                <Card.Header><a className="read-more-link" onClick={() => { setReadMore(!readMore) }}><h4>{anetaresia.emriInstOrg} </h4><br/></a></Card.Header>
                            </Grid.Column>
                            <Grid.Column width='4'>
                                <Grid style={{ marginTop: '-25px' }}>
                                    <Grid.Column width='3'>
                                        <Button onClick={()=> modalStore.openModal(<AnetaresiaFormEdit anetaresia={anetaresia}/>)} className="btn" style={{ marginLeft: '3.8em' }} size='small'><Icon className='btnIcon' name='edit' /></Button>
                                    </Grid.Column>
                                    <Grid.Column width='1'>
                                        <Button name={anetaresia.id}
                                            loading={loading && target === anetaresia.id}
                                            onClick={(e) => handleAnetaresiaDelete(e, anetaresia.id)}
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
                            <span>{anetaresia.pozita}</span>
                        </Card.Description>
                        <Card.Meta>
                            {readMore && extraContent}
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
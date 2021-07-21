import { format } from 'date-fns';
import { observer } from 'mobx-react-lite';
import React, { SyntheticEvent, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Button, Card, Checkbox, Divider, Grid, Header, Icon, Item, Segment } from 'semantic-ui-react';
import { Projekti } from '../../../app/models/projekti';
import { useStore } from '../../../app/stores/store';
import ProjektetFormEdit from '../form/ProjektetFormEdit';


interface Props {
    projekti: Projekti;
}

export default observer(function PublikimetListItem({ projekti }: Props) {
    const location = useLocation();

    const { projektiStore, modalStore } = useStore();
    const { deleteProjekti, projektetByDate, loading } = projektiStore;

    const [target, setTarget] = useState('');

    function handleProjektiDelete(e: SyntheticEvent<HTMLButtonElement>, id: string) {
        setTarget(e.currentTarget.name);
        deleteProjekti(id);
    }
    const [readMore, setReadMore] = useState(false);
    const extraContent = <div>
    </div>
    return (
        <>
            <Item key={(projekti.id)}>
                <Card fluid style={{ marginBottom: '8px' }}>
                    <Card.Content>
                        <Grid>
                            <Grid.Column width='12'>
                                <Card.Header><a className="read-more-link" onClick={() => { setReadMore(!readMore) }}><h4>{projekti.emriProjektit}</h4></a></Card.Header>
                            </Grid.Column>
                            <Grid.Column width='4'>
                                <Grid style={{ marginTop: '-25px' }}>
                                    <Grid.Column width='3'>
                                        <Button onClick={()=> modalStore.openModal(<ProjektetFormEdit projekti={projekti}/>)}  className="btn" style={{ marginLeft: '3.8em' }} size='small'><Icon className='btnIcon' name='edit' /></Button>
                                    </Grid.Column>
                                    <Grid.Column width='1'>
                                        <Button name={projekti.id}
                                            loading={loading && target === projekti.id}
                                            onClick={(e) => handleProjektiDelete(e, projekti.id)}
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
                            <span>{projekti.institucioni}, {projekti.lokacioni}</span>
                        </Card.Meta>
                        <Card.Description>
                            {format(projekti.dataFillimit!, 'dd MMM yyyy')} -{format(projekti.dataMbarimit!, 'dd MMM yyyy')}  <br />
                            {projekti.buxheti}, ({projekti.emriKlientit}) <br />
                            {projekti.pershkrimi}
                        </Card.Description>
                        <Card.Meta>
                            {readMore && extraContent}
                        </Card.Meta>
                        <Grid>
                            <Grid.Column width="15"><Divider /></Grid.Column>
                            <Grid.Column width="1"></Grid.Column>
                        </Grid>
                    </Card.Content>
                </Card>
            </Item>
        </>
    )
})
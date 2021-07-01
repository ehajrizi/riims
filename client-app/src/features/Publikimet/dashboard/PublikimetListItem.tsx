import { format } from 'date-fns';
import { observer } from 'mobx-react-lite';
import React, { SyntheticEvent, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Button, Card, Checkbox, Divider, Grid, Header, Icon, Item, Segment } from 'semantic-ui-react';
import { Publikimi } from '../../../app/models/publikimi';
import modalStore from '../../../app/stores/modalStore';
import { useStore } from '../../../app/stores/store';
import { useModal } from '../../useModal';
import PublikimetFormEdit from '../form/PublikimetFormEdit';


interface Props {
    publikimi: Publikimi;
}

export default observer(function PublikimetListItem({ publikimi }: Props) {
    const location = useLocation();

    const { publikimiStore, modalStore } = useStore();
    const { deletePublikimi, publikimetByDate, loading } = publikimiStore;

    const [target, setTarget] = useState('');

    function handlePublikimiDelete(e: SyntheticEvent<HTMLButtonElement>, id: string) {
        setTarget(e.currentTarget.name);
        deletePublikimi(id);
    }
    const [readMore, setReadMore] = useState(false);
    const extraContent = <div>
        <Card.Meta>
            <span>{publikimi.referenca}</span>
            <span>{publikimi.linkuPublikimit}</span>
        </Card.Meta>
    </div>
    return (
        <>
            <Item key={(publikimi.id)}>
                <Card fluid style={{ marginBottom: '8px' }}>
                    <Card.Content>
                        <Grid>
                            <Grid.Column width='12'>
                                <Card.Header><a className="read-more-link" onClick={() => { setReadMore(!readMore) }}><h4>{publikimi.titulli}</h4></a></Card.Header>
                            </Grid.Column>
                            <Grid.Column width='4'>
                                <Grid style={{ marginTop: '-25px' }}>
                                    <Grid.Column width='3'>
                                        <Button onClick={()=> modalStore.openModal(<PublikimetFormEdit publikimi={publikimi}/>)} className="btn" style={{ marginLeft: '3.8em' }} size='small'><Icon className='btnIcon' name='edit' /></Button>
                                    </Grid.Column>
                                    <Grid.Column width='1'>
                                        <Button name={publikimi.id}
                                            loading={loading && target === publikimi.id}
                                            onClick={(e) => handlePublikimiDelete(e, publikimi.id)}
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
                            <span>{publikimi.vendi}, {publikimi.emertimiEvent}, {publikimi.volumiFaqeve},</span>
                            <span>{format(publikimi.data!, 'dd MMM yyyy')}</span>
                        </Card.Meta>
                        <Card.Description>
                            {publikimi.statusi}, {publikimi.llojiPublikimit} <br />
                            {publikimi.lenda}, {publikimi.kategoria} <br />
                            {publikimi.departamenti}, {publikimi.institucioni}
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
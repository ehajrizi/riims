import { format } from 'date-fns';
import { observer } from 'mobx-react-lite';
import React, { SyntheticEvent, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Button, Card, Checkbox, Divider, Grid, Header, Icon, Item, Segment } from 'semantic-ui-react';
import { Edukimi } from '../../../app/models/edukimi';
import modalStore from '../../../app/stores/modalStore';
import { useStore } from '../../../app/stores/store';
import { useModal } from '../../useModal';
import EdukimiFormEdit from '../form/EdukimiFormEdit';


interface Props {
    edukimi: Edukimi;
}

export default observer(function EdukimiListItem({ edukimi }: Props) {
    const location = useLocation();

    const { edukimiStore, modalStore } = useStore();
    const { deleteEdukimi, loading } = edukimiStore;

    const [target, setTarget] = useState('');

    function handleEdukimiDelete(e: SyntheticEvent<HTMLButtonElement>, id: string) {
        setTarget(e.currentTarget.name);
        deleteEdukimi(id);
    }
    const [readMore, setReadMore] = useState(false);
    const extraContent = <div>
        <Card.Meta>
            <span>{edukimi.pershkrimi}</span>
        </Card.Meta>
    </div>
    return (
        <>
            <Item key={(edukimi.id)}>
                <Card fluid style={{ marginBottom: '8px' }}>
                    <Card.Content>
                        <Grid>
                            <Grid.Column width='12'>
                                <Card.Header><a className="read-more-link" onClick={() => { setReadMore(!readMore) }}><h4>{edukimi.titulli} <br /> {edukimi.fusha_e_Studimit}</h4></a> <br /></Card.Header>
                            </Grid.Column>
                            <Grid.Column width='4'>
                                <Grid style={{ marginTop: '-25px' }}>
                                    <Grid.Column width='3'>
                                        <Button onClick={()=> modalStore.openModal(<EdukimiFormEdit edukimi={edukimi}/>)} className="btn" style={{ marginLeft: '3.8em' }} size='small'><Icon className='btnIcon' name='edit' /></Button>
                                    </Grid.Column>
                                    <Grid.Column width='1'>
                                        <Button name={edukimi.id}
                                            loading={loading && target === edukimi.id}
                                            onClick={(e) => handleEdukimiDelete(e, edukimi.id)}
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
                            {edukimi.emri_i_Institucionit}, {edukimi.lokacioni}
                        </Card.Description>
                        <Card.Meta>
                            <span>{edukimi.dataFillestare} - {edukimi.dataPerfundimtare}</span>
                            {/* <span>{format(edukimi.dataFillestare!, 'dd MMM yyyy')}</span> */}
                            {/* <span>{format(edukimi.dataPerfundimtare!, 'dd MMM yyyy')}</span> */}
                        </Card.Meta>
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
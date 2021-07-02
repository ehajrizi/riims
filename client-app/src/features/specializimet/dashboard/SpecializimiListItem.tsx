import { format } from 'date-fns';
import { observer } from 'mobx-react-lite';
import React, { SyntheticEvent, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Button, Card, Checkbox, Divider, Grid, Header, Icon, Item, Segment } from 'semantic-ui-react';
import { Specializimi } from '../../../app/models/specializimi';
import modalStore from '../../../app/stores/modalStore';
import { useStore } from '../../../app/stores/store';
import { useModal } from '../../useModal';
import SpecializimiFormEdit from '../form/SpecializimiFormEdit';


interface Props {
    specializimi: Specializimi;
}

export default observer(function SpecializimiListItem({ specializimi }: Props) {
    const location = useLocation();

    const { specializimiStore, modalStore } = useStore();
    const { deleteSpecializimi, loading } = specializimiStore;

    const [target, setTarget] = useState('');

    function handleSpecializimiDelete(e: SyntheticEvent<HTMLButtonElement>, id: string) {
        setTarget(e.currentTarget.name);
        deleteSpecializimi(id);
    }
    const [readMore, setReadMore] = useState(false);
    const extraContent = <div>
        <Card.Meta>
            <span>{specializimi.pershkrimi}</span>
        </Card.Meta>
    </div>
    return (
        <>
            <Item key={(specializimi.id)}>
                <Card fluid style={{ marginBottom: '8px' }}>
                    <Card.Content>
                        <Grid>
                            <Grid.Column width='12'>
                                <Card.Header><a className="read-more-link" onClick={() => { setReadMore(!readMore) }}><h4>{specializimi.titulli} </h4><br/></a></Card.Header>
                            </Grid.Column>
                            <Grid.Column width='4'>
                                <Grid style={{ marginTop: '-25px' }}>
                                    <Grid.Column width='3'>
                                        <Button onClick={()=> modalStore.openModal(<SpecializimiFormEdit specializimi={specializimi}/>)} className="btn" style={{ marginLeft: '3.8em' }} size='small'><Icon className='btnIcon' name='edit' /></Button>
                                    </Grid.Column>
                                    <Grid.Column width='1'>
                                        <Button name={specializimi.id}
                                            loading={loading && target === specializimi.id}
                                            onClick={(e) => handleSpecializimiDelete(e, specializimi.id)}
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
                            <span>{specializimi.emriInstitucionit}, {specializimi.lokacioni}</span>
                        </Card.Description>
                        <Card.Meta>
        
                            <span>{format(specializimi.dataFillestare!, 'dd MMM yyyy')} - {format(specializimi.dataPerfundimtare!, 'dd MMM yyyy')}</span>
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
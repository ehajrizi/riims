import { format } from 'date-fns';
import { observer } from 'mobx-react-lite';
import React, { SyntheticEvent, useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, Card, Divider, Grid, Icon, Item, Segment } from 'semantic-ui-react';
import { HonorandAward } from '../../../app/models/honorandaward';
import { useStore } from '../../../app/stores/store';
import HonorsandAwardsFormEdit from '../form/HonorsandAwardsFormEdit';

interface Props {
    honorandaward:HonorandAward;
}
export default observer (function HonorandAwardList({honorandaward}: Props)
{
    const{ honorandawardStore,modalStore}= useStore();
    const{DeleteHonorandAward,loading,honorsandawardsByTitulli}= honorandawardStore;
    
    const[target, setTarget]= useState('');

    function handleHonorandAwardDelete(e: SyntheticEvent<HTMLButtonElement>, id:string){
        setTarget(e.currentTarget.name);
        DeleteHonorandAward(id);
    }
    
    const [readMore, setReadMore] = useState(false);
    const extraContent = <div>
        <Card.Meta>
            <span>{honorandaward.titulli}</span>
        </Card.Meta>
    </div>
    return (
        <>
        <Item key={(honorandaward.id)}>
            <Card fluid style={{ marginBottom: '8px' }}>
                <Card.Content>
                    <Grid>
                        <Grid.Column width='12'>
                        <Card.Header><a className="read-more-link" onClick={() => { setReadMore(!readMore) }}><h4>{honorandaward.titulli}</h4></a></Card.Header>
                        </Grid.Column>
                        <Grid.Column width='4'>
                            <Grid style={{ marginTop: '-25px' }}>
                                <Grid.Column width='3'>
                                    <Button onClick={()=> modalStore.openModal(<HonorsandAwardsFormEdit honorandaward={honorandaward}/>)} className="btn" style={{ marginLeft: '3.8em' }} size='small'><Icon className='btnIcon' name='edit' /></Button>
                                </Grid.Column> 
                                <Grid.Column width="1">
                                    <Button name={honorandaward.id}
                                    loading={loading && target === honorandaward.id}
                                    onClick={(e) => handleHonorandAwardDelete(e, honorandaward.id)}
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
                            <span>{honorandaward.institucioni },</span><span>{honorandaward.pozita}</span>           
                        </Card.Description>
                        <Card.Meta>
                            <span>{honorandaward.muaji},</span><span>{format(honorandaward.viti!,'yyyy')}</span>
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
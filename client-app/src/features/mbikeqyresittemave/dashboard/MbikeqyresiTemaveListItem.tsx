import { format } from 'date-fns';
import { observer } from 'mobx-react-lite';
import React, { SyntheticEvent, useState } from 'react';
import { Button,  Card, Divider, Grid, Icon, Item, Segment } from 'semantic-ui-react';
import { MbikeqyresiTemave } from '../../../app/models/mbikeqyresitemave';
import { useStore } from '../../../app/stores/store';
import MbikeqyresiTemaveFormEdit from '../form/MbikeqyresiTemaveFormEdit';

interface Props {
    mbikeqyresitemave: MbikeqyresiTemave;
}

export default observer (function MbikeqyresiTemaveListItem({mbikeqyresitemave}: Props)
{
    const{ mbikeqyresitemaveStore,modalStore}= useStore();
    const{deleteMbikeqyresiTemave,loading}= mbikeqyresitemaveStore;
    
    const[target, setTarget]= useState('');

    function handleMbikeqyresiTemaveDelete(e: SyntheticEvent<HTMLButtonElement>, id:string){
        setTarget(e.currentTarget.name);
        deleteMbikeqyresiTemave(id);
    }
    const [readMore, setReadMore] = useState(false);
    const extraContent = <div>
        <Card.Meta>
            <span>{mbikeqyresitemave.titulliTemes}</span>
        </Card.Meta>
    </div>
    return (
        <>
        <Item key={(mbikeqyresitemave.id)}>
            <Card fluid style={{ marginBottom: '8px' }}>
                <Card.Content>
                    <Grid>
                        <Grid.Column width='12'>
                        <Card.Header><a className="read-more-link" onClick={() => { setReadMore(!readMore) }}><h4>{mbikeqyresitemave.titulliTemes}</h4></a></Card.Header>
                            </Grid.Column>
                        <Grid.Column width='4'>
                            <Grid style={{ marginTop: '-25px' }}>
                                <Grid.Column width='3'>
                                    <Button onClick={()=> modalStore.openModal(<MbikeqyresiTemaveFormEdit mbik={mbikeqyresitemave}/>)} className="btn" style={{ marginLeft: '3.8em' }} size='small'><Icon className='btnIcon' name='edit' /></Button>
                                </Grid.Column> 
                                <Grid.Column width="1">
                                    <Button name={mbikeqyresitemave.id}
                                    loading={loading && target === mbikeqyresitemave.id}
                                    onClick={(e) => handleMbikeqyresiTemaveDelete(e, mbikeqyresitemave.id)}
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
                            <span>{mbikeqyresitemave.studenti},</span><span>{mbikeqyresitemave.niveliAkademik}</span>  
                            </Card.Meta>
                            <Card.Description>
                        <div>{mbikeqyresitemave.institucioni}</div>  
                        <div>{mbikeqyresitemave.fakulteti}</div> 
                            </Card.Description>
                            <Card.Meta>
                            <span>{mbikeqyresitemave.muaji },</span><span>{ format(mbikeqyresitemave.viti!,'yyyy')} </span>  
                            </Card.Meta>
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
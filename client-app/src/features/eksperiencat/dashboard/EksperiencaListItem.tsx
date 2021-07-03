import { format } from 'date-fns';
import { observer } from 'mobx-react-lite';
import React, { SyntheticEvent, useState } from 'react';
import { Button, Card, Checkbox, Divider, Grid, Icon, Item } from 'semantic-ui-react';
import { Eksperienca } from '../../../app/models/eksperienca';
import { useStore } from '../../../app/stores/store';
import EksperiencaFormEdit from '../form/EksperiencaFormEdit';

interface Props{
    eksperienca: Eksperienca
}

export default observer(function EksperiencaListItem({eksperienca} : Props)
{
    const {eksperiencaStore, modalStore} = useStore();
    const {deleteEksperienca, loading} = eksperiencaStore;
    
    const [target, setTarget] = useState('');

    function handleEksperiencaDelete(e: SyntheticEvent<HTMLButtonElement>, id:string){
        setTarget(e.currentTarget.name);
        deleteEksperienca(id);
    }

    const [readMore, setReadMore] = useState(false);
    const extraContent = <div>
        <Card.Meta>
            <span>{eksperienca.emriInstitucionit}</span><br/>
            <span>{eksperienca.lokacioni}</span><br/>
            <span><Checkbox label='Pune primare' /></span><br/>
            <span>{eksperienca.personiKontaktues}</span>
            :
            <span>{eksperienca.numriTelefonit}</span>
        </Card.Meta>
    </div>

    return (
        <>
            <Item key={(eksperienca.id)}>
                <Card fluid style={{marginBottom: '8px'}}>
                    <Card.Content>
                        <Grid>
                            <Grid.Column width='12'>
                                <Card.Header><a className="read-more-link" onClick={() => { setReadMore(!readMore) }}><h4>{eksperienca.titulli}</h4></a></Card.Header>
                            </Grid.Column>
                            <Grid.Column width='4'>
                                <Grid style={{ marginTop: '-25px' }}>
                                    <Grid.Column width='3'>
                                        <Button onClick={()=> modalStore.openModal(<EksperiencaFormEdit eksp={eksperienca}/>)} className="btn" style={{ marginLeft: '3.8em' }} size='small'><Icon className='btnIcon' name='edit' /></Button>
                                    </Grid.Column>
                                    <Grid.Column width='1'>
                                        <Button name={eksperienca.id}
                                            loading={loading && target === eksperienca.id}
                                            onClick={(e) => handleEksperiencaDelete(e, eksperienca.id)}
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
                            <span>{format(eksperienca.dataFillestare!,'dd MMM yyyy')}</span>
                                -   
                            <span>{format(eksperienca.dataPerfundimtare!,'dd MMM yyyy')}</span>
                        </Card.Meta>
                        <Card.Meta>
                            {readMore && extraContent}
                        </Card.Meta>
                        <Card.Description>
                            <span>{eksperienca.pershkrimi}</span>
                        </Card.Description>
                        <Grid>
                            <Grid.Column width="15"><Divider/></Grid.Column>
                            <Grid.Column width="1"><Icon name='eye' style={{ marginLeft: "-20px" }} /></Grid.Column>
                        </Grid>
                    </Card.Content>
                </Card>
            </Item>
        </>
    )
})
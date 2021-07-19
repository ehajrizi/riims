import { observer } from 'mobx-react-lite';
import { SyntheticEvent, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Button, Card, Divider, Grid, Icon, Item } from 'semantic-ui-react';
import { Donatori } from '../../../app/models/donatori';
import { useStore } from '../../../app/stores/store';



interface Props {
    donatori: Donatori;
}

export default observer(function PublikimetListItem({ donatori }: Props) {
    const location = useLocation();

    const { donatoriStore,modalStore } = useStore();
    const { deleteDonatori, loading } = donatoriStore;

    const [target, setTarget] = useState('');

    function handleDonatoriDelete(e: SyntheticEvent<HTMLButtonElement>, id: string) {
        setTarget(e.currentTarget.name);
        deleteDonatori(id);
    }
    const [readMore, setReadMore] = useState(false);
    const extraContent = <div>
        {/* <Card.Meta>
            <span>{projekti.referenca}</span>
            <span>{projekti.linkuPublikimit}</span>
        </Card.Meta> */}
    </div>
    return (
        <>
            <Item key={(donatori.id)}>
                <Card fluid style={{ marginBottom: '8px' }}>
                    <Card.Content>
                        <Grid>
                            <Grid.Column width='12'>
                                <Card.Header><a className="read-more-link" onClick={() => { setReadMore(!readMore) }}><h4>{donatori.emriIDonatorit}</h4></a></Card.Header>
                            </Grid.Column>
                            <Grid.Column width='4'>
                                <Grid style={{ marginTop: '-25px' }}>
                                    
                                    <Grid.Column width='1'>
                                        <Button name={donatori.id}
                                            loading={loading && target === donatori.id}
                                            onClick={(e) => handleDonatoriDelete(e, donatori.id)}
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
                           
                              {donatori.pershkrimiDonatorit} <br />
                              {donatori.kontributiIDhene} <br />

                           
                        </Card.Description> ]
                        <Card.Meta>
                            {readMore && extraContent}
                        </Card.Meta>
                    </Card.Content>
                </Card>
            </Item>
        </>
    )
})
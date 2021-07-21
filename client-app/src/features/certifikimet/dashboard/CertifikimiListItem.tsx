import { format } from 'date-fns';
import { observer } from 'mobx-react-lite';
import React, { SyntheticEvent, useState } from 'react';
import { Button, Card, Divider, Grid, Icon, Item} from 'semantic-ui-react';
import { Certifikimi } from '../../../app/models/certifikimi';
import { useStore } from '../../../app/stores/store';
import CertifikimiFormEdit from '../form/CertifikimiFormEdit'

interface Props {
    certifikimi: Certifikimi
}

export default observer(function CertifikimiListItem({certifikimi}: Props)
{

    const { certifikimiStore, modalStore } = useStore();
    const { deleteCertifikimi, loading } = certifikimiStore;

    const [target, setTarget] = useState('');

    function handleCertifikimiDelete(e: SyntheticEvent<HTMLButtonElement>, id: string) {
        setTarget(e.currentTarget.name);
        deleteCertifikimi(id);
    }
    const [readMore, setReadMore] = useState(false);
    const extraContent = <div>
        <Card.Meta>
            <span>{certifikimi.pershkrimi}</span>
        </Card.Meta>
    </div>
    return (
        <>
            <Item key={(certifikimi.id)}>
                <Card fluid style={{ marginBottom: '8px' }}>
                    <Card.Content>
                        <Grid>
                            <Grid.Column width='12'>
                                <Card.Header><a className="read-more-link" onClick={() => { setReadMore(!readMore) }}><h4>{certifikimi.titulli} </h4><br/></a></Card.Header>
                            </Grid.Column>
                            <Grid.Column width='4'>
                                <Grid style={{ marginTop: '-25px' }}>
                                    <Grid.Column width='3'>
                                        <Button onClick={()=> modalStore.openModal(<CertifikimiFormEdit cert={certifikimi}/>)} className="btn" style={{ marginLeft: '3.8em' }} size='small'><Icon className='btnIcon' name='edit' /></Button>
                                    </Grid.Column>
                                    <Grid.Column width='1'>
                                        <Button name={certifikimi.id}
                                            loading={loading && target === certifikimi.id}
                                            onClick={(e) => handleCertifikimiDelete(e, certifikimi.id)}
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
                            <span>{certifikimi.emri_Institucionit}, {certifikimi.lokacioni}</span>
                        </Card.Description>
                        <Card.Meta>
        
                            <span>{format(certifikimi.dataFillestare!, 'dd MMM yyyy')} - {format(certifikimi.dataPerfundimtare!, 'dd MMM yyyy')}</span>
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
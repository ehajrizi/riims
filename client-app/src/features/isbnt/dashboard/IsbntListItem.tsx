import { observer } from 'mobx-react-lite';
import { SyntheticEvent, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Button, Card,  Grid, Icon, Item } from 'semantic-ui-react';
import { Isbn } from '../../../app/models/isbn';
import { useStore } from '../../../app/stores/store';


interface Props {
    isbn: Isbn;
}

export default observer(function IsbntListItem({ isbn }: Props) {
    const location = useLocation();

    const { isbnStore,  } = useStore();
    const { deleteIsbn,  loading } = isbnStore;

    const [target, setTarget] = useState('');

    function handleisbnDelete(e: SyntheticEvent<HTMLButtonElement>, id: string) {
        setTarget(e.currentTarget.name);
        deleteIsbn(id);
    }
    
    return (
        <>
            <Item key={(isbn.id)}>
                <Card fluid style={{ marginBottom: '8px' }}>
                    <Card.Content>
                        <Grid>
                            <Grid.Column width='12'>
                                <Card.Header><a><h4 >{isbn.llojiNumrit}</h4></a></Card.Header>
                            </Grid.Column>
                            <Grid.Column width='4'>
                                <Grid style={{ marginTop: '-25px' }}>
                                    
                                    <Grid.Column width='1'>
                                        <Button name={isbn.id}
                                            loading={loading && target === isbn.id}
                                            onClick={(e) => handleisbnDelete(e, isbn.id)}
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
                            <span>{isbn.numri}</span>
                        </Card.Description>
                        
                    </Card.Content>
                </Card>
            </Item>
        </>
    )
})
import { observer } from 'mobx-react-lite';
import React, { SyntheticEvent, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Button, Checkbox, Divider, Grid, Header, Icon, Item, Segment } from 'semantic-ui-react';
import { useStore } from '../../../app/stores/store';
import { useModal } from '../../useModal';
import PublikimetForm from '../form/PublikimetForm';

export default observer(function PublikimetList() {
    const location = useLocation();

    const { isShown, toggle } = useModal();
    const { publikimiStore } = useStore();
    const { deletePublikimi, publikimetByDate, loading } = publikimiStore;

    const [target, setTarget] = useState('');

    function handlePublikimiDelete(e: SyntheticEvent<HTMLButtonElement>, id: string) {
        setTarget(e.currentTarget.name);
        deletePublikimi(id);
    }
    const [readMore, setReadMore] = useState(false);
    // const extraContent = <div>
    //     <p className="extra-content">
    //         Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, consectetur neque ab
    //         porro quasi culpa nulla rerum quis minus voluptatibus sed hic ad quo sint, libero
    //         commodi officia aliquam! Maxime.
    //     </p>
    // </div>
    return (
        <>
            <Grid>
                <Grid.Column width='14'>
                    <Header content='Publikimet' />
                </Grid.Column>
                <Grid.Column width='1' >
                    <Button onClick={toggle} as={NavLink} to='/createPublikimi' className="btn" ><Icon className='btnIcon' name='plus' size='large' /></Button>
                    <PublikimetForm isShown={isShown} hide={toggle} />
                </Grid.Column>
            </Grid>
            <Divider />
            {publikimetByDate.map(publikimi => (
                <Item key={(publikimi.id)}>
                    <Grid>
                        <Grid.Column width='12'>
                            <Item.Header as={Link} to={`/publikimet/${publikimi.id}`}>{publikimi.titulli}</Item.Header>
                            {/* <a className="read-more-link" onClick={() => { setReadMore(!readMore) }}><h2>{publikimi.titulli}</h2></a> */}
                        </Grid.Column>
                        <Grid.Column width='4'>
                            <Grid style={{ marginTop: '-25px' }}>
                                <Grid.Column width='3'>
                                    <Button onClick={toggle} as={Link} to={`/managePublikimi/${publikimi.id}`} className="btn" style={{ marginLeft: '4em' }} size='small'><Icon className='btnIcon' name='edit' /></Button>
                                    <PublikimetForm isShown={isShown} hide={toggle} />
                                </Grid.Column>
                                <Grid.Column width='1'>
                                    <Button name={publikimi.id}
                                        loading={loading && target === publikimi.id}
                                        onClick={(e) => handlePublikimiDelete(e, publikimi.id)}
                                        className="btn"
                                        style={{ marginLeft: '4em'}}>
                                        <Icon className='btnIcon' name='trash' />
                                    </Button>
                                </Grid.Column>
                            </Grid>
                        </Grid.Column>
                    </Grid>
                    <Item.Description>
                        <div>{publikimi.statusi}, {publikimi.llojiPublikimit} </div>
                        <div>{publikimi.lenda}, {publikimi.kategoria} </div>
                        <div>{publikimi.departamenti}, {publikimi.institucioni}</div>
                        <Checkbox label='Autor kryesor' />
                        {/* {readMore && extraContent} */}
                    </Item.Description>
                    <Grid>
                        <Grid.Column width="15"><Divider /></Grid.Column>
                        <Grid.Column width="1"><Icon name='eye' style={{ marginLeft: "-20px" }} /></Grid.Column>
                    </Grid>
                </Item>
            ))}
        </>
    )
})

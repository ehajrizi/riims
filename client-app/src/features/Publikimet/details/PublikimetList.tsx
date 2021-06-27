import { observer } from 'mobx-react-lite';
import React, { SyntheticEvent, useState } from 'react';
import { Link, NavLink, Route, useLocation } from 'react-router-dom';
import { Button, Card, Checkbox, Divider, Grid, Header, Icon, Item, Segment } from 'semantic-ui-react';
import { useStore } from '../../../app/stores/store';
import { useModal } from '../../useModal';
import PublikimetListItem from '../dashboard/PublikimetListItem';
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
                    <Button onClick={toggle} as={Link} to='/createPublikimi' className="btn" ><Icon className='btnIcon' name='plus' size='large' />
                        {/* <Route key={location.key} path={['/createPublikimi', '/manage/:id']} component={PublikimetForm} /> */}
                    </Button>
                    <PublikimetForm isShown={isShown} hide={toggle} />
                </Grid.Column>
            </Grid>
            <Divider />
            {publikimetByDate.map(publikimi => (
                <PublikimetListItem key={publikimi.id} publikimi={publikimi} />
            ))}
        </>
    )
})

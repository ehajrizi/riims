import { observer } from 'mobx-react-lite';
import React, { SyntheticEvent, useState } from 'react';
import { Link, NavLink, Route, useLocation } from 'react-router-dom';
import { Button, Card, Checkbox, Divider, Grid, Header, Icon, Item, Segment } from 'semantic-ui-react';
import { useStore } from '../../../app/stores/store';
import { useModal } from '../../useModal';
import ProjektetForm from '../form/ProjektetForm';
import ProjektetListItem from './ProjektetListItem';


export default observer(function ProjektetList() {
    const location = useLocation();

    const { isShown, toggle } = useModal();
    const { projektiStore } = useStore();
    const { deleteProjekti, projektetByDate, loading } = projektiStore;

    const [target, setTarget] = useState('');

    function handleProjektiDelete(e: SyntheticEvent<HTMLButtonElement>, id: string) {
        setTarget(e.currentTarget.name);
        deleteProjekti(id);
    }
    const [readMore, setReadMore] = useState(false);
    return (
        <>
            <Grid>
                <Grid.Column width='14'>
                    <Header content='Projektet' />
                </Grid.Column>
                <Grid.Column width='1' >
                    <Button onClick={toggle} as={Link} to='/createProjekti' className="btn" ><Icon className='btnIcon' name='plus' size='large' />
                        {/* <Route key={location.key} path={['/createPublikimi', '/manage/:id']} component={PublikimetForm} /> */}
                    </Button>
                    <ProjektetForm isShown={isShown} hide={toggle} />
                </Grid.Column>
            </Grid>
            <Divider />
            {projektetByDate.map(projekti => (
                <ProjektetListItem key={projekti.id} projekti={projekti} />
            ))}
        </>
    )
})

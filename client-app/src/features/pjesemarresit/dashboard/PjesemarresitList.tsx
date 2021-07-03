import { observer } from 'mobx-react-lite';
import React, { SyntheticEvent, useState } from 'react';
import { Link, NavLink, Route, useLocation } from 'react-router-dom';
import { Button, Card, Checkbox, Divider, Grid, Header, Icon, Item, Segment } from 'semantic-ui-react';
import { useStore } from '../../../app/stores/store';
import { useModal } from '../../useModal';
import PjesemarresitForm from '../form/PjesemarresitForm';
import PjesemarresitListItem from './PjesemarresitListItem';


export default observer(function PjesemarresitList() {
    const location = useLocation();

    const { isShown, toggle } = useModal();
    const { pjesemarresiStore } = useStore();
    const { deletePjesemarresi, loading } = pjesemarresiStore;

    const [target, setTarget] = useState('');

    function handlePjesemarresiDelete(e: SyntheticEvent<HTMLButtonElement>, id: string) {
        setTarget(e.currentTarget.name);
        deletePjesemarresi(id);
    }
    const [readMore, setReadMore] = useState(false);
    return (
        <>
            <Grid>
                <Grid.Column width='14'>
                    <Header content='Pjesemarresit' />
                </Grid.Column>
                <Grid.Column width='1' >
                    <Button onClick={toggle} as={Link} to='/createPjesemarresi' className="btn" ><Icon className='btnIcon' name='plus' size='large' />
                        {/* <Route key={location.key} path={['/createPublikimi', '/manage/:id']} component={PublikimetForm} /> */}
                    </Button>
                    <PjesemarresitForm isShown={isShown} hide={toggle} />
                </Grid.Column>
            </Grid>
            <Divider />
            {/* {pjesemarresitByDate.map(pjesemarresi => (
                <PjesemarresitListItem key={pjesemarresi.id} pjesemarresi={pjesemarresi} />
            ))} */}
        </>
    )
})

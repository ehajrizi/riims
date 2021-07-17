import { observer } from 'mobx-react-lite';
import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Divider, Grid, Header, Icon, Segment } from 'semantic-ui-react';
import { useStore } from '../../../app/stores/store';
import CertifikimiForm from '../form/CertifikimiForm'
import CertifikimiListItem from './CertifikimiListItem';

export default observer(function CertifikimiList() {
    const { certifikimiStore, modalStore, userStore } = useStore();
    const { certifikimetByDate } = certifikimiStore;

    return (
        <>
            <Grid>
                <Grid.Column width='14'>
                    <Header content='Certifikimet' />
                </Grid.Column>
                <Grid.Column width='1' >
                    <Button onClick={() => modalStore.openModal(<CertifikimiForm />)} as={Link} to='/certifikimet' className="btn" ><Icon className='btnIcon' name='plus' size='large' />
                    </Button>
                </Grid.Column>
            </Grid>
            <Divider />
            {certifikimetByDate.map(certifikimi => (
                <>
                    {certifikimi.useriId === userStore.UserId ? (
                        <CertifikimiListItem key={certifikimi.id} certifikimi={certifikimi} />
                    ) : ('')}
                </>
            ))}
        </>
    )
})
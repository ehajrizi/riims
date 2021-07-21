import { observer } from 'mobx-react-lite';
import React, { useEffect } from 'react';
import { Grid } from 'semantic-ui-react';
import LoadingComponent from '../../../app/layout/LoadingComponents';
import { useStore } from '../../../app/stores/store';
import CertifikimiList from './CertifikimiList';


export default observer( function CertifikimiDashboard()
{   const {certifikimiStore} = useStore();
    const {loadCertifikimet, certifikimiRegistry} = certifikimiStore;
 
    useEffect(() => {
       if (certifikimiRegistry.size <= 1) loadCertifikimet();
    }, [certifikimiRegistry.size, loadCertifikimet])

    return(
        <Grid centered style={{ marginTop: 50 }}>
            <Grid.Column width='16' className={'grid-container'}>
                <CertifikimiList/>
            </Grid.Column>
        </Grid>
    )
})
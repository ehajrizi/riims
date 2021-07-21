import { observer } from 'mobx-react-lite';
import React, { useEffect } from 'react';
// import '../../../styles.css';
import { Button, Divider, Form, Grid, Header, Icon, Item, Label, Modal } from 'semantic-ui-react';
import { Publikimi } from '../../../app/models/publikimi';
import { useStore } from '../../../app/stores/store';
import LoadingComponent from '../../../app/layout/LoadingComponents';
import PublikimetList from '../details/PublikimetList';

export default observer(function PublikimetDashboard(){


    const {publikimiStore} = useStore();
    const {loadPublikimet,publikimiRegistry} = publikimiStore;
 
   useEffect(() =>{
     if(publikimiRegistry.size <= 1) loadPublikimet();
   }, [publikimiRegistry.size, loadPublikimet])
 
    return (
        <Grid centered style={{ marginTop: 50 }}>
            <Grid.Column width='16' className={'grid-container'}>
                <PublikimetList/>
            </Grid.Column>
        </Grid>
    )
})
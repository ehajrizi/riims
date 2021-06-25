import { observer } from 'mobx-react-lite';
import React, { useEffect } from 'react';
// import '../../../styles.css';
import { Button, Divider, Form, Grid, Header, Icon, Item, Label, Modal } from 'semantic-ui-react';
import { Publikimi } from '../../../app/models/publikimi';
import { useModal } from '../../useModal';
import PublikimetForm from '../form/PublikimetForm';
import { useStore } from '../../../app/stores/store';
import LoadingComponent from '../../../app/layout/LoadingComponents';
import PublikimetList from '../details/PublikimetList';

interface Props {
    publikimet: Publikimi[];
    selectedPublikimi: Publikimi | undefined;
    selectPublikimi: (id: string) => void;
    cancelSelectPublikimi: () => void;
    editModePublikimi: boolean;
    openFormPublikimi: (id: string) => void;
    closeFormPublikimi: () => void
    createOrEditPublikimi: (publikimi: Publikimi) => void;
    deletePublikimi: (id: string) => void;
}

export default observer(function PublikimetDashboard(){


    const {publikimiStore} = useStore();
    const {loadPublikimet,publikimiRegistry} = publikimiStore;
 
   useEffect(() =>{
     if(publikimiRegistry.size <= 1) loadPublikimet();
   }, [publikimiRegistry.size, loadPublikimet])
 
   if(publikimiStore.loadingInitial) return <LoadingComponent content='Loading app'/>

    return (
        <Grid centered style={{ marginTop: 50 }}>
            <Grid.Column width='8' className={'grid-container'}>
                <PublikimetList/>
            </Grid.Column>
            <Grid.Column width='1' />
            <Grid.Column width='4' />
        </Grid>
    )
})
import React from 'react';
import { Grid } from 'semantic-ui-react';
import { Publikimi } from '../../../app/models/publikimi';
import PublikimetDetails from '../details/PublikimetDetails';
import PublikimetForm from '../form/PublikimetForm';
import PublikimetList from './PublikimetList';

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

export default function PublikimetDashboard({publikimet, selectedPublikimi, selectPublikimi, cancelSelectPublikimi, editModePublikimi, openFormPublikimi, closeFormPublikimi, createOrEditPublikimi, deletePublikimi}: Props) {
    return (
        <Grid>
            <Grid.Column width='10'>
                <PublikimetList publikimet={publikimet} selectPublikimi={selectPublikimi} deletePublikimi={deletePublikimi}/>
            </Grid.Column>
            <Grid.Column width='6'>
                {selectedPublikimi && !editModePublikimi &&
                <PublikimetDetails 
                    publikimi={selectedPublikimi} 
                    cancelSelectPublikimi={cancelSelectPublikimi} 
                    openFormPublikimi = {openFormPublikimi}
                />}
                {editModePublikimi && 
                <PublikimetForm closeFormPublikimi = {closeFormPublikimi} publikimi = {selectedPublikimi} createOrEditPublikimi = {createOrEditPublikimi}/>}
            </Grid.Column>
        </Grid>
    )
}
import React from 'react';
import { Grid } from 'semantic-ui-react';
import { Edukimi } from '../../../app/models/edukimi';
import EdukimiDetails from '../details/EdukimiDetails';
import EdukimiForm from '../form/EdukimiForm';
import EdukimiList from './EdukimiList';

interface Props {
    edukimet: Edukimi[];
    selectedEdukimi: Edukimi | undefined;
    selectEdukimi: (id: string) => void;
    cancelSelectEdukimi: () => void;
    editModeEdukimi: boolean;
    openFormEdukimi: (id: string) => void;
    closeFormEdukimi: () => void;
    createOrEditEdukimi: (edukimi: Edukimi) => void;
    deleteEdukimi: (id: string) => void;
}

export default function EdukimiDashboard({edukimet, selectedEdukimi, 
    selectEdukimi, cancelSelectEdukimi, editModeEdukimi, openFormEdukimi, closeFormEdukimi, createOrEditEdukimi, deleteEdukimi}: Props) {
    return(
        <Grid>
            <Grid.Column width='10'>
                <EdukimiList edukimet={edukimet} 
                    selectEdukimi={selectEdukimi}
                    deleteEdukimi={deleteEdukimi}
                />
            </Grid.Column>
            <Grid.Column width='6' >
                {selectedEdukimi && !editModeEdukimi &&
                <EdukimiDetails 
                    edukimi={selectedEdukimi} 
                    cancelSelectEdukimi={cancelSelectEdukimi} 
                    openFormEdukimi={openFormEdukimi}
                />}
                {editModeEdukimi &&
                <EdukimiForm closeFormEdukimi={closeFormEdukimi} edukimi={selectedEdukimi} createOrEditEdukimi={createOrEditEdukimi} />}
            </Grid.Column>
        </Grid>
    )
}
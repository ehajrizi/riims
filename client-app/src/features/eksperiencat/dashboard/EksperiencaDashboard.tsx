import React from 'react';
import { Grid } from 'semantic-ui-react';
import { Eksperienca } from '../../../app/models/eksperienca';
import EksperiencaDetails from '../details/EksperiencaDetails';
import EksperiencaForm from '../form/EksperiencaForm';
import EksperiencaList from './EksperiencaList';

interface Props{
    eksperiencat: Eksperienca[];
    selectedEksperienca: Eksperienca | undefined;
    selectEksperienca: (id:string) => void;
    cancelSelectEksperienca: () => void;
    editModeEksperienca: boolean;
    openFormEksperienca: (id:string) => void;
    closeFormEksperienca: () => void;
    createOrEditEksperienca: (eksperienca : Eksperienca) => void;
    deleteEksperienca: (id:string) => void;
}

export default function EksperiencaDashboard({eksperiencat,selectedEksperienca, selectEksperienca,cancelSelectEksperienca,editModeEksperienca,openFormEksperienca,closeFormEksperienca,createOrEditEksperienca,deleteEksperienca}:Props)
{
    return(
        <Grid>
            <Grid.Column width='10'>
                <EksperiencaList eksperiencat={eksperiencat} 
                selectEksperienca={selectEksperienca}
                deleteEksperienca={deleteEksperienca}
                />
            </Grid.Column>
            <Grid.Column width='6'>
                {selectedEksperienca && !editModeEksperienca &&
                <EksperiencaDetails 
                eksperienca={selectedEksperienca} 
                cancelSelectEksperienca={cancelSelectEksperienca}
                openFormEksperienca={openFormEksperienca}
                />}
                {editModeEksperienca &&
                <EksperiencaForm  closeFormEksperienca={closeFormEksperienca} eksperienca={selectedEksperienca} createOrEditEksperienca={createOrEditEksperienca}/>}
            </Grid.Column>
        </Grid>
    )

}


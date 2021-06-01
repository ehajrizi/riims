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
    editMode: boolean;
    openForm: (id:string) => void;
    closeForm: () => void;
    createOrEdit: (eksperienca : Eksperienca) => void;
    deleteEksperienca: (id:string) => void;
}

export default function EksperiencaDashboard({eksperiencat,selectedEksperienca, selectEksperienca,cancelSelectEksperienca,editMode,openForm,closeForm,createOrEdit,deleteEksperienca}:Props)
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
                {selectedEksperienca && !editMode &&
                <EksperiencaDetails 
                eksperienca={selectedEksperienca} 
                cancelSelectEksperienca={cancelSelectEksperienca}
                openForm={openForm}
                />}
                {editMode &&
                <EksperiencaForm  closeForm={closeForm} eksperienca={selectedEksperienca} createOrEdit={createOrEdit}/>}
            </Grid.Column>
        </Grid>
    )

}


import React from 'react';
import { Grid } from 'semantic-ui-react';
import { Specializimi } from '../../../app/models/specializimi';
import SpecializimiDetails from '../details/SpecializimiDetails';
import SpecializimiForm from '../form/SpecializimiForm';
import SpecializimiList from './SpecializimiList';

interface Props {
    specializimet: Specializimi[];
    selectedSpecializimi: Specializimi | undefined;
    selectSpecializimi: (id: string) => void;
    cancelSelectSpecializimi: () => void;
    editModeSpecializimi: boolean;
    openFormSpecializimi: (id: string) => void;
    closeFormSpecializimi: () => void;
    createOrEditSpecializimi: (specializimi: Specializimi) => void;
    deleteSpecializimi: (id: string) => void;

}

export default function SpecializimiDashboard({specializimet, selectedSpecializimi,
     selectSpecializimi, cancelSelectSpecializimi, editModeSpecializimi, openFormSpecializimi, closeFormSpecializimi, createOrEditSpecializimi, deleteSpecializimi}: Props)
{
    return(
        <Grid>
           <Grid.Column width='10'>
               <SpecializimiList specializimet={specializimet} 
               selectSpecializimi={selectSpecializimi}
               deleteSpecializimi={deleteSpecializimi}
               />
           </Grid.Column>
           <Grid.Column width='6'>
               {selectedSpecializimi && !editModeSpecializimi &&
              <SpecializimiDetails 
                specializimi={selectedSpecializimi} 
                cancelSelectSpecializimi={cancelSelectSpecializimi}
                openFormSpecializimi={openFormSpecializimi} 
              />}
              {editModeSpecializimi && 
              <SpecializimiForm closeFormSpecializimi={closeFormSpecializimi} specializimi={selectedSpecializimi} createOrEditSpecializimi={createOrEditSpecializimi}/>}
           </Grid.Column>
        </Grid>
    )
}
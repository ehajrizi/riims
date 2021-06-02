import React from 'react';
import { Grid} from 'semantic-ui-react';
import { Profili } from '../../../app/models/profili';
import ProfiliDetails from '../details/ProfiliDetails';
import ProfiliForm from '../form/ProfiliForm';
import ProfiliList from './ProfiliList';

interface Props{
    profilet: Profili[];
    selectedProfili:Profili | undefined;
    selectProfili: (id:string) =>void;
    cancelSelectedProfili :()=>void;
    editModeProfili : boolean;
    openFormProfili: (id:string) => void;
    closeFormProfili: () => void;
    createOrEditProfili: (profili: Profili) => void;
}

export default function ProfiliDashboard({profilet,selectedProfili,
    selectProfili,cancelSelectedProfili,editModeProfili,openFormProfili,closeFormProfili,createOrEditProfili}:Props) {

    return (
        <Grid>
            <Grid.Column width='10'>

                 <ProfiliList 
                 profilet={profilet}
                  selectProfili={selectProfili}
                  />  

                 
             </Grid.Column>

                 <Grid.Column width='6'>
                     {selectedProfili && !editModeProfili &&
                     <ProfiliDetails
                      profili={selectedProfili} 
                      cancelSelectedProfili={cancelSelectedProfili}
                      openFormProfili={openFormProfili}

                     /> }
                     {editModeProfili &&
                     <ProfiliForm closeFormProfili={closeFormProfili} profili={selectedProfili} createOrEditProfili={createOrEditProfili}/>}


                 </Grid.Column>
            
    
        </Grid>

    
    )
}
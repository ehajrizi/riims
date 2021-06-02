
import React from 'react';
import { Grid } from 'semantic-ui-react';
import { MbikeqyresiTemave } from '../../../app/models/mbikeqyresitemave';
import MbikeqyresiTemaveDetails from '../details/MbikeqyresiTemaveDetails';
import MbikeqyresiTemaveForm from '../form/MbikeqyresiTemaveForm';
import MbikeqyresiTemaveList from './MbikeqyresiTemaveList';

interface Props {
    mbikeqyresittemave: MbikeqyresiTemave[];
    selectedMbikeqyresiTemave: MbikeqyresiTemave | undefined;
    selectMbikeqyresiTemave: (id: string) => void;
    cancelSelectMbikeqyresiTemave:() => void;
    editModeMbikeqyresiTemave: boolean;
    openFormMbikeqyresiTemave:(id: string)=> void;
    closeFormMbikeqyresiTemave:()=>void;
    createOrEditMbikeqyresiTemave:(mbikeqyresitemave:MbikeqyresiTemave) => void;
    deleteMbikeqyresiTemave:(id: string)=> void;
}

export default function MbikeqyresiTemaveDashboard({mbikeqyresittemave,selectedMbikeqyresiTemave, 
    selectMbikeqyresiTemave, editModeMbikeqyresiTemave, 
    closeFormMbikeqyresiTemave, openFormMbikeqyresiTemave ,cancelSelectMbikeqyresiTemave, createOrEditMbikeqyresiTemave,deleteMbikeqyresiTemave}:Props){
    return (
        <Grid>
            <Grid.Column width='10'>
            <MbikeqyresiTemaveList mbikeqyresittemave={mbikeqyresittemave} 
            selectMbikeqyresiTemave={selectMbikeqyresiTemave}
            deleteMbikeqyresiTemave={deleteMbikeqyresiTemave}/>
            </Grid.Column>
            <Grid.Column width ='6'>
                {selectedMbikeqyresiTemave && !editModeMbikeqyresiTemave &&
                <MbikeqyresiTemaveDetails 
                mbikeqyresitemave={selectedMbikeqyresiTemave} 
                cancelSelectMbikeqyresiTemave={cancelSelectMbikeqyresiTemave}
                openFormMbikeqyresiTemave={openFormMbikeqyresiTemave}
                /> }
                {editModeMbikeqyresiTemave &&
                <MbikeqyresiTemaveForm closeFormMbikeqyresiTemave={closeFormMbikeqyresiTemave} mbikeqyresitemave={selectedMbikeqyresiTemave} createOrEditMbikeqyresiTemave={createOrEditMbikeqyresiTemave}/>}
            </Grid.Column>
        </Grid>
    )
}
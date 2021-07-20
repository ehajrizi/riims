import { observer } from 'mobx-react-lite';
import { useState } from 'react';
import { Grid, Segment } from 'semantic-ui-react';
import NavBar from '../../app/layout/NavBar';
import ProfileEditForm from './ProfileEditForm';

export default observer(function ProfileDashboard() {
    return (
        <>
            <NavBar />
            <ProfileEditForm /> 
        </>
    )
})
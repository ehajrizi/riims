import React, { Fragment, useEffect, useState } from 'react';
import axios from 'axios';
import { Container} from 'semantic-ui-react';
import NavBar from './NavBar';
import {v4 as uuid} from 'uuid';
import { Eksperienca } from '../models/eksperienca';
import EksperiencaDashboard from '../../features/eksperiencat/dashboard/EksperiencaDashboard';

function App() {

  const [eksperiencat, setEksperiencat] = useState<Eksperienca[]>([]);
  const [selectedEksperienca, setSelectedEksperienca] = useState<Eksperienca | undefined>(undefined);
  const [editMode, setEditMode] = useState(false);

  useEffect(() =>{
    axios.get<Eksperienca[]>('http://localhost:5000/api/eksperiencat').then(response => {
      setEksperiencat(response.data);
    })
  }, [])

  function handleSelectEksperienca(id : string){
    setSelectedEksperienca(eksperiencat.find(x => x.id === id));
  }

  function handleCancelSelectEksperienca(){
    setSelectedEksperienca(undefined);
  }

  function handleFormOpen(id? : string){
    id ?  handleSelectEksperienca(id):handleCancelSelectEksperienca();
    setEditMode(true);
  }

  function handleFormClose(){
    setEditMode(false);
  }

  function handleCreateOrEditEksperienca(eksperienca: Eksperienca){
    eksperienca.id ? setEksperiencat([...eksperiencat.filter(x=> x.id !== eksperienca.id), eksperienca])
    :setEksperiencat([...eksperiencat,{...eksperienca,id: uuid()}]);
    setEditMode(false);
    setSelectedEksperienca(eksperienca);
  }

  function handleDeleteEksperienca(id:string){
    setEksperiencat([...eksperiencat.filter(x => x.id !== id)])
  }

  return (
    <>
      <NavBar openForm={handleFormOpen}/>
      <Container style={{marginTop:'7em'}}>
        <EksperiencaDashboard 
          eksperiencat={eksperiencat}
          selectedEksperienca={selectedEksperienca}
          selectEksperienca={handleSelectEksperienca}
          cancelSelectEksperienca={handleCancelSelectEksperienca}
          editMode={editMode}
          openForm={handleFormOpen}
          closeForm={handleFormClose}
          createOrEdit={handleCreateOrEditEksperienca}
          deleteEksperienca={handleDeleteEksperienca}
        />
      </Container>
    </>
  );
}

export default App;

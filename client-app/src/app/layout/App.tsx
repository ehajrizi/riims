import React, { Fragment, useEffect, useState } from 'react';
import axios from 'axios';
import { Container} from 'semantic-ui-react';
import NavBar from './NavBar';
import {v4 as uuid} from 'uuid';
import { Eksperienca } from '../models/eksperienca';
import { Edukimi } from '../models/edukimi';
import EksperiencaDashboard from '../../features/eksperiencat/dashboard/EksperiencaDashboard';
import EdukimiDashboard from '../../features/edukimet/dashboard/EdukimiDashboard';

function App() {

  const [eksperiencat, setEksperiencat] = useState<Eksperienca[]>([]);
  const [selectedEksperienca, setSelectedEksperienca] = useState<Eksperienca | undefined>(undefined);
  const [editMode, setEditMode] = useState(false);

  const [edukimet, setEdukimet] = useState<Edukimi[]>([]);
  const [selectedEdukimi, setSelectedEdukimi] = useState<Edukimi | undefined>(undefined);
  const [editModeEdukimi, setEditModeEdukimi] = useState(false);

  useEffect(() =>{
    axios.get<Eksperienca[]>('http://localhost:5000/api/eksperiencat').then(response => {
      setEksperiencat(response.data);
    })
    axios.get<Edukimi[]>('http://localhost:5000/api/edukimet').then(response => {
      setEdukimet(response.data);
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


  /** Metodat per Edukimin */
  function handleSelectEdukimi(id: string) {
    setSelectedEdukimi(edukimet.find(x => x.id === id));
  }

  function handleCancelSelectEdukimi() {
    setSelectedEdukimi(undefined);
  }

  function handleFormOpenEdukimi(id?: string) {
    id ? handleSelectEdukimi(id) : handleCancelSelectEdukimi();
    setEditModeEdukimi(true);
  }

  function handleFormCloseEdukimi(){
    setEditModeEdukimi(false);
  }

  function handleCreateOrEditEdukimi(edukimi: Edukimi) {
    edukimi.id ? setEdukimet([...edukimet.filter(x => x.id !== edukimi.id), edukimi])
      : setEdukimet([...edukimet, {...edukimi, id: uuid()}]);
      setEditModeEdukimi(false);
      setSelectedEdukimi(edukimi);
  }

  function handleDeleteEdukimi(id: string) {
    setEdukimet([...edukimet.filter(x=> x.id !== id)])
  }
  /** Metodat per Edukimin */

  return (
    <>
      <NavBar openForm={handleFormOpen} openFormEdukimi={handleFormOpenEdukimi}/>
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

      {/* Edukimi Container */}
      <Container style={{marginTop: '7em'}}>
        <EdukimiDashboard 
          edukimet={edukimet} 
          selectedEdukimi={selectedEdukimi}
          selectEdukimi={handleSelectEdukimi}
          cancelSelectEdukimi={handleCancelSelectEdukimi}
          editModeEdukimi={editModeEdukimi}
          openFormEdukimi={handleFormOpenEdukimi}
          closeFormEdukimi={handleFormCloseEdukimi}
          createOrEditEdukimi={handleCreateOrEditEdukimi}
          deleteEdukimi={handleDeleteEdukimi}
        />
      </Container> 
    </>
  );
}

export default App;

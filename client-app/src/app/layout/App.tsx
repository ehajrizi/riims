import React, { Fragment, useEffect, useState } from 'react';
import axios from 'axios';
import { Container} from 'semantic-ui-react';
import NavBar from './NavBar';
import {v4 as uuid} from 'uuid';
import { Eksperienca } from '../models/eksperienca';
import { Edukimi } from '../models/edukimi';
import { Specializimi } from '../models/specializimi';
import EksperiencaDashboard from '../../features/eksperiencat/dashboard/EksperiencaDashboard';
import EdukimiDashboard from '../../features/edukimet/dashboard/EdukimiDashboard';
import SpecializimiDashboard from '../../features/specializimet/dashboard/SpecializimiDashboard';
import PublikimetDashboard from '../../features/publikimet/dashboard/PublikimetDashboard';
import { Publikimi } from '../models/publikimi';


function App() {

  const [eksperiencat, setEksperiencat] = useState<Eksperienca[]>([]);
  const [selectedEksperienca, setSelectedEksperienca] = useState<Eksperienca | undefined>(undefined);
  const [editMode, setEditMode] = useState(false);

  const [edukimet, setEdukimet] = useState<Edukimi[]>([]);
  const [selectedEdukimi, setSelectedEdukimi] = useState<Edukimi | undefined>(undefined);
  const [editModeEdukimi, setEditModeEdukimi] = useState(false);

  const [specializimet, setSpecializimet] = useState<Specializimi[]>([]);
  const [selectedSpecializimi, setSelectedSpecializimi] = useState<Specializimi | undefined>(undefined);
  const [editModeSpecializimi, setEditModeSpecializimi] = useState(false);

  const [publikimet, setPublikimet] = useState<Publikimi[]>([]);
  const [selectedPublikimi, setSelectedPublikimi] = useState<Publikimi | undefined>(undefined);
  const [editModePublikimi, setEditModePublikimi] = useState(false);

  useEffect(() =>{
    axios.get<Eksperienca[]>('http://localhost:5000/api/eksperiencat').then(response => {
      setEksperiencat(response.data);
    })
    axios.get<Edukimi[]>('http://localhost:5000/api/edukimet').then(response => {
      setEdukimet(response.data);
    })
    axios.get<Specializimi[]>('http://localhost:5000/api/specializimet').then(response => {
      setSpecializimet(response.data);
    })
    axios.get<Publikimi[]>('http://localhost:5000/api/publikimet').then(response => {
      setPublikimet(response.data);
    })

  }, [])

  /** Metodat per Eksperiencen */
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
  /** Metodat per Eksperienca */ 

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
  /* Metodat per Edukimin */

  /* Metodat per Specializimet */

  function handleSelectSpecializimi(id: string) {
    setSelectedSpecializimi(specializimet.find(x => x.id === id))
  }

  function handleCancelSelectSpecializimi() {
    setSelectedSpecializimi(undefined);
  }

  function handleFormOpenSpecializimi(id?: string) {
    id? handleSelectSpecializimi(id) : handleCancelSelectSpecializimi();
    setEditModeSpecializimi(true);
  }

  function handleFormCloseSpecializimi(){
    setEditModeSpecializimi(false);
  }

  function handleCreateOrEditSpecializimi(specializimi: Specializimi) {
    specializimi.id 
    ? setSpecializimet([...specializimet.filter(x => x.id !== specializimi.id), specializimi])
    : setSpecializimet([...specializimet, {...specializimi, id: uuid()}]);

    setEditModeSpecializimi(false);
    setSelectedSpecializimi(specializimi);
  }

  function handleDeleteSpecializimi(id: string) {
    setSpecializimet([...specializimet.filter(x => x.id !==id)])
  }
  /* Metodat per Specializimet */
 
  /** Metodat per Publikimet */
  function handleSelectPublikimi(id: string) {
    setSelectedPublikimi(publikimet.find(x => x.id === id));
  }

  function handleCancelSelectPublikimi() {
    setSelectedPublikimi(undefined);
  }

  function handleFormOpenPublikimi(id?: string) {
    id ? handleSelectPublikimi(id) : handleCancelSelectPublikimi();
    setEditModePublikimi(true);
  }

  function handleFormClosePublikimi() {
    setEditModePublikimi(false);
  }

  function handleCreateOrEditPublikimi(publikimi: Publikimi) {
    publikimi.id ? setPublikimet([...publikimet.filter(x => x.id !== publikimi.id), publikimi]) : setPublikimet([...publikimet, {...publikimi, id: uuid()}]);
    setEditModePublikimi(false);
    setSelectedPublikimi(publikimi);
  }

  function handleDeletePublikimi(id: string) {
    setPublikimet([...publikimet.filter(x => x.id !== id)])
  }

  /** Metodat per Publikimet */

  return (
    <>
      <NavBar openForm={handleFormOpen} openFormEdukimi={handleFormOpenEdukimi} openFormSpecializimi={handleFormOpenSpecializimi} openFormPublikimi={handleFormOpenPublikimi}/>
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

      {/* Specializimi Container */}
      <Container style={{marginTop: '7em'}}>
        <SpecializimiDashboard 
          specializimet={specializimet}
          selectedSpecializimi={selectedSpecializimi}
          selectSpecializimi={handleSelectSpecializimi}
          cancelSelectSpecializimi={handleCancelSelectSpecializimi}
          editModeSpecializimi={editModeSpecializimi}
          openFormSpecializimi={handleFormOpenSpecializimi}
          closeFormSpecializimi={handleFormCloseSpecializimi}
          createOrEditSpecializimi={handleCreateOrEditSpecializimi}
          deleteSpecializimi={handleDeleteSpecializimi}
          
        />
      </Container>
      {/* Publikimet Container */}
      <Container style={{marginTop: '7em'}}>
        <PublikimetDashboard 
          publikimet={publikimet}
          selectedPublikimi = {selectedPublikimi}
          selectPublikimi = {handleSelectPublikimi}
          cancelSelectPublikimi = {handleCancelSelectPublikimi}
          editModePublikimi = {editModePublikimi}
          openFormPublikimi = {handleFormOpenPublikimi}
          closeFormPublikimi = {handleFormClosePublikimi}
          createOrEditPublikimi = {handleCreateOrEditPublikimi}
          deletePublikimi = {handleDeletePublikimi}
        />
      </Container>
    </>
  );
}

export default App;

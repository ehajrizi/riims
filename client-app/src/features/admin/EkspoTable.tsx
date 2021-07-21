
import { format } from 'date-fns';
import { observer } from 'mobx-react-lite';
import React, { SyntheticEvent, useEffect, useState } from 'react'
import { Link, useHistory } from 'react-router-dom';
import { Button, Grid, Header, Icon, Statistic, Table, TableCell, TableRow } from 'semantic-ui-react'
import NavBar from '../../app/layout/NavBar';
import { useStore } from '../../app/stores/store';
import AnetaresiaForm from '../anetaresite/form/AnetaresiaForm';
import AnetaresiaFormEdit from '../anetaresite/form/AnetaresiaFormEdit';
import EksperiencaForm from '../eksperiencat/form/EksperiencaForm';

interface Props{
  userid: string;
  emri: string;
  mbiemri: string;
}

export default observer( function EkspoTable({userid, emri, mbiemri}: Props)
{
    const {anetaresiaStore,eksperiencaStore, edukimiStore, gjuhaStore, projektiStore, publikimiStore,
       certifikimiStore, mbikeqyresitemaveStore, honorandawardStore, specializimiStore } = useStore();
    const { anetaresite,  anetaresiaRegistry, loadAnetaresite} = anetaresiaStore;
    const { eksperiencatByDate,  eksperiencaRegistry, loadEksperiencat} = eksperiencaStore;
    const { edukimetByDate,  edukimiRegistry, loadEdukimet} = edukimiStore;
    const { gjuhetByGjuha,  gjuhaRegistry, loadGjuhet} = gjuhaStore;
    const { projektetByDate,  projektiRegistry, loadProjektet} = projektiStore;
    const { publikimetByDate,  publikimiRegistry, loadPublikimet} = publikimiStore;
    const { certifikimetByDate,  certifikimiRegistry, loadCertifikimet} = certifikimiStore;
    const { mbikeqyresitemaveByStudenti,  mbikeqyresitemaveRegistry, loadMbikeqyresittemave} = mbikeqyresitemaveStore;
    const { honorsandawardsByTitulli,  honorandawardRegistry, loadHonorsandAwards} = honorandawardStore;
    const { specializimetByDate,  specializimiRegistry, loadSpecializimet} = specializimiStore;

    useEffect(() =>{
      if(anetaresiaRegistry.size <= 1) loadAnetaresite();
    }, [anetaresiaRegistry.size, loadAnetaresite])

    useEffect(() =>{
      if(eksperiencaRegistry.size <= 1) loadEksperiencat();
    }, [eksperiencaRegistry.size, loadEksperiencat])

    useEffect(() =>{
      if(edukimiRegistry.size <= 1) loadEdukimet();
    }, [edukimiRegistry.size, loadEdukimet])

    useEffect(() =>{
      if(gjuhaRegistry.size <= 1) loadGjuhet();
    }, [gjuhaRegistry.size, loadGjuhet])

    useEffect(() =>{
      if(projektiRegistry.size <= 1) loadProjektet();
    }, [projektiRegistry.size, loadProjektet])

    useEffect(() =>{
      if(publikimiRegistry.size <= 1) loadPublikimet();
    }, [publikimiRegistry.size, loadPublikimet])

    useEffect(() =>{
      if(certifikimiRegistry.size <= 1) loadCertifikimet();
    }, [certifikimiRegistry.size, loadCertifikimet])

    useEffect(() =>{
      if(mbikeqyresitemaveRegistry.size <= 1) loadMbikeqyresittemave();
    }, [mbikeqyresitemaveRegistry.size, loadMbikeqyresittemave])

    useEffect(() =>{
      if(honorandawardRegistry.size <= 1) loadHonorsandAwards();
    }, [honorandawardRegistry.size, loadHonorsandAwards])

    useEffect(() =>{
      if(specializimiRegistry.size <= 1) loadSpecializimet();
    }, [specializimiRegistry.size, loadSpecializimet])

    return(
        <>
          <div>
            <Header as='h2' icon textAlign='center' >
              <Icon name='address book' circular />
              <Header.Content>{emri} {mbiemri}</Header.Content>
              <Header.Content>CV Components</Header.Content>
            </Header>
          </div>

        <Header as='h2' icon textAlign='center' content='Anetaresite'/>
          <Table columns={7}>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>Insituti organizues</Table.HeaderCell>
                <Table.HeaderCell>Pozita</Table.HeaderCell>
                <Table.HeaderCell>Pershkrimi</Table.HeaderCell>
              </Table.Row>
            </Table.Header>

            <Table.Body>
              {anetaresite.map(anetaresia =>(
                 <>
                 {anetaresia.useriId === userid ? (
                      <TableRow key={(anetaresia.id)}>
                        <Table.Cell>{anetaresia.emriInstOrg}</Table.Cell>
                        <Table.Cell>{anetaresia.pozita}</Table.Cell>
                        <Table.Cell>{anetaresia.pershkrimi}</Table.Cell>
                      </TableRow>
                      ) : ('')}
                       </>
                    ))} 
            </Table.Body>
           </Table>     


          <Header as='h2' icon textAlign='center' content='Eksperiencat'/>
          <Table>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>Titulli</Table.HeaderCell>
                <Table.HeaderCell>Insituti organizues</Table.HeaderCell>
                <Table.HeaderCell>Lokacioni</Table.HeaderCell>
                <Table.HeaderCell>Data fillestare</Table.HeaderCell>
                <Table.HeaderCell>Data perfundimtare</Table.HeaderCell>
                <Table.HeaderCell>Pershkrimi</Table.HeaderCell>
                <Table.HeaderCell>Personi kontaktues</Table.HeaderCell>
                <Table.HeaderCell>Email</Table.HeaderCell>
                <Table.HeaderCell>Nr. tel.</Table.HeaderCell>
              </Table.Row>
            </Table.Header>

            <Table.Body>
              {eksperiencatByDate.map(eksperienca =>(
                 <>
                 {eksperienca.useriId === userid ? (
                      <TableRow key={(eksperienca.id)}>
                        <Table.Cell>{eksperienca.titulli}</Table.Cell>
                        <Table.Cell>{eksperienca.emriInstitucionit}</Table.Cell>
                        <Table.Cell>{eksperienca.lokacioni}</Table.Cell>
                        <Table.Cell>{format(eksperienca.dataFillestare!,'dd MMM yyyy')}</Table.Cell>
                        <Table.Cell>{format(eksperienca.dataPerfundimtare!,'dd MMM yyyy')}</Table.Cell>
                        <Table.Cell>{eksperienca.pershkrimi}</Table.Cell>
                        <Table.Cell>{eksperienca.personiKontaktues}</Table.Cell>
                        <Table.Cell>{eksperienca.email}</Table.Cell>
                        <Table.Cell>{eksperienca.numriTelefonit}</Table.Cell>
                      </TableRow>
                      ) : ('')}
                       </>
                    ))} 
            </Table.Body>
           </Table>     

           <Header as='h2' icon textAlign='center' content='Edukimi'/>
          <Table>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>Titulli</Table.HeaderCell>
                <Table.HeaderCell>Insituti organizues</Table.HeaderCell>
                <Table.HeaderCell>Fusha e studimit</Table.HeaderCell>
                <Table.HeaderCell>Lokacioni</Table.HeaderCell>
                <Table.HeaderCell>Data fillestare</Table.HeaderCell>
                <Table.HeaderCell>Data perfundimtare</Table.HeaderCell>
                <Table.HeaderCell>Pershkrimi</Table.HeaderCell>
              </Table.Row>
            </Table.Header>

            <Table.Body>
              {edukimetByDate.map(edukimi =>(
                 <>
                 {edukimi.useriId === userid ? (
                      <TableRow key={(edukimi.id)}>
                        <Table.Cell>{edukimi.titulli}</Table.Cell>
                        <Table.Cell>{edukimi.emri_i_Institucionit}</Table.Cell>
                        <Table.Cell>{edukimi.fusha_e_Studimit}</Table.Cell>
                        <Table.Cell>{edukimi.lokacioni}</Table.Cell>
                        <Table.Cell>{format(edukimi.dataFillestare!,'dd MMM yyyy')}</Table.Cell>
                        <Table.Cell>{format(edukimi.dataPerfundimtare!,'dd MMM yyyy')}</Table.Cell>
                        <Table.Cell>{edukimi.pershkrimi}</Table.Cell>
                      </TableRow>
                      ) : ('')}
                       </>
                    ))} 
            </Table.Body>
           </Table>     

           <Header as='h2' icon textAlign='center' content='Gjuhet'/>
          <Table>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>Gjuha</Table.HeaderCell>
                <Table.HeaderCell>Niveli i te folurit</Table.HeaderCell>
                <Table.HeaderCell>Niveli i te shkruarit</Table.HeaderCell>
              </Table.Row>
            </Table.Header>

            <Table.Body>
              {gjuhetByGjuha.map(gjuha =>(
                 <>
                 {gjuha.useriId === userid ? (
                      <TableRow key={(gjuha.id)}>
                        <Table.Cell>{gjuha.zgjedhGjuha}</Table.Cell>
                        <Table.Cell>{gjuha.folur}</Table.Cell>
                        <Table.Cell>{gjuha.shkruar}</Table.Cell>
                      </TableRow>
                      ) : ('')}
                       </>
                    ))} 
            </Table.Body>
           </Table>     

           <Header as='h2' icon textAlign='center' content='Projektet'/>
          <Table>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>Titulli</Table.HeaderCell>
                <Table.HeaderCell>Pershkrimi</Table.HeaderCell>
                <Table.HeaderCell>Lokacioni</Table.HeaderCell>
                <Table.HeaderCell>Data fillestare</Table.HeaderCell>
                <Table.HeaderCell>Data perfundimtare</Table.HeaderCell>
                <Table.HeaderCell>Buxheti</Table.HeaderCell>
                <Table.HeaderCell>Emri i klientit</Table.HeaderCell>
                <Table.HeaderCell>Insituti organizues</Table.HeaderCell>
              </Table.Row>
            </Table.Header>

            <Table.Body>
              {projektetByDate.map(projekti =>(
                 <>
                 {projekti.useriId === userid ? (
                      <TableRow key={(projekti.id)}>
                        <Table.Cell>{projekti.emriProjektit}</Table.Cell>
                        <Table.Cell>{projekti.pershkrimi}</Table.Cell>
                        <Table.Cell>{projekti.lokacioni}</Table.Cell>
                        <Table.Cell>{format(projekti.dataFillimit!,'dd MMM yyyy')}</Table.Cell>
                        <Table.Cell>{format(projekti.dataMbarimit!,'dd MMM yyyy')}</Table.Cell>
                        <Table.Cell>{projekti.buxheti}</Table.Cell>
                        <Table.Cell>{projekti.emriKlientit}</Table.Cell>
                        <Table.Cell>{projekti.institucioni}</Table.Cell>
                      </TableRow>
                      ) : ('')}
                       </>
                    ))} 
            </Table.Body>
           </Table>     

           <Header as='h2' icon textAlign='center' content='Publikimet'/>
          <Table>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>Titulli</Table.HeaderCell>
                <Table.HeaderCell>Eventi</Table.HeaderCell>
                <Table.HeaderCell>Data</Table.HeaderCell>
                <Table.HeaderCell>Lokacioni</Table.HeaderCell>
                <Table.HeaderCell>Statusi</Table.HeaderCell>
                <Table.HeaderCell>Lloji</Table.HeaderCell>
                <Table.HeaderCell>Institucioni</Table.HeaderCell>
                <Table.HeaderCell>Departamenti</Table.HeaderCell>
                <Table.HeaderCell>Lenda</Table.HeaderCell>
                <Table.HeaderCell>Kategoria</Table.HeaderCell>
                <Table.HeaderCell>Linku</Table.HeaderCell>
                <Table.HeaderCell>Volumi i faqeve</Table.HeaderCell>
                <Table.HeaderCell>Referenca</Table.HeaderCell>
              </Table.Row>
            </Table.Header>

            <Table.Body>
              {publikimetByDate.map(publikimi =>(
                 <>
                 {publikimi.useriId === userid ? (
                      <TableRow key={(publikimi.id)}>
                        <Table.Cell>{publikimi.titulli}</Table.Cell>
                        <Table.Cell>{publikimi.emertimiEvent}</Table.Cell>
                        <Table.Cell>{format(publikimi.data!,'MMM')} {format(publikimi.viti!,'yyyy')}</Table.Cell>
                        <Table.Cell>{publikimi.vendi}</Table.Cell>
                        <Table.Cell>{publikimi.statusi}</Table.Cell>
                        <Table.Cell>{publikimi.llojiPublikimit}</Table.Cell>
                        <Table.Cell>{publikimi.institucioni}</Table.Cell>
                        <Table.Cell>{publikimi.departamenti}</Table.Cell>
                        <Table.Cell>{publikimi.lenda}</Table.Cell>
                        <Table.Cell>{publikimi.kategoria}</Table.Cell>
                        <Table.Cell>{publikimi.linkuPublikimit}</Table.Cell>
                        <Table.Cell>{publikimi.volumiFaqeve}</Table.Cell>
                        <Table.Cell>{publikimi.referenca}</Table.Cell>
                      </TableRow>
                      ) : ('')}
                       </>
                    ))} 
            </Table.Body>
           </Table>     

           <Header as='h2' icon textAlign='center' content='Certifikimet'/>
          <Table>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>Titulli</Table.HeaderCell>
                <Table.HeaderCell>Emri i insitutit</Table.HeaderCell>
                <Table.HeaderCell>Lokacioni</Table.HeaderCell>
                <Table.HeaderCell>Data fillestare</Table.HeaderCell>
                <Table.HeaderCell>Data perfundimtare</Table.HeaderCell>
                <Table.HeaderCell>Pershkrimi</Table.HeaderCell>
              </Table.Row>
            </Table.Header>

            <Table.Body>
              {certifikimetByDate.map(certifikimi =>(
                 <>
                 {certifikimi.useriId === userid ? (
                      <TableRow key={(certifikimi.id)}>
                        <Table.Cell>{certifikimi.titulli}</Table.Cell>
                        <Table.Cell>{certifikimi.emri_Institucionit}</Table.Cell>
                        <Table.Cell>{certifikimi.lokacioni}</Table.Cell>
                        <Table.Cell>{format(certifikimi.dataFillestare!,'dd MMM yyyy')}</Table.Cell>
                        <Table.Cell>{format(certifikimi.dataPerfundimtare!,'dd MMM yyyy')}</Table.Cell>
                        <Table.Cell>{certifikimi.pershkrimi}</Table.Cell>
                      </TableRow>
                      ) : ('')}
                       </>
                    ))} 
            </Table.Body>
           </Table>     

           <Header as='h2' icon textAlign='center' content='Mbikeqyrja e temave'/>
          <Table>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>Titulli i temes</Table.HeaderCell>
                <Table.HeaderCell>Studenti</Table.HeaderCell>
                <Table.HeaderCell>Data</Table.HeaderCell>
                <Table.HeaderCell>Institucioni</Table.HeaderCell>
                <Table.HeaderCell>Fakulteti</Table.HeaderCell>
                <Table.HeaderCell>Niveli Akademik</Table.HeaderCell>
              </Table.Row>
            </Table.Header>

            <Table.Body>
              {mbikeqyresitemaveByStudenti.map(mbikeqyresiTemave =>(
                 <>
                 {mbikeqyresiTemave.useriId === userid ? (
                      <TableRow key={(mbikeqyresiTemave.id)}>
                        <Table.Cell>{mbikeqyresiTemave.titulliTemes}</Table.Cell>
                        <Table.Cell>{mbikeqyresiTemave.studenti}</Table.Cell>
                        <Table.Cell>{mbikeqyresiTemave.muaji} {format(mbikeqyresiTemave.viti!,'yyyy')}</Table.Cell>
                        <Table.Cell>{mbikeqyresiTemave.institucioni}</Table.Cell>
                        <Table.Cell>{mbikeqyresiTemave.fakulteti}</Table.Cell>
                        <Table.Cell>{mbikeqyresiTemave.niveliAkademik}</Table.Cell>
                      </TableRow>
                      ) : ('')}
                       </>
                    ))} 
            </Table.Body>
           </Table>     

           <Header as='h2' icon textAlign='center' content='Honors and awards'/>
          <Table>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>Titulli</Table.HeaderCell>
                <Table.HeaderCell>Data</Table.HeaderCell>
                <Table.HeaderCell>Institucioni</Table.HeaderCell>
                <Table.HeaderCell>Pozita</Table.HeaderCell>
              </Table.Row>
            </Table.Header>

            <Table.Body>
              {honorsandawardsByTitulli.map(handa =>(
                 <>
                 {handa.useriId === userid ? (
                      <TableRow key={(handa.id)}>
                        <Table.Cell>{handa.titulli}</Table.Cell>
                        <Table.Cell>{handa.muaji} {format(handa.viti!,'yyyy')}</Table.Cell>
                        <Table.Cell>{handa.institucioni}</Table.Cell>
                        <Table.Cell>{handa.pozita}</Table.Cell>
                      </TableRow>
                      ) : ('')}
                       </>
                    ))} 
            </Table.Body>
           </Table>     

           <Header as='h2' icon textAlign='center' content='Specializimi'/>
          <Table>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>Titulli</Table.HeaderCell>
                <Table.HeaderCell>Emri i insitutit</Table.HeaderCell>
                <Table.HeaderCell>Lokacioni</Table.HeaderCell>
                <Table.HeaderCell>Data fillestare</Table.HeaderCell>
                <Table.HeaderCell>Data perfundimtare</Table.HeaderCell>
                <Table.HeaderCell>Pershkrimi</Table.HeaderCell>
              </Table.Row>
            </Table.Header>

            <Table.Body>
              {specializimetByDate.map(specializimi =>(
                 <>
                 {specializimi.useriId === userid ? (
                      <TableRow key={(specializimi.id)}>
                        <Table.Cell>{specializimi.titulli}</Table.Cell>
                        <Table.Cell>{specializimi.emriInstitucionit}</Table.Cell>
                        <Table.Cell>{specializimi.lokacioni}</Table.Cell>
                        <Table.Cell>{format(specializimi.dataFillestare!,'dd MMM yyyy')}</Table.Cell>
                        <Table.Cell>{format(specializimi.dataFillestare!,'dd MMM yyyy')}</Table.Cell>
                        <Table.Cell>{specializimi.pershkrimi}</Table.Cell>
                      </TableRow>
                      ) : ('')}
                       </>
                    ))} 
            </Table.Body>
           </Table>     
      </>
    )})

    
      
 
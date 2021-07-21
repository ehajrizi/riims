
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
}

export default observer( function EkspoTable({userid}: Props)
{
    const history = useHistory();
    const {anetaresiaStore, modalStore, userStore} = useStore();
    const { anetaresite, deleteAnetaresia, updateAnetaresia, loading, anetaresiaRegistry, loadAnetaresite} = anetaresiaStore;
    // const { UserId} = userStore;

    const [target, setTarget] = useState('');

    useEffect(() =>{
      if(anetaresiaRegistry.size <= 1) loadAnetaresite();
    }, [anetaresiaRegistry.size, loadAnetaresite])

//     function handleUserDelete(e: SyntheticEvent<HTMLButtonElement>, email:string){
//       setTarget(e.currentTarget.name);  
//       deleteUser(email);
//   }
    return(
        <>
          <div>
            <Header as='h2' icon textAlign='center' >
              <Icon name='address book' circular />
              <Header.Content>CV Components</Header.Content>
            </Header>
          </div>

        
        <Header as='h2' icon textAlign='center' content='Anetaresite'/>
          <Table columns={7}>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>Id</Table.HeaderCell>
                <Table.HeaderCell>Emri i insitutit</Table.HeaderCell>
                <Table.HeaderCell>Pozita</Table.HeaderCell>
                <Table.HeaderCell>Pershkrimi</Table.HeaderCell>
                <Table.HeaderCell>UserId</Table.HeaderCell>
                <Table.HeaderCell>Edit Anetaresia</Table.HeaderCell>
                <Table.HeaderCell>Delete Anetaresia</Table.HeaderCell>
              </Table.Row>
            </Table.Header>

            <Table.Body>
              {anetaresite.map(anetaresia =>(
                 <>
                 {anetaresia.useriId === userid ? (
                      <TableRow key={(anetaresia.id)}>
                        <Table.Cell>{anetaresia.id}</Table.Cell>
                        <Table.Cell>{anetaresia.emriInstOrg}</Table.Cell>
                        <Table.Cell>{anetaresia.pozita}</Table.Cell>
                        <Table.Cell>{anetaresia.pershkrimi}</Table.Cell>
                        <Table.Cell>{anetaresia.useriId}</Table.Cell>
                        <Table.Cell>
                        <Button onClick={()=> modalStore.openModal(<AnetaresiaFormEdit anetaresia={anetaresia}/>)} className="btn" size='small'><Icon className='btnIcon' name='edit' /></Button>
                        </Table.Cell>
                        <TableCell>
                          {/* <Button name={user.email}
                            loading={loading && target === user.email}
                            onClick={(e) => handleUserDelete(e, user.email)} */}
                            <Button
                            className="btn"
                            size='small'>
                            <Icon className='btnIcon' name='trash' />
                          </Button>
                        </TableCell>
                      </TableRow>
                      ) : ('')}
                       </>
                    ))} 
            </Table.Body>
           </Table>     


           <Header as='h2' icon textAlign='center' content='Eksperiencat'/>
          <Table columns={7}>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>Id</Table.HeaderCell>
                <Table.HeaderCell>Emri i insitutit</Table.HeaderCell>
                <Table.HeaderCell>Pozita</Table.HeaderCell>
                <Table.HeaderCell>Pershkrimi</Table.HeaderCell>
                <Table.HeaderCell>UserId</Table.HeaderCell>
                <Table.HeaderCell>Edit Anetaresia</Table.HeaderCell>
                <Table.HeaderCell>Delete Anetaresia</Table.HeaderCell>
              </Table.Row>
            </Table.Header>

            <Table.Body>
              {anetaresite.map(anetaresia =>(
                 <>
                 {anetaresia.useriId === userid ? (
                      <TableRow key={(anetaresia.id)}>
                        <Table.Cell>{anetaresia.id}</Table.Cell>
                        <Table.Cell>{anetaresia.emriInstOrg}</Table.Cell>
                        <Table.Cell>{anetaresia.pozita}</Table.Cell>
                        <Table.Cell>{anetaresia.pershkrimi}</Table.Cell>
                        <Table.Cell>{anetaresia.useriId}</Table.Cell>
                        <Table.Cell>
                        <Button onClick={()=> modalStore.openModal(<AnetaresiaFormEdit anetaresia={anetaresia}/>)} className="btn" size='small'><Icon className='btnIcon' name='edit' /></Button>
                        </Table.Cell>
                        <TableCell>
                          {/* <Button name={user.email}
                            loading={loading && target === user.email}
                            onClick={(e) => handleUserDelete(e, user.email)} */}
                            <Button
                            className="btn"
                            size='small'>
                            <Icon className='btnIcon' name='trash' />
                          </Button>
                        </TableCell>
                      </TableRow>
                      ) : ('')}
                       </>
                    ))} 
            </Table.Body>
           </Table>     
      </>
    )})

    
      
 
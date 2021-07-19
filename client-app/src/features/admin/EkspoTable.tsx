
import { format } from 'date-fns';
import { observer } from 'mobx-react-lite';
import React, { SyntheticEvent, useState } from 'react'
import { Link, useHistory } from 'react-router-dom';
import { Button, Grid, Header, Icon, Table, TableCell, TableRow } from 'semantic-ui-react'
import { useStore } from '../../app/stores/store';
import AnetaresiaForm from '../anetaresite/form/AnetaresiaForm';
import AnetaresiaFormEdit from '../anetaresite/form/AnetaresiaFormEdit';
import EksperiencaForm from '../eksperiencat/form/EksperiencaForm';



export default observer( function EkspoTable()
{
    const history = useHistory();
    const {anetaresiaStore, modalStore} = useStore();
    const { anetaresite, deleteAnetaresia, updateAnetaresia, loading} = anetaresiaStore;

    const [target, setTarget] = useState('');

//     function handleUserDelete(e: SyntheticEvent<HTMLButtonElement>, email:string){
//       setTarget(e.currentTarget.name);  
//       deleteUser(email);
//   }
    return(
        <>
        <Grid>
          <Grid.Row style={{marginTop: '10px'}}>
                <Grid.Column width='15'>
                    <Header content='Users'/>
                </Grid.Column>
                <Grid.Column>
                    <Button onClick={() => modalStore.openModal(<AnetaresiaForm/>)} className="btn" >
                        <Icon className='btnIcon' name='plus' size='large' />
                    </Button>
                </Grid.Column>
          </Grid.Row>
          </Grid>

          {/* <Grid.Row style={{marginLeft: '20px', marginRight: '20px'}}> */}
          <Table singleLine columns={7}>
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
                      <TableRow key={(anetaresia.id)}>
                        <Table.Cell>{anetaresia.id}</Table.Cell>
                        <Table.Cell>{anetaresia.emriInstOrg}</Table.Cell>
                        {/* <Table.Cell><Link to="/hello">{user.emri}</Link></Table.Cell> */}
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
                    ))} 
            </Table.Body>
           </Table>     
      </>
    )})
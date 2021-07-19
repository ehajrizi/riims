
import { format } from 'date-fns';
import { observer } from 'mobx-react-lite';
import React, { SyntheticEvent, useState } from 'react'
import { Link, useHistory } from 'react-router-dom';
import { Button, Grid, Header, Icon, Input, Table, TableCell, TableRow } from 'semantic-ui-react'
import { useStore } from '../../app/stores/store';
import EksperiencaForm from '../eksperiencat/form/EksperiencaForm';
import EditUserForm from './components/EditUserForm';


export default observer( function UsersTable()
{
    const history = useHistory();
    const {userStore, modalStore} = useStore();
    const { userat, deleteUser, loading} = userStore;
    const [search, setSearch] = useState('');

    const [target, setTarget] = useState('');

    // return userat.filter(user => (
    //    user.emri?.toLowerCase().includes(search.toLowerCase())
    // ))

    function handleUserDelete(e: SyntheticEvent<HTMLButtonElement>, email:string){
      setTarget(e.currentTarget.name);  
      deleteUser(email);
  }
    return(
        <>
        <Grid>
          <Grid.Row style={{marginTop: '10px'}}>
                <Grid.Column width='15'>
                    <Header content='Users'/>
                </Grid.Column>
                <Grid.Column>
                    {/* {search} */}
                    {/* <Input type="text" placeholder="Search" onChange={e => setSearch(e.target.value) }/>
                    {filteredUsers.map((user, idx)=>(
                        <>
                          
                        </>
                    ) ) } */}
                </Grid.Column>
                <Grid.Column>
                    <Button onClick={() => modalStore.openModal(<EksperiencaForm/>)} className="btn" >
                        <Icon className='btnIcon' name='plus' size='large' />
                    </Button>
                </Grid.Column>
          </Grid.Row>
          </Grid>

          {/* <Grid.Row style={{marginLeft: '20px', marginRight: '20px'}}> */}
          <Table singleLine columns={16}>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>Image</Table.HeaderCell>
                <Table.HeaderCell>Title</Table.HeaderCell>
                <Table.HeaderCell>Name</Table.HeaderCell>
                <Table.HeaderCell>Middle Name</Table.HeaderCell>
                <Table.HeaderCell>Surname</Table.HeaderCell>
                <Table.HeaderCell>Gender</Table.HeaderCell>
                <Table.HeaderCell>Birthdate</Table.HeaderCell>
                <Table.HeaderCell>Birthplace</Table.HeaderCell>
                <Table.HeaderCell>Phone Number</Table.HeaderCell>
                <Table.HeaderCell>Current Address</Table.HeaderCell>
                <Table.HeaderCell>Description</Table.HeaderCell>
                <Table.HeaderCell>Role</Table.HeaderCell>
                <Table.HeaderCell>LinkedIn Account</Table.HeaderCell>
                <Table.HeaderCell>CV</Table.HeaderCell>
                <Table.HeaderCell>Edit User</Table.HeaderCell>
                <Table.HeaderCell>Delete User</Table.HeaderCell>
              </Table.Row>
            </Table.Header>

            <Table.Body>
            
              {userat.map(user =>(
                      <TableRow key={(user.email)}>
                        <Table.Cell>{user.image}</Table.Cell>
                        <Table.Cell>{user.titulliShkencor}</Table.Cell>
                        <Table.Cell><Link to="/hello">{user.emri}</Link></Table.Cell>
                        <Table.Cell>{user.emriMesem}</Table.Cell>
                        <Table.Cell>{user.mbiemri}</Table.Cell>
                        <Table.Cell>{user.gjinia}</Table.Cell>
                        <Table.Cell>{format(user.datelindja!,'dd MMM yyyy')}</Table.Cell>
                        <Table.Cell>{user.vendlindja},{user.shtetiLindjes}</Table.Cell>
                        <Table.Cell>{user.phoneNumber}</Table.Cell>
                        <Table.Cell>{user.rrugaCurrent}, {user.qytetiCurrent} {user.zipKodiCurrent}, {user.shtetiCurrent}</Table.Cell> 
                        <Table.Cell>{user.pershkrimi}</Table.Cell>
                        <Table.Cell>{user.roli}</Table.Cell>
                        <Table.Cell>{user.linkedIn}</Table.Cell>
                        <Table.Cell>CV</Table.Cell>
                        <Table.Cell>
                        <Button onClick={()=> modalStore.openModal(<EditUserForm usr={user}/>)} className="btn" size='small'><Icon className='btnIcon' name='edit' /></Button>
                        </Table.Cell>
                        <TableCell>
                          <Button name={user.email}
                            loading={loading && target === user.email}
                            onClick={(e) => handleUserDelete(e, user.email)}
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
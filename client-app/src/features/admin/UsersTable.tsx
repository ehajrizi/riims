
import { format } from 'date-fns';
import { observer } from 'mobx-react-lite';
import React, { SyntheticEvent, useEffect, useState } from 'react'
import { Link, useHistory } from 'react-router-dom';
import { Button, Header, Icon, Statistic, Table, TableCell, TableRow } from 'semantic-ui-react'
import LoadingComponent from '../../app/layout/LoadingComponents';
import { useStore } from '../../app/stores/store';
import EditUserForm from './components/EditUserForm';
import EkspoTable from './EkspoTable';


export default observer( function UsersTable()
{
    const {userStore, modalStore} = useStore();
    const { userat, deleteUser, loading, loadUsers,userRegistry} = userStore;
    const [target, setTarget] = useState('');

   useEffect(() =>{
     if(userRegistry.size <= 1) loadUsers();
   }, [userRegistry.size, loadUsers])
 
    function handleUserDelete(e: SyntheticEvent<HTMLButtonElement>, email:string){
      setTarget(e.currentTarget.name);  
      deleteUser(email);
   }

  if(userStore.loadingInitial) return <LoadingComponent content='Loading app'/>

    return(
        <>
        <div>
          <Header as='h2' icon textAlign='center' style={{marginTop: '70px'}}>
          <Statistic text-align='center'>
              <Statistic.Label>No. of members</Statistic.Label>
              <Statistic.Value>{userRegistry.size}</Statistic.Value>
            </Statistic> 
            <Icon name='users' circular />
            <Header.Content>Members</Header.Content>
          </Header>
        </div>

          <Table columns={16} style={{margin: '2px'}}>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>Id</Table.HeaderCell>
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
                        <Table.Cell>
                          <Button onClick={()=> modalStore.openModal(<EkspoTable userid={user.id} emri={user.emri!} mbiemri={user.mbiemri!}/>)} content={user.id}></Button>
                        </Table.Cell>
                        <Table.Cell>{user.titulliShkencor}</Table.Cell>
                        <Table.Cell>{user.emri}</Table.Cell>
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
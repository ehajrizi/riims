import React from 'react'
import { Header, Icon, Image, Menu, Segment, Sidebar } from 'semantic-ui-react'
import TableExampleSingleLine from './TableExampleSingleLine'

const SidebarExampleVisible = () => (
  <Sidebar.Pushable as={Segment} style={{marginTop: '3.7em',height:'59.5em'}} >
    <Sidebar
      as={Menu}
      animation='overlay'
      icon='labeled'
      vertical
      visible
      width='thin'
      style={{background: "#244082"}}>

        <Menu.Item as='a' className='menuitem' >
          <Header as='h3' style={{color: "white"}}>Users</Header>
        </Menu.Item>
        <Menu.Item as='a' className='menuitem'>
          <Header as='h3' style={{color: "white"}}>Manage Profile</Header>
        </Menu.Item>
        <Menu.Item as='a' className='menuitem'>
          <Header as='h3' style={{color: "white"}}>Users</Header>
        </Menu.Item>
    </Sidebar>
    <TableExampleSingleLine/>
  </Sidebar.Pushable>
            
  
)

export default SidebarExampleVisible
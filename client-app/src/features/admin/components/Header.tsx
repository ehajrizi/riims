import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Container, Menu, Segment, Image, Dropdown } from 'semantic-ui-react';
import "semantic-ui-css/semantic.min.css";
import { useStore } from '../../../app/stores/store';

export default function NavBar(props: any) {

    const { userStore: { user,logout, isLoggedIn} } = useStore();

    return (
        <div className='ui top inverted attached menu'>
            <Container>
                <Menu.Item position='left'>
                    <Image src="http://riims.ubt-uni.net/images/logo.png" size='tiny' circular as={NavLink} exact to='/home'/>
                </Menu.Item>
                <Menu.Item className='item link grey' name="Menu" position='left' onClick={props.onToggleMenu}/>
                <Menu.Item position='right'>
                    <Menu.Item as={NavLink} exact to='/home' name="Home" />
                    {isLoggedIn && user?.roli == "admin" ? (
                        <Menu.Item as={NavLink} exact to='/adminDashboard' name="Dashboard" />
                    ): null}
                    <Menu.Item as={NavLink} exact to='/cv' name="CV" />
                    <Menu.Item>
                    <Image src={user?.image || '/assets/user/png'} avatar spaced='right' />
                    <Dropdown pointing='top left' text={user?.emri+' '+user?.mbiemri}>
                        <Dropdown.Menu>
                            <Dropdown.Item as={NavLink} to={`/profile/${user?.emri}`} text='My Profile' icon='user' />
                            <Dropdown.Item onClick={logout} text='Logout' icon='power' />
                        </Dropdown.Menu>
                    </Dropdown>
                </Menu.Item>
                </Menu.Item>
            </Container>
        </div>
    )
}
import { observer } from 'mobx-react-lite';
import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Container, Menu, Segment, Image, Dropdown } from 'semantic-ui-react';
import { useStore } from '../stores/store';

export default observer(function NavBar() {
    const { userStore: { user, logout, isLoggedIn} } = useStore();
    return (
        <Menu inverted fixed='top'>
            <Container>
            {isLoggedIn ? (
                <Menu.Item position='left'>
                    <Image src="http://riims.ubt-uni.net/images/logo.png" size='tiny' circular as={NavLink} exact to='/home'/>
                </Menu.Item>
            ): null}
                <Menu.Menu position='right'>
                    {isLoggedIn ? (
                        <>
                        <Menu.Item as={NavLink} exact to='/home' name="Home" />
                        <Menu.Item as={NavLink} exact to='/cv' name="CV" />
                        </>
                    ): null}
                    {isLoggedIn && user?.roli == "admin" ? (
                        <Menu.Item as={NavLink} exact to='/adminDashboard' name="Dashboard" />
                    ): null}
                    <Menu.Item>
                    <Image src={user?.image || '/assets/user/png'} avatar spaced='right' />
                    <Dropdown pointing='top left' text={user?.emri+' '+user?.mbiemri}>
                        <Dropdown.Menu>
                            <Dropdown.Item as={NavLink} to={`/profile/${user?.emri}`} text='My Profile' icon='user' />
                            <Dropdown.Item onClick={logout} text='Logout' icon='power' />
                        </Dropdown.Menu>
                    </Dropdown>
                </Menu.Item>
                </Menu.Menu>
            </Container>
        </Menu>
    )
})
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
                <Menu.Item position='left'>
                    <Image src="http://riims.ubt-uni.net/images/logo.png" size='tiny' circular as={NavLink} exact to='/'/>
                </Menu.Item>
                <Menu.Menu position='right'>
                    <Menu.Item as={NavLink} exact to='/' name="Home" />
                    <Menu.Item as={NavLink} exact to='/cv' name="CV" />
                    {isLoggedIn && user?.roli == "simpleUser" ? (
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
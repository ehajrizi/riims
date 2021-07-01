import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Container, Menu, Segment, Image } from 'semantic-ui-react';

export default function NavBar() {

    return (
        <Menu inverted fixed='top'>
            <Container>
                <Menu.Item>
                    <Image src="http://riims.ubt-uni.net/images/logo.png" size='tiny' circular as={NavLink} exact to='/'/>
                </Menu.Item>
                <Menu.Menu position='right'>
                    <Menu.Item as={NavLink} exact to='/' name="Home" />
                    <Menu.Item as={NavLink} exact to='/cv' name="CV" />
                    <Menu.Item as={NavLink} exact to='/profili' name="Profile" />
                </Menu.Menu>
            </Container>
        </Menu>
    )
}
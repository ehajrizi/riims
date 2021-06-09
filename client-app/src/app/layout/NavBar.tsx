import React from 'react';
import { NavLink } from 'react-router-dom';
import { Button, Container, Menu, Image } from 'semantic-ui-react';

export default function NavBar(){
    return (
        <Menu inverted fixed='top'>
            <Container>
                <Menu.Item>
                    <Image src="http://riims.ubt-uni.net/images/logo.png" size='tiny' circular />
                </Menu.Item>
                <Menu.Menu position='right'>
                    <Menu.Item name="Home" />
                    <Menu.Item name="CV" />
                    <Menu.Item name="Profile" />
                    <Menu.Item>
                        <Button as={NavLink} to='/createEksperienca' content='Create Eks'/>
                        <Button as={NavLink} to='/createEdukimi' content='Create Edu'/>
                        <Button as={NavLink} to='/createPublikimi' content='Create Pub'/>
                    </Menu.Item>
                </Menu.Menu>
            </Container>
        </Menu>
    )
}
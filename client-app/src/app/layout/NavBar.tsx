import React from 'react';
import { Container, Menu, Segment, Image } from 'semantic-ui-react';

export default function NavBar() {

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
                </Menu.Menu>
            </Container>
        </Menu>
    )
}
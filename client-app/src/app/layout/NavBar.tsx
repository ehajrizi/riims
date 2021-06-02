import React from 'react';
import { Button, Container, Menu } from 'semantic-ui-react';

interface Props{
    openForm: () =>void;
    openFormEdukimi: () =>void;
    openFormSpecializimi: () =>void;
}
export default function NavBar({openForm, openFormEdukimi, openFormSpecializimi} : Props){
    return (
        <Menu inverted fixed='top'>
            <Container>
                <Menu.Item header>
                    <img src="../logo.png" alt="logo" style={{marginRight: '10px'}} />
                    RIIMS
                </Menu.Item>
                {/* <Menu.Item name='Eksperiencat'/> */}
                <Menu.Item>
                    <Button onClick={openForm} primary content='Profili'/>
                </Menu.Item>
                <Menu.Item>
                    <Button onClick={openForm} primary content='Eksperiencat'/>
                </Menu.Item>
                <Menu.Item>
                    <Button onClick={openFormEdukimi} primary content='Edukimi'/>
                </Menu.Item>
                <Menu.Item>
                    <Button onClick={openFormSpecializimi} primary content='Specializimet'/>
                </Menu.Item>
                <Menu.Item>
                    <Button onClick={openForm} primary content='Temat e mbikeqyrura'/>
                </Menu.Item>
                <Menu.Item>
                    <Button onClick={openForm} primary content='Publikimet'/>
                </Menu.Item>
            </Container>
        </Menu>
    )
}
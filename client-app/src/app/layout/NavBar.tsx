import React from 'react';
import { Button, Container, Menu } from 'semantic-ui-react';

interface Props{
    openFormEksperienca: () =>void;
    openFormEdukimi: () =>void;
    openFormSpecializimi: () =>void;
    openFormPublikimi: () => void;
    openFormProfili: () => void;
    openFormMbikeqyresiTemave: () => void;
}
export default function NavBar({openFormEksperienca, openFormEdukimi, openFormSpecializimi, openFormPublikimi, openFormProfili, openFormMbikeqyresiTemave} : Props){
    return (
        <Menu inverted fixed='top'>
            <Container>
                <Menu.Item header>
                    <img src="../logo.png" alt="logo" style={{marginRight: '10px'}} />
                    RIIMS
                </Menu.Item>
                {/* <Menu.Item name='Eksperiencat'/> */}
                <Menu.Item>
                    <Button onClick={openFormProfili} primary content='Profili'/>
                </Menu.Item>
                <Menu.Item>
                    <Button onClick={openFormEksperienca} primary content='Eksperiencat'/>
                </Menu.Item>
                <Menu.Item>
                    <Button onClick={openFormEdukimi} primary content='Edukimi'/>
                </Menu.Item>
                <Menu.Item>
                    <Button onClick={openFormSpecializimi} primary content='Specializimet'/>
                </Menu.Item>
                <Menu.Item>
                    <Button onClick={openFormMbikeqyresiTemave} primary content='Temat e mbikeqyrura'/>
                </Menu.Item>
                <Menu.Item>
                    <Button onClick={openFormPublikimi} primary content='Publikimet'/>
                </Menu.Item>
            </Container>
        </Menu>
    )
}
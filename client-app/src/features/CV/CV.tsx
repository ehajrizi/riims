import { observer } from 'mobx-react-lite';
import React from "react";
import { Grid, Header, Segment, List, Button, Card } from "semantic-ui-react";
import NavBar from "../../app/layout/NavBar";
import { useStore } from '../../app/stores/store';
import AnetaresiaCvList from '../anetaresite/cvList/AnetaresiaCvList';
import EdukimiCvList from '../edukimet/cvList/EdukimiCvList';
import EksperiencaCvList from '../eksperiencat/cvList/EksperiencaCvList';
import CertifikimiCvList from '../certifikimet/cvList/CertifikimiCvList';
import PublikimiCvList from '../Publikimet/cvList/PublikimiCvList';
import { User } from '../../app/models/user';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

interface Props {
    user: User;
}

export default observer(function CV({user}: Props) {

    const {userStore, eksperiencaStore, edukimiStore, anetaresiaStore, certifikimiStore, publikimiStore} = useStore();
    const {eksperiencatByDate} = eksperiencaStore;
    const {edukimetByDate} = edukimiStore;
    const {anetaresiteByEmriInstOrg} = anetaresiaStore;
    const {certifikimetByDate} = certifikimiStore;
    const {publikimetByDate} = publikimiStore;

    
    function printCV () {
        const input = document.getElementById('pdf');
        html2canvas(input!)
            .then((canvas) => {
        var imgData = canvas.toDataURL('image/png');
        var imgWidth = 205; 
        var pageHeight = 295;  
        var imgHeight = canvas.height * imgWidth / canvas.width;
        var heightLeft = imgHeight;
        var doc = new jsPDF('p', 'mm');
        var position = 0;

        doc.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
        heightLeft -= pageHeight;

        while (heightLeft >= 0) {
            position = heightLeft - imgHeight;
            doc.addPage();
            doc.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
            heightLeft -= pageHeight;
        }
        doc.save( 'CV-download.pdf')});
    }


    return (
        <>
            <Segment className={'navbar'} style={{ marginBottom: '5em' }}>
                <NavBar />
            </Segment>
            <Button content='Save as PDF' onClick={printCV} size='massive' floated='right' primary ></Button>

            {userStore.isLoggedIn ? (
            <div id='pdf' >
                <Segment  className='segment-style'>
                <Grid columns={2} relaxed='very'>
                        <Grid.Column >
                            <Header as='h2' icon='user circle'>Jane Doe</Header>
                        </Grid.Column>
                        <Grid.Column>
                            <List>
                            <List.Item icon='marker' content='Prishtina' />
                            <List.Item icon='phone' content='044111222' />
                            <List.Item
                                icon='mail'
                                content={<a href='mailto:janedoe@test.com'>janedoe@test.com</a>}
                            />
                            <List.Item
                                icon='linkify'
                                content={<a href='www.lindkedin.com'>linkedin.com</a>}
                            />
                            </List>
                        </Grid.Column>
                    </Grid>
                </Segment>

                <Segment className='segment-style'>
                    <Header as='h3' style={{ color: 'teal'}}>Education</Header>
                    
                    {edukimetByDate.map(edukimi => (
                        <>
                            {edukimi.useriId === userStore.UserId ? (
                                <EdukimiCvList key={edukimi.id} edukimi={edukimi} />
                            ) : ('')}
                        </>
                    ))}

                </Segment>
            
                <Segment className='segment-style'>
                    <Header as='h3' style={{ color: 'teal'}}>Experiences</Header>
                    
                    {eksperiencatByDate.map(eksperienca => (
                        <>
                            {eksperienca.useriId === userStore.UserId ? (
                                <EksperiencaCvList key={eksperienca.id} eksperienca={eksperienca} />
                            ) : ('')}
                        </>
                    ))}

                </Segment>

                <Segment  className='segment-style'>
                    <Header as='h3' style={{ color: 'teal'}}>Membership</Header>

                    {anetaresiteByEmriInstOrg.map(anetaresia => (
                        <>
                            {anetaresia.useriId === userStore.UserId ? (
                                <AnetaresiaCvList key={anetaresia.id} anetaresia={anetaresia} />
                            ) : ('')}
                        </>
                    ))}

                </Segment>

                <Segment  className='segment-style'>
                    <Header as='h3' style={{ color: 'teal'}}>Certificates</Header>

                    {certifikimetByDate.map(certifikimi => (
                        <>
                            {certifikimi.useriId === userStore.UserId ? (
                                <CertifikimiCvList key={certifikimi.id} certifikimi={certifikimi} />
                            ) : ('')}
                        </>
                    ))}

                </Segment>

                <Segment  className='segment-style'>
                    <Header as='h3' style={{ color: 'teal'}}>Publications</Header>
                    
                    {publikimetByDate.map(publikimi => (
                        <>
                            {publikimi.useriId === userStore.UserId ? (
                                <PublikimiCvList key={publikimi.id} publikimi={publikimi} />
                            ) : ('')}
                        </>
                    ))}

                </Segment>
                   
            </div> 
            ) : ('')}
        </>
    )
})


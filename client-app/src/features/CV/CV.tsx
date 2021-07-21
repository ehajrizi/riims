import { observer } from 'mobx-react-lite';
import React from "react";
import { Grid, Header, Segment, List, Button, Card } from "semantic-ui-react";
import NavBar from "../../app/layout/NavBar";
import { useStore } from '../../app/stores/store';
import AnetaresiaCvList from '../anetaresite/cvList/AnetaresiaCvList';
import EdukimiCvList from '../edukimet/cvList/EdukimiCvList';
import EksperiencaCvList from '../eksperiencat/cvList/EksperiencaCvList';
import GjuhaCvList from '../gjuhet/cvList/GjuhaCvList';
import SpecializimiCvList from '../specializimet/cvList/SpecializimiCvList';
import HonorsAndAwardsCvList from '../honorsandawards/cvList/HonorsAndAwardsCvList';
import CertifikimiCvList from '../certifikimet/cvList/CertifikimiCvList';
import PublikimiCvList from '../Publikimet/cvList/PublikimiCvList';
import ProjektiCvList from '../projektet/cvList/ProjektiCvList';
import { User } from '../../app/models/user';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import ProfiliCv from '../profile/cvProfile/profiliCv';

interface Props {
    user: User;
}

export default observer(function CV({user}: Props) {

    const {userStore, eksperiencaStore, edukimiStore, specializimiStore, gjuhaStore, anetaresiaStore, honorandawardStore, certifikimiStore, publikimiStore, pjesemarresiStore, projektiStore} = useStore();
    const {eksperiencatByDate} = eksperiencaStore;
    const {edukimetByDate} = edukimiStore;
    const {specializimetByDate} = specializimiStore;
    const {gjuhetByGjuha} = gjuhaStore;
    const {anetaresiteByEmriInstOrg} = anetaresiaStore;
    const {honorsandawardsByTitulli} = honorandawardStore;
    const {certifikimetByDate} = certifikimiStore;
    const {publikimetByDate} = publikimiStore;
    const {projektetByDate} = projektiStore;

    
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
                    <ProfiliCv  user={userStore.UserLoggedIn!}/>
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
            
            
                <Segment  className='segment-style'>
                    <Header as='h3' style={{ color: 'teal'}}>Specialization</Header>
                    
                    {specializimetByDate.map(specializimi => (
                        <>
                            {specializimi.useriId === userStore.UserId ? (
                                <SpecializimiCvList key={specializimi.id} specializimi={specializimi} />
                            ) : ('')}
                        </>
                    ))}

                </Segment>
                    
                <Segment  className='segment-style'>
                    <Header as='h3' style={{ color: 'teal'}}>Languages</Header>
                    
                    {gjuhetByGjuha.map(gjuha => (
                        <>
                            {gjuha.useriId === userStore.UserId ? (
                                <GjuhaCvList key={gjuha.id} gjuha={gjuha} />
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
                    <Header as='h3' style={{ color: 'teal'}}>Honors & Awards</Header>
                    
                    {honorsandawardsByTitulli.map(honorandaward => (
                        <>
                            {honorandaward.useriId === userStore.UserId ? (
                                <HonorsAndAwardsCvList key={honorandaward.id} honorandaward={honorandaward} />
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

                <Segment  className='segment-style'>
                    <Header as='h3' style={{ color: 'teal'}}>Projects</Header>

                    {projektetByDate.map(projekti => (
                        <>
                            {projekti.useriId === userStore.UserId ? (
                                <ProjektiCvList key={projekti.id} projekti={projekti} />
                            ) : ('')}
                        </>
                    ))}

                </Segment>
                   
            </div> 
            ) : ('')}
        </>
    )
})


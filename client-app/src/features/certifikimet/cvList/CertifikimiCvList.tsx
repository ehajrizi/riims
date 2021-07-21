import { format } from 'date-fns';
import { observer } from 'mobx-react-lite';
import { useEffect } from 'react';
import {Table } from 'semantic-ui-react';
import { Certifikimi } from '../../../app/models/certifikimi';
import { useStore } from '../../../app/stores/store';

interface Props{
    certifikimi: Certifikimi
}

export default observer(function CertifikimiCvList({certifikimi} : Props)
{
    const {certifikimiStore} = useStore();
    const {loadCertifikimet, certifikimiRegistry} = certifikimiStore;
 
    useEffect(() => {
       if (certifikimiRegistry.size <= 1) loadCertifikimet();
    }, [certifikimiRegistry.size, loadCertifikimet])

    return (
        <>
            <Table celled fixed singleLine>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell colspan='3' width={8  } style={{fontSize: '20px'}}>{certifikimi.titulli}</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    <Table.Row>
                        <Table.Cell><b>Institution attended, Location</b><br/>{certifikimi.emri_Institucionit}, {certifikimi.lokacioni} </Table.Cell>
                        <Table.Cell><b>Title</b><br/>{certifikimi.titulli} </Table.Cell>
                        <Table.Cell><b>Attended from (Mo./Yr.) to (Mo./Yr.)</b><br/>{format(certifikimi.dataFillestare!,'dd MMM yyyy')} - {format(certifikimi.dataPerfundimtare!,'dd MMM yyyy')} </Table.Cell>        
                    </Table.Row>
                </Table.Body>
            </Table>
        </> 
    )
})
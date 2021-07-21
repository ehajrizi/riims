import { format } from 'date-fns';
import { observer } from 'mobx-react-lite';
import { useEffect } from 'react';
import {Table } from 'semantic-ui-react';
import { Eksperienca } from '../../../app/models/eksperienca';
import { useStore } from '../../../app/stores/store';

interface Props{
    eksperienca: Eksperienca
}

export default observer(function EksperiencaCvList({eksperienca} : Props)
{
    const {eksperiencaStore} = useStore();
    const {loadEksperiencat,eksperiencaRegistry} = eksperiencaStore;
 
    useEffect(() =>{
    if(eksperiencaRegistry.size <= 1) loadEksperiencat();
    }, [eksperiencaRegistry.size, loadEksperiencat])
    
    return (
        <>
        
            <Table celled fixed singleLine>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell colspan='3' width={8  } style={{fontSize: '20px'}}>{eksperienca.titulli}</Table.HeaderCell>
                        
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    <Table.Row>
                        <Table.Cell><b>Company Name</b><br/>{eksperienca.emriInstitucionit} </Table.Cell>
                        <Table.Cell><b>Location</b><br/>{eksperienca.lokacioni} </Table.Cell>
                        <Table.Cell><b>Employed from (Mo./Yr.) to (Mo./Yr.)</b><br/>{format(eksperienca.dataFillestare!,'dd MMM yyyy')} - {format(eksperienca.dataPerfundimtare!,'dd MMM yyyy')} </Table.Cell>
                        
                    </Table.Row>
                    
                    <Table.Row>
                        <Table.Cell><b>Job Title</b><br/>{eksperienca.titulli} </Table.Cell>
                        <Table.Cell><b>Job Description</b><br/>{eksperienca.pershkrimi} </Table.Cell>
                        <Table.Cell><b>Contact Number</b><br/>{eksperienca.numriTelefonit} </Table.Cell>
                    </Table.Row>
                </Table.Body>
            </Table>
        </> 
    )
})
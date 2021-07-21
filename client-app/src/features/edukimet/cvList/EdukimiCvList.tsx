import { format } from 'date-fns';
import { observer } from 'mobx-react-lite';
import { useEffect } from 'react';
import {Table } from 'semantic-ui-react';
import { Edukimi } from '../../../app/models/edukimi';
import { useStore } from '../../../app/stores/store';

interface Props{
    edukimi: Edukimi
}

export default observer(function EdukimiCvList({edukimi} : Props)
{
    const {edukimiStore} = useStore();
    const {loadEdukimet,edukimiRegistry} = edukimiStore;

    useEffect(() =>{
        if(edukimiRegistry.size <= 1) loadEdukimet();
    }, [edukimiRegistry.size, loadEdukimet])
    
    return (
        <>
            <Table celled fixed singleLine>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell colspan='3' width={8  } style={{fontSize: '20px'}}>{edukimi.titulli}</Table.HeaderCell>                        
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    <Table.Row>
                        <Table.Cell><b>Institution attended, Location</b><br/>{edukimi.emri_i_Institucionit}, {edukimi.lokacioni} </Table.Cell>
                        <Table.Cell><b>Field of Study</b><br/>{edukimi.fusha_e_Studimit} </Table.Cell>
                        <Table.Cell><b>Attended from (Mo./Yr.) to (Mo./Yr.)</b><br/>{format(edukimi.dataFillestare!,'dd MMM yyyy')} - {format(edukimi.dataPerfundimtare!,'dd MMM yyyy')} </Table.Cell>        
                    </Table.Row>
                </Table.Body>
            </Table>
        </> 
    )
})
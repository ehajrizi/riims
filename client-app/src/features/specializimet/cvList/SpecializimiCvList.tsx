import { format } from 'date-fns';
import { observer } from 'mobx-react-lite';
import { useEffect } from 'react';
import {Table } from 'semantic-ui-react';
import { Specializimi } from '../../../app/models/specializimi';
import { useStore } from '../../../app/stores/store';

interface Props{
    specializimi: Specializimi
}

export default observer(function SpecializimiCvList({specializimi} : Props)
{
    const {specializimiStore} = useStore();
    const {loadSpecializimet, specializimiRegistry} = specializimiStore;
 
    useEffect(() => {
       if (specializimiRegistry.size <= 1) loadSpecializimet();
    }, [specializimiRegistry.size, loadSpecializimet])

    return (
        <>
            <Table celled fixed singleLine>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell colspan='3' width={8  } style={{fontSize: '20px'}}>{specializimi.titulli}</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    <Table.Row>
                        <Table.Cell><b>Institution attended, Location</b><br/>{specializimi.emriInstitucionit}, {specializimi.lokacioni} </Table.Cell>
                        <Table.Cell><b>Title</b><br/>{specializimi.titulli} </Table.Cell>
                        <Table.Cell><b>Attended from (Mo./Yr.) to (Mo./Yr.)</b><br/>{format(specializimi.dataFillestare!,'dd MMM yyyy')} - {format(specializimi.dataPerfundimtare!,'dd MMM yyyy')} </Table.Cell>        
                    </Table.Row>
                </Table.Body>
            </Table>
        </> 
    )
})
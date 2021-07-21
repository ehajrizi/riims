import { format } from 'date-fns';
import { observer } from 'mobx-react-lite';
import { useEffect } from 'react';
import {Table } from 'semantic-ui-react';
import { HonorandAward } from '../../../app/models/honorandaward';
import { useStore } from '../../../app/stores/store';

interface Props{
    honorandaward: HonorandAward
}

export default observer(function HonorsAndAwardsCvList({honorandaward} : Props)
{
    const {honorandawardStore} = useStore();
    const {loadHonorsandAwards, honorandawardRegistry } = honorandawardStore;

    useEffect(() =>{
    if(honorandawardRegistry.size <=1 ) loadHonorsandAwards();
    }, [honorandawardRegistry.size, honorandawardStore])

    return (
        <>
            <Table celled fixed singleLine>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell colspan='3' width={8 } style={{fontSize: '20px'}}>{honorandaward.titulli}</Table.HeaderCell>                        
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    <Table.Row>
                        <Table.Cell><b>Issuer</b><br/>{honorandaward.institucioni}</Table.Cell>
                        <Table.Cell><b>Month, Year</b><br/>{honorandaward.muaji}, {format(honorandaward.viti!,'yyyy')}</Table.Cell>
                        <Table.Cell><b>Description</b><br/>{honorandaward.pozita}</Table.Cell>        
                    </Table.Row>
                </Table.Body>
            </Table>
        </> 
    )
})
import { format } from 'date-fns';
import { observer } from 'mobx-react-lite';
import { useEffect } from 'react';
import {Table } from 'semantic-ui-react';
import { Anetaresia } from '../../../app/models/anetaresia';
import { useStore } from '../../../app/stores/store';

interface Props{
    anetaresia: Anetaresia
}

export default observer(function AnetaresiaCvList({anetaresia} : Props)
{
    const {anetaresiaStore} = useStore();
    const {loadAnetaresite, anetaresiaRegistry} = anetaresiaStore;
 
    useEffect(() => {
       if (anetaresiaRegistry.size <= 1) loadAnetaresite();
    }, [anetaresiaRegistry.size, loadAnetaresite])


    return (
        <>
            <Table celled fixed singleLine>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell colspan='2' width={8} style={{fontSize: '20px'}}>{anetaresia.pozita}</Table.HeaderCell>                        
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    <Table.Row>
                        <Table.Cell><b>Institution</b><br/>{anetaresia.emriInstOrg}</Table.Cell>
                        <Table.Cell><b>Description</b><br/>{anetaresia.pershkrimi} </Table.Cell>
                    </Table.Row>
                </Table.Body>
            </Table>
        </> 
    )
})
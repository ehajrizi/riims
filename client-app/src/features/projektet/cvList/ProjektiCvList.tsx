import { format } from 'date-fns';
import { observer } from 'mobx-react-lite';
import { useEffect } from 'react';
import {Table } from 'semantic-ui-react';
import { Projekti } from '../../../app/models/projekti';
import { useStore } from '../../../app/stores/store';

interface Props{
    projekti: Projekti
}

export default observer(function ProjektiCvList({projekti} : Props)
{
    const { projektiStore } = useStore();
    const { loadProjektet, projektiRegistry } = projektiStore;

    useEffect(() => {
        if (projektiRegistry.size <= 1) loadProjektet();
    }, [projektiRegistry.size, loadProjektet])

    return (
        <>
            <Table celled fixed singleLine>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell  width={8} style={{fontSize: '20px'}}>{projekti.emriProjektit}</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    <Table.Row>
                        <Table.Cell> {projekti.pershkrimi}, {projekti.lokacioni}, {format(projekti.dataFillimit!, 'yyyy')}-{format(projekti.dataMbarimit!, 'yyyy')}</Table.Cell>             
                    </Table.Row>
                </Table.Body>
            </Table>
        </> 
    )
})
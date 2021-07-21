import { format } from 'date-fns';
import { observer } from 'mobx-react-lite';
import { useEffect } from 'react';
import {Table } from 'semantic-ui-react';
import { Pjesemarresi } from '../../../app/models/pjesemarresi';
import { Publikimi } from '../../../app/models/publikimi';
import { useStore } from '../../../app/stores/store';

interface Props{
    publikimi: Publikimi,
}

export default observer(function PublikimiCvList({publikimi} : Props)
{
    const {publikimiStore} = useStore();
    const {loadPublikimet,publikimiRegistry} = publikimiStore;
 
    useEffect(() =>{
        if(publikimiRegistry.size <= 1) loadPublikimet();
    }, [publikimiRegistry.size, loadPublikimet])

    return (
        <>
            <Table celled fixed singleLine>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell  width={8} style={{fontSize: '20px'}}>{publikimi.titulli}</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    <Table.Row>
                        <Table.Cell>{publikimi.autorKryesor},  {format(publikimi.data!, 'MMM')}/{format(publikimi.viti!, 'yyyy')}</Table.Cell>
                               
                    </Table.Row>
                </Table.Body>
            </Table>
        </> 
    )
})
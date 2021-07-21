import { format } from 'date-fns';
import { observer } from 'mobx-react-lite';
import { useEffect } from 'react';
import {Table } from 'semantic-ui-react';
import { Gjuha } from '../../../app/models/gjuha';
import { useStore } from '../../../app/stores/store';

interface Props{
    gjuha: Gjuha
}

export default observer(function GjuhaCvList({gjuha} : Props)
{
    const {gjuhaStore} = useStore();
    const {loadGjuhet,gjuhaRegistry} = gjuhaStore;

    useEffect(() =>{
        if(gjuhaRegistry.size <= 1) loadGjuhet();
    }, [gjuhaRegistry.size, loadGjuhet])
    return (
        <>
            <Table celled fixed singleLine>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell colspan='2' width={8  } style={{fontSize: '20px'}}>{gjuha.zgjedhGjuha}</Table.HeaderCell>                        
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    <Table.Row>
                        <Table.Cell><b>Speaking Level</b><br/>{gjuha.folur}</Table.Cell>
                        <Table.Cell><b>Writing Level</b><br/>{gjuha.shkruar}</Table.Cell>        
                    </Table.Row>
                </Table.Body>
            </Table>
        </> 
    )
})
import React from 'react';
import { Button, Item, Label, Segment } from 'semantic-ui-react';
import { Eksperienca } from '../../../app/models/eksperienca';

interface Props
{
    eksperiencat: Eksperienca[];
    selectEksperienca: (id:string) => void;
    deleteEksperienca: (id: string) => void;
}

export default function EksperiencaDashboard({eksperiencat,selectEksperienca,deleteEksperienca}:Props)
{
    const [checked, setChecked] = React.useState(true);
    return(
        <Segment>
            <Item.Group divided>
                {eksperiencat.map(eksperienca =>(
                    <Item key={eksperienca.id}>
                        <Item.Content>
                            <Item.Header as='a'>{eksperienca.titulli}</Item.Header>
                            <Item.Meta>{eksperienca.emriInstitucionit},{eksperienca.lokacioni}</Item.Meta>
                            <Label value='Pune Primare:'/>
                            <input type='checkbutton' id='punePrimareButton' checked={checked}/>
                            <Button onClick={() => {setChecked(old => !old)}}> {checked ? 'uncheck' : 'check'} </Button>
                            <Item.Meta>{eksperienca.dataFillestare}</Item.Meta>
                            <Item.Meta>{eksperienca.dataPerfundimtare}</Item.Meta>
                            <Item.Description>
                                <div>{eksperienca.pershkrimi}</div>
                                <div>{eksperienca.personiKontaktues}</div>
                                <div>{eksperienca.numriTelefonit}</div>
                            </Item.Description>
                            <Item.Extra>
                                <Button onClick={() => selectEksperienca(eksperienca.id)} floated='right' content='View' color='blue'/>
                                <Button onClick={() => deleteEksperienca(eksperienca.id)} floated='right' content='Delete' color='red'/>
                            </Item.Extra>
                        </Item.Content>
                    </Item>
                ))}
            </Item.Group>
        </Segment>
    )
}

 
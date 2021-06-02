import React from 'react';
import { Button, Card, Image } from 'semantic-ui-react';
import { Profili } from '../../../app/models/profili';


interface Props{
    profili: Profili
    cancelSelectedProfili :()=>void;
    openFormProfili: (id:string) => void;
}

export default function ProfiliDetails ({profili,cancelSelectedProfili, openFormProfili}:Props) {
    return (
        <Card fliud> 
        {/* <Image src={`/assets/categoryImages/${profili.category}.jpg`} />  */}
        <Card.Content>
          <Card.Header>{profili.Emri},{profili.EmriIMesem},{profili.Mbiemri}</Card.Header>
          {/* <Card.Meta>
            <span>{profili.date}</span>
          </Card.Meta> */}
          <Card.Description>
            {profili.VendiILindjes},{profili.ShtetiILindjes},{profili.DataELindjes},{profili.NrTelefonit}
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
           <Button.Group width ='2'> 
                <Button onClick={()=>openFormProfili(profili.id)} basic color='blue' content ='Edit'/> 
                <Button onClick={cancelSelectedProfili} basic color='grey' content ='Cancel'/> 
           
           </Button.Group>
        </Card.Content>
      </Card>    

    )
}
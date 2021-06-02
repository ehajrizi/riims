import React from 'react';
import { Button, Item, Segment } from 'semantic-ui-react';
import { Profili } from '../../../app/models/profili';



interface Props {
    profilet: Profili[];
    selectProfili: (id: string) => void;
}

export default function ProfiliList({ profilet, selectProfili}: Props) {
    return (
        <Segment>

            <Item.Group devided>

                {profilet.map(profili => (
                    <Item key={profili.id}>
                        <Item.Content>

                            {/* <Item.Photo> 
                                const ImageExampleCircular = () => (
                                 <Image src='https://react.semantic-ui.com/images/wireframe/square-image.png' size='medium' circular />
                                )

                                export default ImageExampleCircular
                                 )

                                <img src="https://react.semantic-ui.com/images/wireframe/square-image.png" class="ui medium circular image"/>

                            </Item.Photo> */}


                            <Item.Header as='a'> Profili im </Item.Header>

                            <Item.Description>
                                <div>{profili.titulliShkencor}</div>
                                <div>{profili.emri}</div>
                                <div>{profili.emriIMesem}</div>
                                <div>{profili.mbiemri}</div>
                                <div>{profili.dataELindjes}</div>
                                <div>{profili.vendiILindjes}</div>
                                <div>{profili.shtetiILindjes}</div>
                                <div>{profili.nrTelefonit}</div>
                                <div>{profili.gjinia}</div>


                            </Item.Description>

                            <Item.Extra>
                                <Button onClick={() => selectProfili(profili.id)} floated='right' content='View' color='blue' />
                            </Item.Extra>
                        </Item.Content>
                    </Item>
                ))}
            </Item.Group>
        </Segment>
    )
}
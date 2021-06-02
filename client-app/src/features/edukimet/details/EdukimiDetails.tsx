import React from "react";
import { Button, Card, Image } from "semantic-ui-react";
import { Edukimi } from "../../../app/models/edukimi";

interface Props {
  edukimi: Edukimi;
  cancelSelectEdukimi: () => void;
  openFormEdukimi: (id: string) => void;
}

export default function EdukimiDetails({
  edukimi,
  cancelSelectEdukimi,
  openFormEdukimi,
}: Props) {
  return (
    <Card fluid>
      <Card.Content>
        <Card.Header>{edukimi.emri_i_Institucionit}</Card.Header>
        <Card.Meta>
          <span>{edukimi.titulli} - {edukimi.fusha_e_Studimit}</span>
        </Card.Meta>
        <Card.Description>
          <div>
            {edukimi.pershkrimi}
          </div>
          <div>
            {edukimi.lokacioni}
          </div>
          <div>
            {edukimi.dataFillestare} - {edukimi.dataPerfundimtare}
          </div>
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <Button.Group widths="2">
          <Button
            onClick={() => openFormEdukimi(edukimi.id)}
            basic
            color="blue"
            content="Edit"
          />
          <Button
            onClick={cancelSelectEdukimi}
            basic
            color="grey"
            content="Cancel"
          />
        </Button.Group>
      </Card.Content>
    </Card>
  );
}

import format from "date-fns/format";
import { observer } from "mobx-react-lite";
import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { Button, Card } from "semantic-ui-react";
import LoadingComponent from "../../../app/layout/LoadingComponents";
import { useStore } from "../../../app/stores/store";

export default observer(function EdukimiDetails() {

    const {edukimiStore} = useStore();
    const {selectedEdukimi: edukimi, loadEdukimi, loadingInitial} = edukimiStore;
    const {id} = useParams<{id: string}>();

    useEffect(() => {
        if(id) loadEdukimi(id);
    },[id,loadEdukimi])

    if(loadingInitial || !edukimi) return <LoadingComponent/>;

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
          <span>{format(edukimi.dataFillestare!,'dd MMM yyyy')} - {format(edukimi.dataPerfundimtare!,'dd MMM yyyy')}</span>
          </div>
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <Button.Group widths="2">
          <Button as={Link} to={`/manageEdukimi/${edukimi.id}`} basic color='blue' content='Edit'/>
          <Button as={Link} to='/edukimet' basic color='grey' content='Cancel'/>
        </Button.Group>
      </Card.Content>
    </Card>
  );
})

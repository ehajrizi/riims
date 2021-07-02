import { observer } from "mobx-react-lite";
import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { Button, Card } from "semantic-ui-react";
import LoadingComponent from "../../../app/layout/LoadingComponents";
import { useStore } from "../../../app/stores/store";

export default observer(function GjuhaDetails() {

    const {gjuhaStore} = useStore();
    const {selectedGjuha: gjuha, loadGjuha, loadingInitial} = gjuhaStore;
    const {id} = useParams<{id: string}>();

    useEffect(() => {
        if(id) loadGjuha(id);
    },[id,loadGjuha])

    if(loadingInitial || !gjuha) return <LoadingComponent/>;

  return (
    <Card fluid>
      <Card.Content>
        <Card.Header style={{fontWeight: 'bold'}}>{gjuha.zgjedhGjuha}<br /></Card.Header>
        <Card.Description>
          <span style={{fontWeight: 'bold'}}>Ne te folur: </span> {gjuha.folur}
        </Card.Description>
        <Card.Description>
          <span style={{fontWeight: 'bold'}}>Ne te shkruar: </span> {gjuha.shkruar}
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <Button.Group widths="2">
          <Button as={Link} to={`/manageGjuha/${gjuha.id}`} basic color='blue' content='Edit'/>
          <Button as={Link} to='/gjuhet' basic color='grey' content='Cancel'/>
        </Button.Group>
      </Card.Content>
    </Card>
  );
})

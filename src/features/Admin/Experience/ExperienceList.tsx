import { observer } from "mobx-react";
import React, { useContext } from "react";
import { Button, Header, Segment, Table } from "semantic-ui-react";
import { IExperienceFormValues } from "../../../app/models/experience";
import { RootStoreContext } from "../../../app/stores/rootStore";
import { history } from '../../../index';

interface IProps {
    experienceList: IExperienceFormValues[];
  }
  
  const ExperienceList: React.FC<IProps> = ({ experienceList }) => {
    const rootStore = useContext(RootStoreContext);
    const {deleteExperience} = rootStore.experienceStore;

    return (
      <Segment style={{marginTop:'4em'}}>
        <Header as="h3">Experiences Board</Header>
        <Table celled selectable>
          <Table.Header>
            <Table.HeaderCell>Title</Table.HeaderCell>
            <Table.HeaderCell>Description</Table.HeaderCell>
            <Table.HeaderCell>Employer</Table.HeaderCell>
            <Table.HeaderCell>Years</Table.HeaderCell>
            <Table.HeaderCell>Action</Table.HeaderCell>
          </Table.Header>
          <Table.Body>
            {experienceList.map((exp) => (
              <Table.Row>
                <Table.Cell>{exp.title}</Table.Cell>
                <Table.Cell>{exp.description}</Table.Cell>
                <Table.Cell>{exp.employer}</Table.Cell>
                <Table.Cell>{exp.years}</Table.Cell>
                <Table.Cell>
                <Button icon="edit" onClick={() => history.push(`/experience/${exp.id}`)}/>
                <Button icon="trash" color="red" onClick={() => deleteExperience(exp.id)}/>
              </Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
      </Segment>
    );
  };
  
  export default observer(ExperienceList);
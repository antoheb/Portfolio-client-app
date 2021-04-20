import { observer } from 'mobx-react'
import React, { useContext } from 'react'
import { combineValidators, isRequired } from 'revalidate'
import { Button, Form, Grid, Header, Segment } from 'semantic-ui-react'
import { ErrorMessage } from '../../../app/common/form/ErrorMessage'
import { RootStoreContext } from '../../../app/stores/rootStore'
import { Field, Form as FinalForm } from "react-final-form";
import { IProject } from '../../../app/models/project'
import { FORM_ERROR } from 'final-form';
import { TextInput } from '../../../app/common/form/TextInput'

const AddProjectForm: React.FC = () => {
  const validate = combineValidators({
    name: isRequired({ message: 'Name is mandantory' }),
    description: isRequired({ message: 'Description is mandantory' }),
    gitHubLink: isRequired({ message: 'Link is mandantory' }),
  })

  const rootStore = useContext(RootStoreContext)
  const { newProject } = rootStore.projectStore

  return (
    <Grid centered style={{ marginTop: '30px' }}>
      <Grid.Column>
        <Header as="h1" textAlign="center">
          Insert a new Project 
        </Header>
        <Segment clearing>
          <FinalForm
            validate={validate}
            onSubmit={(values: IProject) =>
              newProject(values).catch((error) => ({
                [FORM_ERROR]: error,
              }))
            }
            render={({
              handleSubmit,
              invalid,
              submitError,
              pristine,
              dirtySinceLastSubmit,
            }) => (
              <Form onSubmit={handleSubmit} error>
                <Grid centered>
                  <Grid.Row>
                    <Grid.Column>
                      <Field
                        placeholder="Name of Project"
                        name="name"
                        component={TextInput}
                      />
                    </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                    <Grid.Column>
                      <Field
                        placeholder="Description"
                        name="description"
                        component={TextInput}
                      />
                    </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                    <Grid.Column>
                      <Field
                        placeholder="GitHub Link"
                        name="gitHubLink"
                        component={TextInput}
                      />
                    </Grid.Column>
                  </Grid.Row>
                  {submitError && !dirtySinceLastSubmit && (
                    <Grid.Row>
                      <Grid.Column>
                        <ErrorMessage error={submitError} />
                      </Grid.Column>
                    </Grid.Row>
                  )}
                  <Grid.Row>
                    <Grid.Column>
                      <Button
                        disabled={
                          (invalid && !dirtySinceLastSubmit) || pristine
                        }
                        float="left"
                        basic
                        color="teal"
                        type="submit"
                        content="CREATE"
                      />
                    </Grid.Column>
                  </Grid.Row>
                </Grid>
              </Form>
            )}
          />
        </Segment>
      </Grid.Column>
    </Grid>
  )
}

export default observer(AddProjectForm)

import { observer } from 'mobx-react'
import React, { useContext } from 'react'
import { combineValidators, isRequired } from 'revalidate'
import { Button, Form, Grid, Header, Segment } from 'semantic-ui-react'
import { ErrorMessage } from '../../../app/common/form/ErrorMessage'
import { TextInput } from '../../../app/common/form/TextInput'
import { IProject } from '../../../app/models/project'
import { RootStoreContext } from '../../../app/stores/rootStore'
import { Field, Form as FinalForm } from 'react-final-form'
import { FORM_ERROR } from 'final-form'
import { history } from '../../../index'

interface IProps {
  project: IProject
  id: string
}

const EditEmployee: React.FC<IProps> = ({ project, id }) => {
  const validate = combineValidators({
    name: isRequired({ message: 'Name is mandantory' }),
    description: isRequired({ message: 'Description is mandantory' }),
    gitHubLink: isRequired({ message: 'Link is mandantory' }),
  })

  const rootStore = useContext(RootStoreContext)
  const { modifyProject } = rootStore.projectStore

  return (
    <Grid centered style={{ marginTop: '30px' }}>
      <Grid.Column>
        <Header as="h1" textAlign="center">
          Modify your project
        </Header>
        <Segment clearing>
          <FinalForm
            initialValues={project}
            validate={validate}
            onSubmit={(values: IProject) =>
              modifyProject(id, values).catch((error) => ({
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
                        fluid
                        basic
                        color="teal"
                        type="submit"
                        content="MODIFY"
                      />
                    </Grid.Column>
                  </Grid.Row>
                  <Grid.Row columns={1}>
                    <Grid.Column>
                      <Button
                        fluid
                        onClick={() => history.push('/project')}
                        basic
                        color="black"
                        content="CANCEL"
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

export default observer(EditEmployee)

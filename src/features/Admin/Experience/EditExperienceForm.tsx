import { observer } from 'mobx-react'
import React, { useContext } from 'react'
import { combineValidators, isRequired } from 'revalidate'
import { Button, Form, Grid, Header, Segment } from 'semantic-ui-react'
import { ErrorMessage } from '../../../app/common/form/ErrorMessage'
import { TextInput } from '../../../app/common/form/TextInput'
import { RootStoreContext } from '../../../app/stores/rootStore'
import { Field, Form as FinalForm } from 'react-final-form'
import { FORM_ERROR } from 'final-form'
import { history } from '../../../index'
import { IExperience } from '../../../app/models/experience'
import { TextAreaInput } from '../../../app/common/form/TextAreaInput'

interface IProps {
  experience: IExperience
  id: string
}

const EditExperienceForm: React.FC<IProps> = ({ experience, id }) => {
  const validate = combineValidators({
    title: isRequired({ message: 'Title is mandantory' }),
    description: isRequired({ message: 'Description is mandantory' }),
    employer: isRequired({ message: 'Employer is mandantory' }),
  })

  const rootStore = useContext(RootStoreContext)
  const { modifyExperience } = rootStore.experienceStore

  return (
    <Grid centered style={{ marginTop: '30px' }}>
      <Grid.Column>
        <Segment clearing>
          <Header as="h3" textAlign="center">
            Update Life Experience
          </Header>
          <FinalForm
            initialValues={experience}
            validate={validate}
            onSubmit={(values: IExperience) =>
              modifyExperience(id, values).catch((error) => ({
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
                        placeholder="Title position"
                        name="title"
                        component={TextInput}
                      />
                    </Grid.Column>
                  </Grid.Row>
                  <Grid.Row>
                    <Grid.Column>
                      <Field
                        placeholder="Description"
                        name="description"
                        component={TextAreaInput}
                      />
                    </Grid.Column>
                  </Grid.Row>
                  <Grid.Row>
                    <Grid.Column>
                      <Field
                        placeholder="Name of your employer (company)"
                        name="employer"
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
                        color="blue"
                        type="submit"
                        content="MODIFY"
                      />
                    </Grid.Column>
                  </Grid.Row>
                  <Grid.Row columns={1}>
                    <Grid.Column>
                      <Button
                        fluid
                        onClick={() => history.push('/experience')}
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

export default observer(EditExperienceForm)

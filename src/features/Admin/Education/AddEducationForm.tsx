import { observer } from 'mobx-react'
import React, { useContext } from 'react'
import { combineValidators, isRequired } from 'revalidate'
import { Button, Form, Grid, Header, Segment } from 'semantic-ui-react'
import { ErrorMessage } from '../../../app/common/form/ErrorMessage'
import { RootStoreContext } from '../../../app/stores/rootStore'
import { Field, Form as FinalForm } from 'react-final-form'
import { FORM_ERROR } from 'final-form'
import { TextInput } from '../../../app/common/form/TextInput'
import { IEducation } from '../../../app/models/education'
import { TextAreaInput } from '../../../app/common/form/TextAreaInput';

const AddEducationForm: React.FC = () => {
  const validate = combineValidators({
    schoolName: isRequired({ message: 'School name is mandantory' }),
    years: isRequired({ message: 'Years is mandantory' }),
    program: isRequired({ message: 'The program enrolled is mandantory' }),
    description: isRequired({ message: 'Description is mandantory' }),
  })

  const rootStore = useContext(RootStoreContext)
  const { newEducation } = rootStore.educationStore

  return (
    <Grid centered style={{ marginTop: '30px' }}>
      <Grid.Column>
        <Segment clearing>
          <Header as="h3" textAlign="center">
            Add New Education
          </Header>
          <FinalForm
            validate={validate}
            onSubmit={(values: IEducation) =>
              newEducation(values).catch((error) => ({
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
                        placeholder="School Name"
                        name="schoolName"
                        component={TextInput}
                      />
                    </Grid.Column>
                  </Grid.Row>
                  <Grid.Row>
                    <Grid.Column>
                      <Field
                        placeholder="Years"
                        name="years"
                        component={TextInput}
                      />
                    </Grid.Column>
                  </Grid.Row>
                  <Grid.Row>
                    <Grid.Column>
                      <Field
                        placeholder="Program enrolled"
                        name="program"
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

export default observer(AddEducationForm)

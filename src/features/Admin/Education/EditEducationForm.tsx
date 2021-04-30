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
import { IEducation } from '../../../app/models/education'
import { TextAreaInput } from '../../../app/common/form/TextAreaInput';

interface IProps {
  education: IEducation
  id: string
}

const EditEducationForm: React.FC<IProps> = ({ education, id }) => {
  const validate = combineValidators({
    schoolName: isRequired({ message: 'School name is mandantory' }),
    schoolAddress: isRequired({ message: 'School Address is mandantory' }),
    years: isRequired({ message: 'Years is mandantory' }),
    program: isRequired({ message: 'The program enrolled is mandantory' }),
    description: isRequired({ message: 'Description is mandantory' }),
  })

  const rootStore = useContext(RootStoreContext)
  const { modifyEducation } = rootStore.educationStore

  return (
    <Grid centered style={{ marginTop: '30px' }}>
      <Grid.Column>
        <Segment clearing>
          <Header as="h3" textAlign="center">
            Update Education
          </Header>
          <FinalForm
            initialValues={education}
            validate={validate}
            onSubmit={(values: IEducation) =>
              modifyEducation(id, values).catch((error) => ({
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
                        content="MODIFY"
                      />
                    </Grid.Column>
                  </Grid.Row>
                  <Grid.Row columns={1}>
                    <Grid.Column>
                      <Button
                        fluid
                        onClick={() => history.push('/education')}
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

export default observer(EditEducationForm)

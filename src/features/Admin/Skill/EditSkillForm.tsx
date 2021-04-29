import { observer } from 'mobx-react'
import React, { useContext } from 'react'
import { combineValidators, isRequired } from 'revalidate'
import { Grid, Segment, Header, Form, Button } from 'semantic-ui-react'
import { ErrorMessage } from '../../../app/common/form/ErrorMessage'
import { TextInput } from '../../../app/common/form/TextInput'
import { ISkill } from '../../../app/models/skill'
import { RootStoreContext } from '../../../app/stores/rootStore'
import { Field, Form as FinalForm } from 'react-final-form'
import { FORM_ERROR } from 'final-form'
import { history } from '../../..'
import { NumberInput } from '../../../app/common/form/NumberInput'

interface IProps {
  skill: ISkill
  id: string
}

const EditSkillForm: React.FC<IProps> = ({ id, skill }) => {
  const validate = combineValidators({
    name: isRequired({ message: 'Name is mandantory' }),
    progress: isRequired({ message: 'Progress is mandantory and must be a number' }),
  })

  const rootStore = useContext(RootStoreContext)
  const { modifySkill } = rootStore.skillStore

  return (
    <Grid centered style={{ marginTop: '30px' }}>
      <Grid.Column>
        <Segment clearing>
          <Header as="h3" textAlign="center">
            Modify Skill
          </Header>
          <FinalForm
            initialValues={skill}
            validate={validate}
            onSubmit={(values: ISkill) =>
              modifySkill(id, values).catch((error) => ({
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
                        placeholder="Name of Skill"
                        name="name"
                        component={TextInput}
                      />
                    </Grid.Column>
                  </Grid.Row>
                  <Grid.Row>
                    <Grid.Column>
                      <Field
                        placeholder="Progress"
                        name="progress"
                        component={NumberInput}
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
                        onClick={() => history.push('/skill')}
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

export default observer(EditSkillForm)
